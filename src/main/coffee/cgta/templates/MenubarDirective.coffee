#
# Copyright (c) 2013 Ben Jackman, Jeff Gomberg
# All Rights Reserved
# please contact ben@jackman.biz or jeff@cgtanalytics.com
# for licensing inquiries
# Created by bjackman @ 8/29/13 11:54 AM
#


Templates = window.Templates = window.Templates ? {}

Templates.MenubarDirective = """
<ul class="menubar">
  <li class="menubar-entry" ng-repeat="entry in entries">
    <a href="{{entry.url}}">
      <span><i class="{{entry.icon}}"></i> {{entry.name}}</span>
    </a>
  </li>
</ul>
"""
