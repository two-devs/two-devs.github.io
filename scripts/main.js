
 // OPEN and CLOSE menu
 $(document).ready(function () {
  $('.mob-menu-btn').click(function (e) { 
    $('.mob-menu').css('transform','translate(0)')
  });
});
$('.btn-close').click(function (e) { 
  $('.mob-menu').css('transform','translateX(100%)')
});

AOS.init();//AOS
//Print words

var options = {
  strings: [
    "<p class = 'orange'>TWO-DEVS</p>",
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
var typed = new Typed(".typed",options);
var First = new Typed(".first_p",FirstOptions);
var Second = new Typed(".second_p",SecondOptions);

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
