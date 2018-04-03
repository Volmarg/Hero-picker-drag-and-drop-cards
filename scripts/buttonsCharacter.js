	var $jq = jQuery.noConflict();

$jq('.plusRed').click(function(event){
  var allBoxes=$jq('.Your').find('.singleCharacterBox').not('.your');

  var clicked=event.target;
  var src=$jq(clicked).data('imgsrc');
  var charName=src.replace('/wp-content/plugins/overwatch/images/chars_recieved/','');
  charName=charName.replace('.jpg','');
  var id=charName+'_copy';
  var enemy=$jq('.Your');

  if(findDuplicate(enemy,id)){
    addCharacter(allBoxes,event,id);
  }

})

$jq('.plusGreen').click(function(event){

  var allBoxes=$jq('.enemy').find('.singleCharacterBox').not('.your');

  var clicked=event.target;
 .
 .
 .
 .
 .
 