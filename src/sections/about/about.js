function reveal() {
  // take elements from DOM
  const referenceElement = document.getElementById("about");
  const textFeature = document.getElementById("text-hidden");
  const imgFeature = document.getElementById("img-hidden");

  var windowHeight = window.innerHeight;
  var referenceElementTop = referenceElement.getBoundingClientRect().top;
  var umbral = 1100;

  if (referenceElementTop < windowHeight - umbral) {
    textFeature.classList.add("feature--active");
    imgFeature.classList.add("feature__img--active");
  } else {
    textFeature.classList.remove("feature--active");
    imgFeature.classList.remove("feature__img--active");
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
