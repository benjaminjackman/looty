scalacOptions += "-deprecation"

addSbtPlugin("org.scala-lang.modules.scalajs" % "scalajs-sbt-plugin" % "0.5.6")

addSbtPlugin("com.github.mpeltonen" % "sbt-idea" % "1.5.1")

addSbtPlugin("com.typesafe.sbt" % "sbt-less" % "1.0.2")

//addSbtPlugin("com.lihaoyi" %% "scalatex" % "0.1.0")
//addSbtPlugin("com.typesafe.sbt" % "sbt-twirl" % "1.0.4")
//someProject.enablePlugins(SbtTwirl)
//lazy val root = (project in file(".")).enablePlugins(SbtTwirl)
//TwirlKeys.templateImports += "org.example._"
//sourceDirectories in (Compile, TwirlKeys.compileTemplates) := (unmanagedSourceDirectories in Compile).value
