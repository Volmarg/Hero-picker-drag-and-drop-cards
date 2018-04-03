var json={
  "characters":{
    "ana":{
      "1":"WINSTON"
    },
    "bastion":{
      "1":"SOMBRA"
    },
    "d.va":{
      "1":"ZARYA"
    },
    "doomfist":{
      "1":"PHARAH",
      "2":"SOMBRA"
    },
    "genji":{
      "1":"WINSTON",
      "2":"ZARYA"
    },
    "hanzo":{
      "1":"D.VA",
      "2":"GENJI",
      "3":"TRACER",
      "4":"WINSTON"
    },
    "junkrat":{
      "1":"PHARAH",
      "2":"WIDOWMAKER"
    },
    "lucio":{
      "1":"MCCREE"
    },
    "mccree":{
      "1":"D.VA"
    },
    "mei":{
      "1":"LUCIO",
      "2":"ZARYA"
    },
    "mercy":{
      "1":"D.VA",
      "2":"GENJI"
    },
    "moira":{
      "1":"ANA",
      "2":"D.VA"
    },
    "orisa":{
      "1":"MOIRA"
    },
    "pharah":{
      "1":"MCCREE",
      "2":"WIDOWMAKER"
    },
    "reaper":{
      "1":"PHARAH"
    },
    "reinhardt":{
      "1":"BASTION",
      "2":"PHARAH",
      "3":"REAPER"
    },
    "roadhog":{
      "1":"MEI",
      "2":"REAPER"
    },
    "soldier 76":{
      "1":"HANZO"
    },
    "sombra":{
      "1":"GENJI"
    },
    "symmetra":{
      "1":"PHARAH",
      "2":"WINSTON"
    },
    "torbjorn":{
      "1":"HANZO",
      "2":"JUNKRAT",
      "3":"SOLDIER",
      "4":"WIDOWMAKER",
      "5":"ZARYA"
    },
    "tracer":{
      "1":"MCCREE",
      "2":"SOMBRA"

    },
    "widowmaker":{
      "1":"D.VA",
      "2":"GENJI",
      "3":"WINSTON"
    },
    "winston":{
      "1":"BASTION",
      "2":"REAPER",
      "3":"ROADHOG"
    },
    "zarya":{
      "1":"PHARAH"

    },
    "zenyatta":{
      "1":"REAPER",
      "2":"TRACER"
    }
  }

}

function apply(){
  var $jq = jQuery.noConflict();
  // get rand from enemy

  pickedChar=getRandomHero();
  //check if picked char is already in Your team if so pick other
  pickedChar=reRollChar(pickedChar);

  //insert img in player field
  $jq('#myCharacter').html('<img src="/wp-content/plugins/overwatch/images/chars_recieved/'+pickedChar.toLowerCase()+'.jpg" /><p>'+pickedChar.toUpperCase()+'</p>');
}

function reRollChar(pickedChar){
	var $jq = jQuery.noConflict();
  console.log(pickedChar)
  var your=$jq('.Your');
  var imagesYour=your.find('img');
  //check all images
.
.
.
    }
  })
    return pickedChar;
}

function rollAgain(pickedChar){
	var $jq = jQuery.noConflict();
  var your=$jq('.Your');
  var imagesYour=your.find('img');

  imagesYour.each(function(){
    charInTeam=this.id.replace('_copy','');
    pickedChar=pickedChar.toLowerCase();
  .
  .
  .




function getRandomHero(){
		var $jq = jQuery.noConflict();
  var enemy=$jq('.enemy');
  var images=enemy.find('img');
  var enemy=images[Math.floor(Math.random()*images.length)].id.replace('_copy','');
  var len=Object.keys(json.characters[enemy]).length;
  var pickedChar=json.characters[enemy][Math.ceil(Math.random()*len)];
  return pickedChar;
}