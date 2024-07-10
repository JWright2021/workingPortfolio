document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".first-carousel");
  const slider = document.querySelector(".slider");
  const arrowButtons = document.querySelectorAll(".first-carousel-buttons");

  const firstSlide = document.querySelector(".slide");
  const firstSlideWidth = firstSlide.offsetWidth;

  let isDragging = false,
    startX,
    startScrollLeft,
    timeoutID;

  const dragStart = (e) => {
    isDragging = true;
    slider.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;

    const newScrollPositionLeft = startScrollLeft - (e.pageX - startX);

    if (
      newScrollPositionLeft <= 0 ||
      newScrollPositionLeft >= slider.scrollWidth - slider.offsetWidth
    ) {
      isDragging = false;
      return;
    }

    slider.scrollLeft = newScrollPositionLeft;
  };

  const dragStop = () => {
    isDragging = false;
    slider.classList.remove("dragging");
  };

  const autoPlay = () => {
    if (window.innerWidth < 300) return;
    const totalWidthAllCards = slider.scrollWidth;
    const maxScrollPositionLeft = totalWidthAllCards - slider.offsetWidth;
    if (slider.scrollLeft >= maxScrollPositionLeft) return;
    timeoutID = setTimeout(() => (slider.scrollLeft += firstSlideWidth), 20);
  };

  slider.addEventListener("mousedown", dragStart);
  slider.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("mouseenter", () => clearTimeout(timeoutID));
  carousel.addEventListener("mouseleave", autoPlay);

  arrowButtons.forEach((e) => {
    e.addEventListener("click", () => {
      slider.scrollLeft += e.id === "left" ? -firstSlideWidth : firstSlideWidth;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".option");

  let clickedEbook = false;

  const removeLastActive = (e) => {
    console.log("e is ", e);
    console.log("boolean e classlist", e.classList.contains("active"));
    console.log("boolean e clickedEbook", clickedEbook);

    if (!e.classList.contains("active") && clickedEbook) {
      options.forEach((ev) => {
        ev.classList.remove("active");
      });
    }
  };

  options.forEach((e) => {
    e.addEventListener("click", removeLastActive(e));
  });
});
