const slides = document.querySelectorAll(".slider__item");
const sliderContainer = document.querySelector(".slider__projects");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");

let currentIndex = 0;

btnNext.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

btnPrev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

function updateSlider() {
  const translateValue = -currentIndex * 100 + "%"; // Assuming each slide takes 100% width
  sliderContainer.style.transform = `translateX(${translateValue})`;
}
