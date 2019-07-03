
// OPEN and CLOSE menu
$(document).ready(function () {
  var count = 0;
 $('.btn-menu').click(function (e) {
   
   count+=3; 
   if(count%2 >0){
     
 $('.line').addClass('clicked');
     if($('.line').hasClass('clicked')){
       $('.bg').css('transform','translate(0)');
       $('.btn-menu').css({
         'transform':'translateX(-400px)',
         'background': '#FE7860'
       });
       $('.menu').css({
        'border-top-left-radius': '90px',
        'border-bottom-left-radius': '90px',
         'transform':'translateX(0)',
         'background': '#FE7860'
       });
       $('.link').css('transform','translateX(0)')
     }
     console.log(count)
   }
 else if (count%2  == 0){
  $('.bg').css('transform','translateX(150%)')  
   $('.line').removeClass('clicked');
   $('.btn-menu').css({
     'transform':'translateX(0)',
     'background': '#506cf0'
   });
   $('.menu').css({
    'border-top-left-radius': '100%',
    'border-bottom-left-radius': '100%',
     'transform':'translateX(100%)',
     'background': '#506cf0'
   })
   $('.link').css({
     'transform':'translate(500px)'
  })
 }
 });
 $('.bg').click(function (){
  count+=3; 
  $('.bg').css('transform','translateX(150%)') 
  $('.line').removeClass('clicked');
  $('.btn-menu').css({
    'transform':'translateX(0)',
    'background': '#506cf0'
  });
  $('.menu').css({
   'border-top-left-radius': '100%',
   'border-bottom-left-radius': '100%',
    'transform':'translateX(100%)',
    'background': '#506cf0'
  })
  $('.link').css({
    'transform':'translate(500px)'
 })
 })
});

AOS.init();//AOS
//Print words

var options = {
 strings: [
   "<span class = 'orange'>TWO</span><span class='blue'>DEVS</span>",
   "<p class='blue'>FRONT-END</p>",
   "<p class = 'orange>TWO-DEVS</p>",    
   "<p class='blue'>BACK-END</p>",
 ],
 typeSpeed: 130,
 backSpeed: 100,
 backDelay: 900,
 showCursor: false,
 cursorChar: '|',
 autoInsertCss: true,
 shuffle: false,
 loop: true,
};
var FirstOptions,SecondOptions;
FirstOptions = {
 strings:["<div>TWO </div> DEVS","FRONT END","TWO DEVS","BACK END"],
 typeSpeed: 210,
 backSpeed: 110,
 showCursor: false,
 cursorChar: '|',
 loop: true,
 backDelay: 90
};
SecondOptions = {
 strings:['JS','PHP','HTML5','CSS3','PYTHON'],
 typeSpeed: 300,
 backSpeed: 120,
 showCursor: false,
 cursorChar: '|',
 loop: true,
 backDelay: 90
}
var helloOpt = {
 strings:[`hello, world`],
 typeSpeed: 200,
 backSpeed: 120,
 showCursor: true,
 cursorChar: '|',
 loop: false,
}
var typed = new Typed(".typed",options);
var First = new Typed(".first_p",FirstOptions);
var Second = new Typed(".second_p",SecondOptions);
var Hello = new Typed(".hello",helloOpt)
//----------------------//
window.onload = function(){
window.setInterval(function(){
  var now = new Date();
  var clock = document.getElementById("clock");
  if(now.getMinutes()>9){
  clock.innerHTML = `${now.getHours()}:${now.getMinutes()}`;
  }
  else{
  clock.innerHTML = `${now.getHours()}:0${now.getMinutes()}`;
  }
}, 1000);
};
//Detect OS
$(document).ready(function () {
var ua = detect.parse(navigator.userAgent);
  if (ua.os.family =='iOS'){
   $('.screen').addClass('iOS')
  }
  if (ua.os.family == 'Android'){
     $('.screen').addClass('Android')
  }
});
