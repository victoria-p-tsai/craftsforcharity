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


//header dropdown animation: hidden --> showing underneath



//header highlight: current page --> black
/* var url = window.location.href.split("/"); //replace string with location.href
var navLinks = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
//naturally you could use something other than the <nav> element
var i=0;
var currentPage = url[url.length - 1];
for(i; i<navLinks.length; i++){
    var lb = navLinks[i].href.split("/");
    if(lb[lb.length-1] == currentPage) {
        navLinks[i].classList.toggle("current");
    }
} */


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


//icon toggle: up-arrow icon <--> down-arrow icon
$('.collapsible').click(function(){
    $(this).find('i').toggleClass('fa-caret-down fa-caret-up')
    $(this).find('h2').toggleClass('active')
});