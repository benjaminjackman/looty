### How to prepare your own sample-item file
API requests tool   
https://app.swaggerhub.com/apis-docs/Chuanhsing/poe/1.0.0#/
### Steps
Make new file .json  
```json
{
}
```
Get request results from api

 /character-window/get-stash-items - repeat for every tab you wish
```
curl -X GET "https://www.pathofexile.com/character-window/get-stash-items?league=LEAGUE_NAME&realm=pc&accountName=ACCOUNTNAME&tabs=1&tabIndex=TAB_INDEX" -H "accept: */*" -H "Cookie: POESESSID=YOUR_POESSID"
```

Create key in your json called "UnknownAccount!-LEAGUE_NAME-TAB_INDEX-stis"
and insert into file, with result from previous step as its value. Like that:

```json
{
  "UnknownAccount!-LEAGUE_NAME-TAB_INDEX-stis": 
  {
    "items": [
      {
      },
    ],
    "numTabs": NUMBER_OF_TABS,
 },  
}
```
You only need to make request with tabs=1 once, to get "tabs" array of stash tabs objects which you will add below, as key "UnknownAccount!-LEAGUE_NAME-stis"

```json
{
  "UnknownAccount!-LEAGUE_NAME-stis": 
  {
    "tabs": [
      {
      },       
    ]
  }
}
```

 /character-window/get-items - repeat for every character you wish
```  
curl -X GET "https://www.pathofexile.com/character-window/get-items?accountName=ACCOUNTNAME&character=YOUR_CHARACTER" -H "accept: application/json" -H "Cookie: POESESSID=YOUR_POESSID"
```  

Create key in your json called "UnknownAccount!-YOUR_CHARACTER-inventory"
and insert into file, with result from previous step as its value. Like that:
```json
{
  "UnknownAccount!-YOUR_CHARACTER-inventory": 
  {
    "character": {    
    },
    "items": [
      {
      },
    ]
  },  

}
```

Lastly we will add list of our characters from  
/character-window/get-characters
```
curl -X GET "https://www.pathofexile.com/character-window/get-characters?accountName=ACCOUNTNAME" -H "accept: */*"
```

So ... Create key in your json called "UnknownAccount!-characters"
and insert into file, with result from previous step as its value. Like that or ... sort of :)
```json
{
  "UnknownAccount!-characters": [
    {
      "name": "MightyPants",
      "league": "Standard",
      "classId": 4,
      "ascendancyClass": 1,
      "class": "Slayer",
      "level": 92,
      "experience": 2271226958
    },
    {
    }
  ]
}
``` 

That's it! Your file is ready!
Happy testing. :)

P.S. If you would like to change contents of file while testing, don't forget to run 
fastOptJS/fullOptJS for new values to appear.



