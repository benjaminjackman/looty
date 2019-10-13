@echo off
rem does last folder in current directory is bin?
if /i "%__CD__:~-4,3%" equ "bin" goto notRoot

set JVM_ARGS=
set JVM_ARGS=%JVM_ARGS% -XX:+UseStringDeduplication
set JVM_ARGS=%JVM_ARGS% -server
set JVM_ARGS=%JVM_ARGS% -Xss4M
set JVM_ARGS=%JVM_ARGS% -Djava.net.preferIPv4Stack=true
set JVM_ARGS=%JVM_ARGS% -Xms512m
set JVM_ARGS=%JVM_ARGS% -Xmx3g
set JVM_ARGS=%JVM_ARGS% -Xverify:none
set JVM_ARGS=%JVM_ARGS% -XX:+CMSClassUnloadingEnabled
set JVM_ARGS=%JVM_ARGS% -XX:+TieredCompilation
set JVM_ARGS=%JVM_ARGS% -XX:+UseCodeCacheFlushing
set JVM_ARGS=%JVM_ARGS% -XX:+UseCompressedOops
set JVM_ARGS=%JVM_ARGS% -XX:+UseConcMarkSweepGC
set JVM_ARGS=%JVM_ARGS% -XX:+UseParNewGC
set JVM_ARGS=%JVM_ARGS% -XX:CodeCacheMinimumFreeSpace=32m
set JVM_ARGS=%JVM_ARGS% -XX:MaxGCPauseMillis=5
rem JVM_ARGS="$JVM_ARGS -XX:ReservedCodeCacheSize=512m"

java %JVM_ARGS% -jar %__CD__%\bin\sbt-launch-0.13.0.jar %1

if %ERRORLEVEL% NEQ 0 goto Req
goto :EOF

:notRoot
	echo.	 
	echo  Run sbt-win.cmd outside of bin\ folder 
	echo  to properly set root of the project to \looty, instead of \looty\bin
goto :EOF

:Req
echo.
echo  If something went wrong, check if you have :
echo  1. java ver. 8 installed, and executing .jar with it!
echo  https://github.com/frekele/oracle-java/releases
echo  2. node.js ver. 8 installed
echo  https://nodejs.org/en/download/releases/
echo  https://nodejs.org/download/release/v8.0.0/node-v8.0.0-x64.msi
echo  or if you have later version, use
echo  3. nvs - node.js version switcher
echo  https://github.com/jasongin/nvs																
echo.
goto :EOF