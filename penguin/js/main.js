  $('.collapse-button').click(function () {
    $(this).toggleClass('open');
    $('header').toggleClass('open', 200, "swing");
  });

          // ===== Scroll to Top ====
const scrollTop = document.getElementById('scrolltop')
// When the page is loaded, hide the scroll-to-top button
window.onload = () => {
 scrollTop.style.visibility = "hidden";
 scrollTop.style.opacity = 0;
}
// If the page is scrolled more than 200px,
// display the scroll-to-top button
// Otherwise keep the button hidden
window.onscroll = () => {
 if (window.scrollY > 200) {
 scrollTop.style.visibility = "visible";
 scrollTop.style.opacity = 1;
 } else {
 scrollTop.style.visibility = "hidden";
 scrollTop.style.opacity = 0;
 }
};

// check scrollbar width and offsets from header nav

// Create the measurement node
var scrollDiv = document.createElement("div");
scrollDiv.className = "scrollbar-measure";
document.body.appendChild(scrollDiv);

// Get the scrollbar width
var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

// Delete the DIV 
document.body.removeChild(scrollDiv);








