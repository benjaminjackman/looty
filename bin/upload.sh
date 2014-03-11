#!/bin/bash


if [ "$0" != "bin/upload.sh" ]; then
  echo "Please run from the root of the looty project folder"
  exit 1
fi

rm -rf build
mkdir build
OUT="$(pwd)/build"
SRC=looty/target/scala-2.10
cp "$SRC/looty.html" "$SRC/looty-opt.js" "$SRC/manifest.json" "$OUT"
cp -r $SRC/images "$OUT"
cp -r $SRC/jslib "$OUT"
google-chrome --pack-extension=build --pack-extension-key=$HOME/looty.pem
VERSION=$(jq -r .version build/manifest.json)
# FNAME=looty-$VERSION.crx
cp build.crx ../looty-deploy/looty-latest.crx
cd ../looty-deploy 
# git add $FNAME
git commit -a -m "Auto Commit of Latest Version $VERSION"
git push origin HEAD