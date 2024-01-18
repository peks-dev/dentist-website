function toggleClassesOnScroll() {
  const aboutSection = document.getElementById("about");
  const featureItems = aboutSection.querySelectorAll(".feature");
  const imgElements = aboutSection.querySelectorAll(".feature__img");

  let hasToggled = false;

  const handleScroll = function () {
    const sectionRect = aboutSection.getBoundingClientRect();
    const sectionCenter = sectionRect.top + sectionRect.height / 2;
    const viewportHeight = window.innerHeight;
    const isSectionVisible =
      Math.abs(sectionCenter - viewportHeight / 2) < viewportHeight / 4;

    if (isSectionVisible && !hasToggled) {
      let activeIndex = -1;

      featureItems.forEach((item, index) => {
        if (item.classList.contains("feature--active")) {
          activeIndex = index;
        }
        item.classList.remove("feature--active");
      });

      imgElements.forEach((img) => {
        img.classList.remove("feature__img--active");
      });

      const nextIndex = (activeIndex + 1) % featureItems.length;

      featureItems[nextIndex].classList.add("feature--active");
      imgElements[nextIndex].classList.add("feature__img--active");

      hasToggled = true;
    } else if (!isSectionVisible) {
      hasToggled = false;
    }
  };

  document.addEventListener("scroll", handleScroll);
}

// Uso de la función
toggleClassesOnScroll();
