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
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "TWO-DEVS","FRONT-END","TWO-DEVS","BACK-END"
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}
 
 document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
   if(textArray.length) setTimeout(type, newTextDelay + 250);
 });

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
var ua = detect.parse(navigator.userAgent);
alert('your OS:'+ua.os.name)
if (ua.os.name == 'Windows 7'){
  alert('Hello kkk')
}
if (ua.os.name =='iOS 12.3.1'){
  alert('hi')
}