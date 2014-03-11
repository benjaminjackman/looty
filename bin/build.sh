#!/bin/bash


if [ -d build ]; then
  echo build exists, erase it if you want to proceed
  exit 1
fi

mkdir build
OUT="$(pwd)/build"
SRC=looty/target/scala-2.10
cp "$SRC/looty.html" "$SRC/looty-opt.js" "$SRC/manifest.json" "$OUT"
cp -r $SRC/images "$OUT"
cp -r $SRC/jslib "$OUT"
