// WANT: pick all the imgs and lay them based on the z-index

//grabbing slides area
const slideArea = document.querySelector("div.slides");
// grabbing the 5 images only, as a list/array
const images = document.querySelectorAll("img");

// WANT: keep track of 2 things..
// 1) which slide we are talking about
// 2) what is the z index
let currentSlide = 0;
let zInd = 1;

// WANT: when click in slide area, change slide number based on z-index
slideArea.addEventListener("click", function() {
  currentSlide = currentSlide + 1;
  zInd = zInd + 1;

  //making the images loop
  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }

  //pick the right image
  images[currentSlide].style.zIndex = zInd;
});
