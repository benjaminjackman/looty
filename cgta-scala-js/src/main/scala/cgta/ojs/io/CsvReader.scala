package cgta.ojs.io


//////////////////////////////////////////////////////////////
// Copyright (c) 2014 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 9/1/14 2:09 PM
//////////////////////////////////////////////////////////////

object CsvReader {
  def apply(lines: Iterator[String]): CsvReader = {
    val colByName = lines.next().split(",").zipWithIndex.toMap
    new CsvReader(colByName, lines.map(_.split(",").toArray).toArray)
  }
  implicit class ArrayExtensions[A](val xs: Array[A]) extends AnyVal {
    def getOpt(i : Int) : Option[A] = if (i >= 0 && i < xs.length) Some(xs(i)) else None
  }
}

class CsvReader(hdrMap: Map[String, Int], rowArray: Array[Array[String]]) {
  import CsvReader.ArrayExtensions
  val colNames = hdrMap.iterator.map(_.swap).toList.sortBy(_._1).map(_._2).toArray
  def rows : IndexedSeq[Map[String, String]] = new IndexedSeq[Map[String, String]] {
    override def length: Int = rowArray.length
    override def apply(idx: Int): Map[String, String] = new Map[String, String] {
      override def +[B1 >: String](kv: (String, B1)): Map[String, B1] = sys.error("Don't add to csv rows")
      override def get(key: String): Option[String] = hdrMap.get(key).flatMap(ci => rowArray(idx).getOpt(ci))
      override def iterator: Iterator[(String, String)] = (rowArray(idx) zip colNames).iterator
      override def -(key: String): Map[String, String] = sys.error("Don't remove from csv rows")
    }
  }
}
