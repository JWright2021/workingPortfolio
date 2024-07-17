// Establish local data
var localData;

/**
 * get data
 */
async function fetchData() {
  try {
    const response = await fetch(
      `https://jwright2021.github.io/workingPortfolio/origamis-data.json`
    );
    // const response = await fetch(`./origamis-data.json`);
    const origamis = await response.json();
    localData = origamis.origamis;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Adds slides to the first carousel
 * @param {none} _callback
 */
function addSlides(_callback) {
  // Find injection point
  const currentDiv = document.getElementById("sliderInjection");

  // Loop through data
  for (let i = 0; i < 5; i++) {
    const e = localData[i];
    // Create slide
    const newSlide = document.createElement("div");
    newSlide.setAttribute("class", "slide");
    const newImg = document.createElement("img");
    newImg.setAttribute("src", e.imgSrc);
    const newLabel = document.createElement("a");
    newLabel.setAttribute("href", e.slideLink);
    newLabel.setAttribute("target", "_blank");

    const hrefLink = newLabel.cloneNode(true);
    hrefLink.appendChild(newImg);

    // Below creates slide description
    const newSlideDescription = document.createElement("div");
    newSlideDescription.setAttribute("class", "slide-description");
    const newDescription = document.createElement("p");
    const newDescriptionText = document.createTextNode(e.description);

    // Append it all
    newDescription.appendChild(newDescriptionText);
    newLabel.innerText = e.label;
    newSlideDescription.appendChild(newLabel);
    newSlideDescription.appendChild(newDescription);
    newSlide.appendChild(hrefLink);
    newSlide.appendChild(newSlideDescription);

    // add the newly created slide and its content into the slider area
    currentDiv.parentNode.insertBefore(newSlide, currentDiv);
  }

  // remove injection point
  currentDiv.remove();
}

/**
 * Adds popular cards to the second carousel
 * @param {none} _callback
 */
function addPopular(_callback) {
  const currentDiv = document.getElementById("popularInjection");

  for (let i = 0; i < 18; i++) {
    const e = localData[i];
    const newPopularCard = document.createElement("div");
    newPopularCard.setAttribute("class", "popular-card");
    const newImg = document.createElement("img");
    newImg.setAttribute("src", e.imgSrc);
    const newLabel = document.createElement("a");
    newLabel.setAttribute("href", e.slideLink);
    newLabel.setAttribute("target", "_blank");

    const hrefLink = newLabel.cloneNode(true);
    hrefLink.appendChild(newImg);

    newLabel.innerText = e.label;
    newPopularCard.appendChild(hrefLink);
    newPopularCard.appendChild(newLabel);

    currentDiv.parentNode.insertBefore(newPopularCard, currentDiv);
  }

  currentDiv.remove();
}

/**
 * Adds recently cards to the third carousel
 * @param {none} _callback
 */
function addRecently(_callback) {
  const currentDiv = document.getElementById("recentlyInjection");

  for (let i = 0; i < 8; i++) {
    const e = localData[i];
    const recentlyAddedCard = document.createElement("div");
    recentlyAddedCard.setAttribute("class", "recently-added-card");
    const newImg = document.createElement("img");
    newImg.setAttribute("src", e.imgSrc);
    const newLabel = document.createElement("a");
    newLabel.setAttribute("href", e.slideLink);
    newLabel.setAttribute("target", "_blank");
    const hrefLink = newLabel.cloneNode(true);
    hrefLink.appendChild(newImg);
    const newDate = document.createElement("h4");

    const newDescription = document.createElement("p");
    const newDescriptionText = document.createTextNode(e.description);

    newDescription.appendChild(newDescriptionText);
    newLabel.innerText = e.label;
    newDate.textContent = e.date;

    recentlyAddedCard.appendChild(hrefLink);
    recentlyAddedCard.appendChild(newLabel);
    recentlyAddedCard.appendChild(newDate);
    recentlyAddedCard.appendChild(newDescription);

    currentDiv.parentNode.insertBefore(recentlyAddedCard, currentDiv);
  }

  currentDiv.remove();
}

// first-carousel interaction
document.addEventListener("DOMContentLoaded", async function () {
  await fetchData();
  addPopular();
  addSlides();
  addRecently();
  const carousel = document.querySelector(".first-carousel");
  const slider = document.querySelector(".slider");
  const arrowButtons = document.querySelectorAll(".first-carousel-buttons");
  const firstSlide = document.querySelector(".slide");
  if (!firstSlide) return;
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
  const openBtn = document.querySelector(".open-modal-btn");
  const modal = document.querySelector(".modal-overlay");
  const closeBtn = document.querySelector(".close-modal-btn");

  function openModal() {
    modal.classList.remove("hide");
  }

  function closeModal(e, clickedOutside) {
    if (clickedOutside) {
      if (e.target.classList.contains("modal-overlay"))
        modal.classList.add("hide");
    } else modal.classList.add("hide");
  }

  openBtn.addEventListener("click", openModal);
  modal.addEventListener("click", (e) => closeModal(e, true));
  closeBtn.addEventListener("click", closeModal);
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("clickMe").click();
});
