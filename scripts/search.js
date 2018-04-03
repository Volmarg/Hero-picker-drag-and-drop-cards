function search(event){

  var input=event.target;
  var all=$('.big');
  all.attr("style", "display: none !important");

  all.each(function(){
      var bigId=this.id;
      var img=document.getElementById(bigId).childNodes;
      var imgID=img[1].id;

      var regular=new RegExp(input.value.toLowerCase(),'g');
      if(imgID.toLowerCase().match(regular)){
        $(this).css('display','block');
      }
  })

}

$('.search>input').focus(function(){
  $(this).attr('placeholder','');
})

$('.search>input').focusout(function(){
  $(this).attr('placeholder','Enter hero name...');
})
.
.
.
.
