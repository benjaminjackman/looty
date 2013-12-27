#!/bin/bash

if [ "$0" != "bin/download-site.sh" ]; then
  echo "please run this script only from the root folder of the git checkout location"
  exit 1
fi

mkdir -p tmp/site
cd tmp/site
wget -O prefix-mods.html http://www.pathofexile.com/item-data/prefixmod
wget -O suffix-mods.html http://www.pathofexile.com/item-data/suffixmod
wget -O weapons.html http://www.pathofexile.com/item-data/weapon
wget -O armours.html http://www.pathofexile.com/item-data/armour
wget -O jewelry.html http://www.pathofexile.com/item-data/jewelry
wget -O stength-gems.html http://www.pathofexile.com/skills/strength
wget -O dexterity-gems.html http://www.pathofexile.com/skills/dexterity
wget -O intelligence-gems.html http://www.pathofexile.com/skills/intelligence
wget -O support-gems.html http://www.pathofexile.com/skills/supportgems

