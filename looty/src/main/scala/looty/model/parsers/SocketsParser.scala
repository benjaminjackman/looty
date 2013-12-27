package looty
package model.parsers

import looty.model.ComputedItem

//////////////////////////////////////////////////////////////
// Copyright (c) 2013 Ben Jackman, Jeff Gomberg
// All Rights Reserved
// please contact ben@jackman.biz or jeff@cgtanalytics.com
// for licensing inquiries
// Created by bjackman @ 12/19/13 2:07 AM
//////////////////////////////////////////////////////////////


object SocketsParser {

  def parse(ci: ComputedItem): Boolean = {
    ci.item.sockets.toOption.foreach { sockets =>
      ci.sockets = sockets.toList.groupBy(_.group).values.map(_.map(_.color).toList.sorted).toList.sortBy(-_.size)
    }
    true
  }

}