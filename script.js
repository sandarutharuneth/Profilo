$(function(){
  //using resize to change the font size of theroot element to make the font size responsive  
  $(window).on('resize',resize);  
  $('.button').on('click',function(){
    $('.action').toggleClass('is-open');
  });
  
  
  resize();  
  function resize(){
    var windowWidth = $('body').css('width');
    windowWidth = parseInt(windowWidth.substring(0, windowWidth.length-2));
    if(windowWidth <= 420){
      var fontSize = (windowWidth/7);
      $( ":root" ).css('font-size', fontSize + '%');
    }
  }
})