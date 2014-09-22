import java.io.SequenceInputStream
import java.io.{File, InputStream}
import java.text.SimpleDateFormat
import java.util.Date
import scala.annotation.tailrec
//This script will strip the log files emitted from sbt into something that
//will display in the console in idea


object PRINT {def |(s: Any) = Console.println(s)}
object INFO {
  def |(s: Any) = {
    Console.print("<INF> ")
    Console.println(s)
  }
}
object DEBUG {
  def |(s: Any) = if (IdeaStrip.debug) {
    Console.print("<DBG> ")
    Console.println(s)
  }
}


object IdeaStrip {
  val debug = false

  val projects = List("looty", "cgta-scala-js").map(Project.apply _)

  val MaxLen = projects.flatMap(_.allPaths.map(_.name.length())).max

  def start() {
    INFO | "Starting Idea Strip -- Pure Scala Script Version 0.1"
    INFO | "Projects: " + projects.map(_.name).mkString("[", ",", "]")
    INFO | "CWD " + new File(".").getAbsolutePath
    //    PRINT | "%-20s >>> ".format("HELLO THERE") + "You are welcome, friend."
    INFO | "Starting all threads"
    projects.foreach(_.start)
    while (true) {
      Thread.sleep(60000);
    }
  }
}

object Line {
  val info  = "info"
  val debug = "debug"
  val warn  = "warn"
  val error = "error"

  def parse(raw: String): Option[Line] = {
    val REGEX = "\\[([^ ]*)\\] (.*)".r
    raw match {
      case REGEX(lvl, msg) => Some(Line(lvl, msg))
      case x => None // Some(Line("???", x))
    }
  }
}
case class Line(lvl: String, msg: String) {

  def withMsg(message: String): Line = {
    val level = lvl match {
      case Line.debug => " . "
      case Line.info => ".i."
      case Line.warn => "=w="
      case Line.error => "#E#"
      case x => x
    }
    Line(level, message)
  }

  def transform = withMsg(this.msg)
}


object LineParsers {

  def filepath(line: Line) = {
    if (line.lvl == Line.warn || line.lvl == Line.error) {
      val Regex = "[^ ]+/src/(main|test)/scala/([^ ]*)/([^/ ]*)\\.scala:([0-9]*): (.*)".r
      line.msg match {
        case Regex(_, pack, cname, lnum, msg) => {
          val pkg = pack.replaceAll("/", ".")
          val m = "<<< at " + pkg + "." + cname + ".some_method(" + cname + ".scala:" + lnum + ") >>> "
          List(line.withMsg(m), line.withMsg(msg))
        }
        case _ => Nil
      }
    } else {
      Nil
    }
  }

  def initialChanges(line: Line) = {
    line.msg.contains("Initial source changes")
  }

  def fallback(line: Line) : Option[Line] = {
    if (line.lvl != Line.debug) {
      Some(line.transform)
    } else {
      None
    }
  }

}


case class IdeaParse(p: Path) {
  var justPrintedInitialChanges = false
  def log(s: Line) = {
    val tstamp = new SimpleDateFormat("HH:mm:ss").format(new Date())
    val res = new StringBuilder
    res.append(tstamp).append(" ")
    res.append("(").append(("%-" + IdeaStrip.MaxLen + "s").format(p.name)).append(") ")
    res.append(s.lvl).append(" ")
    //    res.append("[").append(s.msg).append("]")
    res.append(s.msg)
    PRINT | res.toString()
  }

  def stripANSI(s: String) = {
    s.replaceAll("\033\\[[0-9]+[m]", "")
  }

  def apply(s: String) {
    Line.parse(stripANSI(s)).foreach { line =>
      val res = LineParsers.filepath(line) match {
        case Nil => {
          if (LineParsers.initialChanges(line) && !justPrintedInitialChanges) {
            justPrintedInitialChanges = true
            PRINT | (" " * 50)
            PRINT | ("#" * 50)
            PRINT | (" " * 50)
          } else {
            justPrintedInitialChanges = false
            LineParsers.fallback(line).foreach(log)
          }
        }
        case xs => {
          justPrintedInitialChanges = false
          xs.foreach(log)
        }
      }
    }
  }
}

