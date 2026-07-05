const slider = [...document.querySelectorAll(".slider img")];
let sliderImageIndex = 0;

function changeSlide() {
  slider[sliderImageIndex].classList.toggle("active");

  if (sliderImageIndex >= slider.length - 1) {
    sliderImageIndex = 0;
  } else {
    sliderImageIndex++;
  }
    // sliderImageIndexは0から始まるため、slider.length - 1と比較する必要がある
}

slider[sliderImageIndex].classList.toggle("active");
setInterval(changeSlide, 2000);