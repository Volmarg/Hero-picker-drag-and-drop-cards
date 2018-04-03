.
.
.
function filter(ev){
  var name=ev.target.href;
  var hash=location.hash;
  type=name.match(/([\#]+)(.*)/g,hash);
  type=String(type).replace('#','',type);

  //get all chars
  $('.big').attr("style", "display: none !important");

  //now filter
  //alert(name);
  $('.big').each(function(){
    if(type=='all'){
      $('.big').attr("style", "display: block !important");
    }else{
      if($(this).data('type')==type){
        $(this).show();
      }
    }
  })
.
.
.