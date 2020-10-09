var backdrop = document.querySelector(".backdrop");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

backdrop.addEventListener("click", function() {
    mobileNav.classList.remove("open");
    backdrop.classList.remove("open");
});

toggleButton.addEventListener("click", function() {
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
});

function screen_resize() {
    var w = parseInt(window.innerWidth);
    if(w > 640 && mobileNav.classList.contains("open") && backdrop.classList.contains("open")){
        mobileNav.classList.remove("open");
        backdrop.classList.remove("open");
    }
}