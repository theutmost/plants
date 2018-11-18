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

  //making the images loop
  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }

  zInd = zInd + 1;

  // removing animation from the style for EVERY IMG
  images.forEach(function(image) {
    image.style.animation = "";
  });

  //pick the right image (+ adding fade)
  images[currentSlide].style.zIndex = zInd;
  images[currentSlide].style.animation = "fade 0.5s";
});

//------------------------------------

// when i mouse over the imgs area, puts the images in a random place

slideArea.addEventListener("mouseover", function() {
  console.log("you are mousing over");

  // loop over ea img and put it in a random place
  images.forEach(image => {
    // Picking a random # for ea individual img
    const x = 100 * Math.random() - 50;
    const y = 100 * Math.random() - 50;

    // Change how the img looks, using TRANSLATE
    // image.style.transform = "translate (50px, 60px)";
    image.style.transform = `translate(${x}px, ${y}px)`;
    console.log("you are in forEach end");
  });
});
