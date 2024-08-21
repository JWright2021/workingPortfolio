/**
 * Adds slides to the first carousel
 * @param {none} _callback
 */
function addSlides(_callback) {
  const origamisData = baseData.origamis;
  const currentDiv = document.getElementById("sliderInjection");
  if (!currentDiv) return;

  for (let i = 0; i < 5; i++) {
    const e = origamisData[i];

    // Create slide
    const newSlide = document.createElement("div");
    newSlide.setAttribute("class", "slide");
    const newImg = document.createElement("img");
    newImg.setAttribute("src", e.imgSrc);
    newImg.setAttribute("alt", e.label);
    const newLabel = document.createElement("a");
    newLabel.setAttribute("href", e.slideLink);
    newLabel.setAttribute("target", "_blank");

    const hrefLink = newLabel.cloneNode(true);
    hrefLink.appendChild(newImg);

    // Create slide description
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

    currentDiv.parentNode.insertBefore(newSlide, currentDiv);
  }

  currentDiv.remove();
}

/**
 * Adds popular cards to the second carousel
 * @param {none} _callback
 */
function addPopular(_callback) {
  const origamisData = baseData.origamis;
  const currentDiv = document.getElementById("popularInjection");
  if (!currentDiv) return;

  for (let i = 0; i < 18; i++) {
    const e = origamisData[i];

    // Create popular card
    const newPopularCard = document.createElement("div");
    newPopularCard.setAttribute("class", "popular-card");
    const newImg = document.createElement("img");
    newImg.setAttribute("src", e.imgSrc);
    newImg.setAttribute("alt", e.label);
    const newLabel = document.createElement("a");
    newLabel.setAttribute("href", e.slideLink);
    newLabel.setAttribute("target", "_blank");

    const hrefLink = newLabel.cloneNode(true);
    hrefLink.appendChild(newImg);
    newLabel.innerText = e.label;

    // Append it all
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
  const origamisData = baseData.origamis;
  const currentDiv = document.getElementById("recentlyInjection");
  if (!currentDiv) return;

  for (let i = 0; i < 8; i++) {
    const e = origamisData[i];

    // Create new card
    const recentlyAddedCard = document.createElement("div");
    recentlyAddedCard.setAttribute("class", "recently-added-card");
    const newImg = document.createElement("img");
    newImg.setAttribute("src", e.imgSrc);
    newImg.setAttribute("alt", e.label);
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

    // Append it all
    recentlyAddedCard.appendChild(hrefLink);
    recentlyAddedCard.appendChild(newLabel);
    recentlyAddedCard.appendChild(newDate);
    recentlyAddedCard.appendChild(newDescription);

    currentDiv.parentNode.insertBefore(recentlyAddedCard, currentDiv);
  }

  currentDiv.remove();
}

document.addEventListener("DOMContentLoaded", async function () {
  await fetchBaseData();
  addPopular();
  addSlides();
  addRecently();

  // first carousel
  const carousel = document.querySelector(".first-carousel");
  const slider = document.querySelector(".slider");
  const arrowButtons = document.querySelectorAll(".first-carousel-buttons");
  const firstSlide = document.querySelector(".slide");
  if (!firstSlide) return;
  const firstSlideWidth = firstSlide.offsetWidth;
  let timeoutID;

  // first carousel auto rotate
  const autoPlay = () => {
    if (window.innerWidth < 300) return;
    const totalWidthAllCards = slider.scrollWidth;
    const maxScrollPositionLeft = totalWidthAllCards - slider.offsetWidth;
    if (slider.scrollLeft >= maxScrollPositionLeft) return;
    timeoutID = setTimeout(() => (slider.scrollLeft += firstSlideWidth), 20);
  };
  carousel.addEventListener("mouseenter", () => clearTimeout(timeoutID));
  carousel.addEventListener("mouseleave", autoPlay);

  // first carousel button interaction
  arrowButtons.forEach((e) => {
    e.addEventListener("click", () => {
      slider.scrollLeft += e.id === "left" ? -firstSlideWidth : firstSlideWidth;
    });
  });
});

// Handle Modal
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal-overlay");
  if (!modal) return;
  const closeBtn = document.querySelector(".close-modal-btn");
  const modalId = document.getElementById("myModal");

  function closeModal(e, clickedOutside) {
    if (clickedOutside) {
      if (e.target.classList.contains("modal-overlay")) modalId.remove();
    } else modalId.remove();
  }

  modal.addEventListener("click", (e) => closeModal(e, true));
  closeBtn.addEventListener("click", closeModal);
});
