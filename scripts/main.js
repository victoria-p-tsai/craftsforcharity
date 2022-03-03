//include jQuery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


//collapsible menu animation: hidden --> showing underneath
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
}


//icon toggle in "about-us" menu: up-arrow icon <--> down-arrow icon
$('.collapsible').click(function(){
    $(this).find('i').toggleClass('fa-caret-down fa-caret-up')
    $(this).find('h2').toggleClass('active')
});


//slideshow animation: automatic + manual
/* var myIndex = 0;
carousel();

function carousel() {
    var j;
    var x = document.getElementsByClassName("slides");
    for (j = 0; j < x.length; j++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
} */

//team descriptions
let teamCenter = document.querySelectorAll('.team-center');
let speechBubbles = document.querySelectorAll('.speech-bubble');
let triangles = document.querySelectorAll('.speech-bubble-triangle');
let bubbleSets = document.querySelectorAll('.speech-bubble-set');

//show speech bubbles
function showSpeechBubble (e) {
  let speechBubble = document.querySelector(`#${this.id}-content`);
  let triangle = document.querySelector(`#${this.id}-triangle`);
  let bubbleSet = document.querySelector(`#${this.id}-speech-bubble-set`);
  //laptop 
  if (window.matchMedia('(min-width: 576px)').matches) {
  
  //hide other speechbubbles
   bubbleSets.forEach(el => {
     if(el != bubbleSet){
       $(el).hide();
     }
   })
  //positioning triangle
    triangle.style.setProperty('--after', ((this.clientWidth/2 - 30) + this.offsetLeft)  +'px');
    triangle.style.setProperty('--color', window.getComputedStyle(this).backgroundColor);
  
   //toggle the speech bubble
    $(bubbleSet).slideToggle();
  }

 
  //smart phone
if (window.matchMedia('(max-width: 575px)').matches) {
  triangle.style.setProperty('--after', this.clientWidth/2  +'px');
  triangle.style.setProperty('--color', window.getComputedStyle(this).backgroundColor);
    console.log(speechBubble.style.top);
   
    this.parentElement.insertBefore(bubbleSet, this.nextElementSibling );
  
    bubbleSets.forEach(el => {
      if(el != bubbleSet){
        $(el).hide();
      }
    })
    
  $(bubbleSet).slideToggle();
 
} 
}

teamCenter.forEach((team) => {
    team.addEventListener('click', showSpeechBubble)
})


//open modal

window.addEventListner('DOMContentLoaded', function(){
    let modal = document.querySelector('.modal');

let openTermOfUse = document.querySelector('.open-term-of-use');
openTermOfUse.addEventListener('click', function(){
    modal.style.display = 'block';
})


//close modal
let closeBtn = document.querySelector('.close');


closeBtn.addEventListener('click', function(){
  modal.style.display = 'none';
})

window.addEventListener('click', function(e){
  if(e.target == modal) {
    modal.style.display = 'none';
  }
});

//if checkbox of agreement is not checked, can't send
const agreeCheck = document.getElementById('agree-check');
const formBtn = document.querySelector('.contact-us-submit');


 agreeCheck.addEventListener('change', update);

function update() {

  if(this.checked){
    formBtn.disabled = false;
     console.log('button is work')
  }else{
    formBtn.disabled = true;
    console.log('button is not work')
  }


};



}

//privacy policy popup
// Get the modal
/* var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */
