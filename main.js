//include jQuery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


//header animation: transparent --> white
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
})


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


//header highlight: current page --> black
var url = window.location.href.split("/"); //replace string with location.href
var navLinks = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
//naturally you could use something other than the <nav> element
var k=0;
var currentPage = url[url.length - 1];
for(k; k<navLinks.length; k++){
    var lb = navLinks[k].href.split("/");
    if(lb[lb.length-1] == currentPage) {
        navLinks[k].closest(".head").classList.toggle("current");
    }
}


//slideshow animation: automatic + manual
var myIndex = 0;
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
}