cgta-scala-js
=============

Helpers for scala js used by Benjamin Jackman


# Learning #

##  First read Sebastien's paper:
http://infoscience.epfl.ch/record/190834/



# Tips #
##  debugger / typeof not expressible?
Use this line to pause execution of the script and show a debugger in chrome when the dev tools are open
    js.eval("debugger")
    js.eval("typeof(x)")
Is there a way to encode these language constructs without resorting to hacks? These aren't methods
on global, so calling window.debugger doesn't work, they are like actual javascript syntax.

perhaps js"" (StringContext) blocks would be handy for inserting actual raw javascript into scala that the compiler
then emits at those locations


## Cast to js.Dictionary to access fields on js objects using strings
When you need to get a field by using a string that contains
its name do this
    val xs : js.Any = ???
    xs.asInstanceOf[js.Dictionary]
    xs("somefield") // becomes xs["somefield"] in js

##  How to check for undefined?
use isInstanceOf[js.Undefined] (there should be an undefined value however)


##  How does one make a simple javascript object?
dictionaries seem to have issues when the types are mixed
for example
    val d = js.Dictionary (
      "x" -> "AString",
      "y" -> 4
    )
errors out with
    [error] No implicit view available from Any => scala.scalajs.js.Any.
    [error]     val d = js.Dictionary (
    [error]                           ^
    [error] one error found

Here is what I went with:
    val d = js.Object().asInstanceOf[js.Dynamic]
    d.x = "AString"
    d.y = 4

I will write a dsl to make this better i think
UPDATE: I have, see ojs.obj()

##  Converting scala types to js.Any
example:
    case class Point(x: Int, y:      Int)
    import scala.scalajs.js
    import js.Dynamic.{ global => g }
        g.console.log(p)
    [error]  found   : example.Point
    [error]  required: scala.scalajs.js.Any
    [error]     g.console.                log(p)
    [error]                   ^

use .asInstanceOf[js.Any]



# Bugs #

## Stringlike .capitalize method doesn't work
console.log("hi".capitalize)
Uncaught TypeError: Object hi has no method 'toCharArray'
(that is a java method, needs to be added)

##  String interpolation breaks with undefined/null values

    val x = js.Dictionary().asInstanceOf[js.Dynamic]
    s"${x.y}" //throws:Uncaught TypeError: Cannot call method 'toString' of undefined

    val x = js.Dictionary("y" -> null).asInstanceOf[js.Dynamic]
    s"${x.y}" //throws:Uncaught TypeError: Cannot call method 'toString' of null

Versus Scala Behaviour

    scala> object Y {val x = null}
    defined module Y

    scala> s"${Y.x}"
    res1: String = null




# Issues #

## Equality is tricky ##
Equality is a bit hairy, since == is unchecked in scala
and you can easily end up comparing a js.String to String
this is an issue with using implicit conversions in the
way ScalaJs and is pretty unavoidable, I have taken to
always using my typesafe equals operator, to catch these
error. The compiler will also usually warn when comparing
these types as they can never be equal. I want the extra
security type safe equals brings. And equality that captures
and uses relevant implicit conversions would probably be desired.
I have defined my typesafe equals operators as
=?= and =!=

## No gt, lt etc on js.Dynamic ##
Needs to be added so that it doesn't treat those operations
as function calls

## js.Array[A <: js.Any] ? ##
It's pretty easy to end up with a js.Array of scala Ints rather than of js.Numbers
this could be dangerous, maybe the default case should push for the implicit conversion,
that of course has it's own problems.

    object NewJs extends Dynamic {
      def applyDynamicNamed(name: String)(args: (String, js.Any)*) = {
        if (name != "apply") {
          sys.error("Call NewJs like this NewJs")
        }
        val obj = js.Object().asInstanceOf[js.Dictionary]
        args.foreach { case (name, value) =>
          obj(name) = value
        }
        obj
      }
    }

    def main(args: Array[String]) {
      console.log("Begin Main!")
      console.log(NewJs(x = 5, y = 5, zs = js.Array(1,2,3))) //Scala Ints end up in array
      console.log(NewJs(x = 5, y = 5, zs = js.Array[js.Number](1,2,3)))//Js numbers end up in array
    }

# Additions #

##  Promises and future
I have gotten an implemenation of the scala Future/Promises they convert over from APlus futures
this makes callback styled programming a lot better.

I also added implicits to them to assist with js-centric development they located at
/src/main/scala/cgta/sjs/lang/JsExtensions.scala

there is a .log() that will log the result of a future, which I have found to be very handy
for exploring apis.


##  Continuations
I would like to look into continuations as well as a well to make the code look like normal blocking
code

##  Decant a helper for converting callbacks to futures
I made a simple function that can convert basic structures to futures very easily
it's in /src/main/scala/cgta/sjs/lang/OJsDsl.scala
    //Converts a callback style into a future
    //el.on("click", (x) => console.log(x))
    //decant(el.on("click", _)).onSuccess(console.log(_))
    def decant[A](cb0 : ((A) => Unit) => Unit) : Future[A] = {
      val p = JsPromise[A]()
      def cb(a : A) {
        p.success(a)
      }
      cb0(cb)
      p.future
    }
Here is a sample usage:
    val s = newObject
    s.x = 5
    Storage.local.set(s)
    decant[js.Any](Storage.local.get(s, _)).log()
    //Prints Object {x: 5}


# Suggestions #

## asInstanceOf that perform validation (perhaps as a runtime check in development mode or behind a flag)
Would really be nice to have the asInstanceOf[js.SomeJsType] checks actually validate the types,
maybe isInstanceOf does this already? some sort of structural type checking would be useful
when interacting with APIs from websites to do some validation

## Camelcase Js or JS ?
I think when the abbreviation js needs to be capitalized in a camel case name, it should be done so as Js not JS
the reason is that in camel casing Js reads as one token whereas JS is two a J and then an S consider programmatically
converting camel case to - notation JsFuture becomes js-future whereas JSFuture becomes j-s-future



