# -*- coding: utf-8 -*-
import json
from pprint import pprint

data_filename = 'item_data.json';
output_filename = 'itemdata.js';

# This is fucked up. For compatability reasons so it works with the original code.
# At some point you'll need to fix the problem at the source. Would be better to draw data directly from data.json

poe_ext_types = {
    "Two Hand Sword": "weapon2h",
    "One Hand Mace": "weapon1h",
    "Dagger": "weapon1h",
    "Two Hand Axe": "weapon2h",
    "Wand": "weapon1h",
    "One Hand Axe": "weapon1h",
    "Bow": "weapon2h",
    "One Hand Sword": "weapon1h",
    "Two Hand Mace": "weapon2h",
    "Thrusting One Hand Sword": "weapon1h",
    "Sceptre": "weapon1h",
    "Claw": "weapon1h",
    "Staff": "weapon2h",
    "Helmet": "head",
    "Body Armour": "chest",
    "Gloves": "hands",
    "Shield": "shield",
    "Boots": "feet",
    "Amulet": "amulet",
    "Ring": "ring",
    "Belt": "belt"
    #"??????????": "map"
    #"??????????": "quiver"
    #"??????????": "flasks"
}
# because there's currently no list on the offical poe website.
maps = ["Crypt Map", "Dried Lake Map", "Dunes Map", "Dungeon Map", "Grotto Map", "Overgrown Ruin Map", "Tropical Island Map", "The Coward's Trial Map", "Arcade Map", "Arsenal Map", "Cemetery Map", "Mountain Ledge Map", "Sewer Map", "Thicket Map", "Wharf Map", u"Maelström of Chaos Map", "Ghetto Map", "Mud Geyser Map", "Reef Map", "Spider Lair Map", "Springs Map", "Vaal Pyramid Map", "Vaults of Atziri Map", "Catacombs Map", "Overgrown Shrine Map", "Promenade Map", "Shore Map", "Spider Forest Map", "Tunnel Map", "Acton's Nightmare Map", "Bog Map", "Coves Map", "Graveyard Map", "Pier Map", "Underground Sea Map", "Arachnid Nest Map", "Colonnade Map", "Dry Woods Map", "Strand Map", "Temple Map", "Jungle Valley Map", "Torture Chamber Map", "Waste Pool Map", "Mine Map", "Dry Peninsula Map", "Canyon Map", "Cells Map", "Dark Forest Map", "Gorge Map", "Maze Map", "Underground River Map", "Bazaar Map", "Necropolis Map", "Plateau Map", "Crematorium Map", "Precinct Map", "Shipyard Map", "Shrine Map"]
quivers = ["Rugged Quiver", "Cured Quiver", "Conductive Quiver", "Heavy Quiver", "Light Quiver"]
flasks = ["Small Life Flask","Medium Life Flask","Large Life Flask","Greater Life Flask","Grand Life Flask","Giant Life Flask","Colossal Life Flask","Sacred Life Flask","Hallowed Life Flask","Small Mana Flask","Medium Mana Flask","Large Mana Flask","Greater Mana Flask","Grand Mana Flask","Giant Mana Flask","Colossal Mana Flask","Sacred Mana Flask","Hallowed Mana Flask","Small Hybrid Flask","Medium Hybrid Flask","Large Hybrid Flask","Colossal Hybrid Flask","Sacred Hybrid Flask","Hallowed Hybrid Flask","Quicksilver Flask","Ruby Flask","Sapphire Flask","Topaz Flask","Amethyst Flask","Granite Flask","Diamond Flask"]

#print '"' + '", "'.join(['", "'.join(x.keys()) for x in data.values()]) + '"'

prefix = 'ITEM_DATA = '
suffix = ';'

def main():
    out = {}
    data = json.load(file(data_filename, 'r'))

    for p in data:
        for s in data[p]:
            for i in data[p][s]:
                out[i['Name']] = {
                    'old_type': poe_ext_types[s],
                    'type': p,
                    'sub_type': s,
                    'level': i['Level']
                }

    # data not on official website
    for item_name in maps:
        out[item_name] = {
            'old_type': 'map',
            'type': 'Map',
            'sub_type': 'Map',
            'level': None
        }
    for item_name in quivers:
        out[item_name] = {
            'old_type': 'quiver',
            'type': 'Jewelry',
            'sub_type': 'Quiver',
            'level': None
        }
    for item_name in flasks:
        out[item_name] = {
            'old_type': 'flask',
            'type': 'Flask',
            'sub_type': 'Flask',
            'level': None
        }


    json_string = json.dumps(   out,
                                sort_keys = True,
                                indent = 4,
                                separators = (',', ': '))
    f = open(output_filename, 'w')
    f.write(prefix + json_string + suffix)

if __name__ == '__main__':
    main()