case class Project(name: String) {
  def streamsPath = Path(name, "./" + name + "/target/streams/")
  def globalPath = Path("global", "$global/$global/$global/streams/out")
  def testPath = Path("test", "test/compile/$global/streams/out")
  def compilePath = Path("compile", "compile/compile/$global/streams/out")
  def subpaths = List(globalPath, testPath, compilePath)
  def allPaths = subpaths.map(streamsPath / _)

  def threads = allPaths.map {p =>
    val parser = IdeaParse(p)
    TailThread(p)(parser.apply)
  }


  def start = threads.foreach(_.start())

}

case class Path(name: String, path: String) {
  def /(p: Path) = Path(name + "." + p.name, path + (if (path endsWith "/") "" else "/") + p.path)
}

/**
 * This class will actually follow the file
 * @param p
 * @param f
 */
case class TailThread(val p: Path)(f: String => Unit) {

  val thread = new Thread(new Runnable {def run() {main()}})

  def start() {
    DEBUG | "Starting watcher " + p.name
    thread.start()
  }

  var buf = new StringBuilder

  def main() {
    try {
      val fis = Tail.follow(new File(p.path))

      def loop {
        val c = fis.read()
        if (c == '\n'.toInt) {
          f(buf.toString)
          buf = new StringBuilder
          loop
        } else if (c != -1) {
          buf.append(c.toChar)
          loop
        } else {
          //-1 is DEAD LAND
          PRINT | p + " REACHED EOF ??? " + buf.toString
        }
      }
      loop
    } finally {
      PRINT | "EXITING Watcher of " + p
    }
  }

}


IdeaStrip.start()


/**
 * https://github.com/alaz/tailf
 *
 * Copyright (C) 2009 alaz <azarov@osinka.ru>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

object Tail {

  /**
   * Create InputStream reading from a log file
   *
   * Calls follow with reasonable defaults:
   * 3 open retries
   * 1 second waiting for new file after the previous has disappeared
   * 0.1 second waiting between reads
   */
  def follow(file: File, openTries: Int = -1, openSleepMs: Int = 500, readSleepMs: Int = 100): InputStream = {
    def sleep(msec: Long) = () => Thread.sleep(msec)
    follow(file, openTries, sleep(openSleepMs), sleep(readSleepMs))
  }

  /**
   * Create InputStream reading from a log file
   *
   * Creates an Input Stream reading from a growing file, that may be rotated as well
   * @param file File handle to the log file
   * @param openTries how many times to try to re-open the file
   * @param openSleep a function to sleep between re-open retries
   * @param rereadSleep a function to be called when the stream walked to the end of
        the file and need to wait for some more input
   * @return InputStream object
   */
  def follow(file: File, openTries: Int, openSleep: () => Unit, rereadSleep: () => Unit): InputStream = {
    val e = new java.util.Enumeration[InputStream]() {
      def nextElement = new FollowingInputStream(file, rereadSleep)
      def hasMoreElements = testExists(file, openTries, openSleep)
    }
    new SequenceInputStream(e)
  }

  /**
   * Test file existence N times, wait between retries
   *
   * @param file file handle
   * @param tries how many times to try
   * @param sleep function to call between tests
   * @return true on success
   */
  def testExists(file: File, tries: Int, sleep: () => Unit): Boolean = {
    def tryExists(n: Int): Boolean =
      if (file.exists) true
      else if (tries > 0 && n > tries) false
      else {
        sleep()
        tryExists(n + 1)
      }

    tryExists(1)
  }
}

/**
 * InputStream that handles growing file case
 *
 * The InputStream will not raise EOF when it comes to the file end. Contrary,
 * it will wait and continue reading.
 *
 * It will not handle the case when the file has been rotated. In this case,
 * it behaves just if it found EOF.
 */
class FollowingInputStream(val file: File, val waitNewInput: () => Unit) extends InputStream {
  import java.io.FileInputStream
  private val underlying = new FileInputStream(file)

  def read: Int = handle(underlying.read)

  override def read(b: Array[Byte]): Int = read(b, 0, b.length)

  override def read(b: Array[Byte], off: Int, len: Int): Int = handle(underlying.read(b, off, len))

  override def close = underlying.close

  protected def rotated_? = {
    underlying.getChannel.position > file.length
  }
  protected def closed_? = !underlying.getChannel.isOpen

  @tailrec
  private def handle(read: => Int): Int = read match {
    case -1 if rotated_? || closed_? => -1
    case -1 =>
      waitNewInput()
      handle(read)
    case i => i
  }

  require(file != null)
  assume(file.exists)
}