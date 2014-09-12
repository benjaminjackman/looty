import org.sbtidea.SbtIdeaPlugin
import sbt._
import Keys._
import scala.scalajs.sbtplugin.ScalaJSPlugin._
import ScalaJSKeys._

object Build extends sbt.Build {

  val generateHtml = Def.task {
    val log = streams.value.log

    //Copy over the html files, while filling in the template sections
    val htmlSrcDir: File = (sourceDirectory in Compile).value / "html"
    val htmlSrcs: PathFinder = htmlSrcDir * "*.template.html"
    val outDir: File = (crossTarget in Compile).value
    val outMappings = htmlSrcs x Path.rebase(htmlSrcDir, outDir)
    outMappings.flatMap {
      case (in, out0) =>
        val content = IO.read(in)
        val outDir = out0.getParentFile
        val regex = """.*/([^/]+)\.template\.html""".r
        val basename = regex.findFirstMatchIn(in.getPath).get.group(1)
        //Make a dev version and a release version
        val devFile = outDir / (basename + "-dev.html")
        val releaseFile = outDir / (basename + ".html")

        val devScripts = """<script type="text/javascript" src="looty-fastopt.js"></script>""".stripMargin
        val releaseScripts = """<script type="text/javascript" src="looty-opt.js"></script>"""

        val devOut = content.replace("<!-- insert scalajs -->", devScripts)
        val releaseOut = content.replace("<!-- insert scalajs -->", releaseScripts)

        IO.write(devFile, devOut.getBytes("UTF-8"))
        IO.write(releaseFile, releaseOut.getBytes("UTF-8"))
        List(devFile, releaseFile)

    }

    Seq[File](outMappings.map(_._1): _*)
  }

  val copyAll = Def.task {
    val outDir = (crossTarget in Compile).value

    IO.copyFile((resourceDirectory in Compile).value / "manifest.json", outDir / "manifest.json")
    IO.copyFile((sourceDirectory in Compile).value / "html" / "popup.html", outDir / "popup.html")
    IO.copyDirectory((resourceDirectory in Compile).value / "images", outDir / "images")
    IO.copyDirectory((resourceDirectory in Compile).value / "data", outDir / "data")
    IO.copyDirectory((baseDirectory in Compile).value / "jslib", outDir / "jslib")

    val out = Seq[File](
      (resourceDirectory in Compile).value / "manifest.json",
      (sourceDirectory in Compile).value / "html" / "popup.html",
      (resourceDirectory in Compile).value / "images",
      (resourceDirectory in Compile).value / "data",
      (baseDirectory in Compile).value / "jslib"
    )

    out
  }


  def pject(name: String) = Project(name, file(name)).settings(
    scalaJSSettings: _*).settings(
      scalacOptions += "-deprecation",
      scalacOptions += "-unchecked",
      scalacOptions += "-feature",
      scalacOptions += "-language:implicitConversions",
      scalacOptions += "-language:existentials",
      scalacOptions += "-language:higherKinds"
    ).settings(
      cgta.otest.OtestPlugin.settingsSjs: _*
    ).settings(
      autoCompilerPlugins := true,
      ScalaJSKeys.requiresDOM := true,
      libraryDependencies += compilerPlugin("org.scala-lang.plugins" % "continuations" % scalaVersion.value),
      libraryDependencies ++= Seq(
        "org.scala-lang.modules.scalajs" %%% "scalajs-dom" % "0.6",
        "org.scala-lang.modules" %% "scala-async" % "0.9.2",
        "biz.cgta" %%% "otest-sjs" % "0.1.12",
        "biz.cgta" %%% "oscala-sjs" % "0.1.0",
        "biz.cgta" %%% "cenum-sjs" % "0.1.0",
        "biz.cgta" %%% "serland-sjs" % "0.1.0"
      )
    )

  lazy val looty = pject("looty").settings(
    SbtIdeaPlugin.ideaBasePackage := Some("looty"),
    resourceGenerators in Compile <+= generateHtml,
    watchSources += (sourceDirectory in Compile).value / "html",
    resourceGenerators in Compile <+= copyAll,
    libraryDependencies += "org.scala-lang.modules.scalajs" %%% "scalajs-jquery" % "0.6",
    libraryDependencies += "com.github.japgolly.scalajs-react" %%% "core" % "0.4.0",
    libraryDependencies += "com.scalatags" %%% "scalatags" % "0.3.8"
  )

  lazy val root = Project("root", file(".")).aggregate(looty)

  object Libs {
  }

}

