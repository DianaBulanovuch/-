const slides=document.getElementById("slides");
const slide=slides.querySelectorAll(".slide");
const slideTime=2000;

// slides.addEventListener("mouseover",stopSlide);
let currentSlide = 0;
let slideInterval;
function continueSlideInterval(){
    slideInterval = setInterval(nextSlide, slideTime);
}
function nextSlide(){
    slide[currentSlide].className="slide";
    currentSlide=++currentSlide % slide.length;
    slide[currentSlide].className="slide show";
}
continueSlideInterval();
