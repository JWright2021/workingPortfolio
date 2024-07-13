/**
 * Adds slides to the first carousel
 * @param {none} _callback
 */
function addSlides(_callback) {
  // Working with these data values
  const slideData = [
    {
      label: "Octagonal Origami Gift Box Tutorial",
      description:
        "Learn how to make an 8 sided octagonal origami gift box with star lid. Both the lid and box are made with 1 sheet of paper, no glue required.",
      imgSrc:
        "https://jwright2021.github.io/workingPortfolio/images/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Origami Hexagonal Gift Box Tutorial",
      description:
        "Learn how to make a 6 sided origami hexagonal gift box. Using 1 sheet of paper for each the box & lid, customise the top of the lid.",
      imgSrc:
        "https://jwright2021.github.io/workingPortfolio/images/origami-hexagonal-box-tutorial-paper-kawaii-02-440x440.jpg",
      slideLink: "https://www.linkedin.com/in/jenna-wright/",
    },
    {
      label: "Origami Diamond Divider Box Tutorial – 5 Sections",
      description:
        "An origami box with 5 sections. The diamond divider box is a box fitted with 4 gem shaped boxes and a square in the middle. No glue required.",
      imgSrc:
        "https://jwright2021.github.io/workingPortfolio/images/origami-diamond-divider-box-tutorial-paper-kawaii-05-440x440.jpg",
      slideLink: "https://www.linkedin.com/in/jenna-wright/",
    },
    {
      label: "Mini Origami Pot Plants Tutorial – Make Cute Paper Houseplants",
      description:
        "Learn how to make a mini origami pot plant with this step by step tutorial. Miniature origami houseplants make great desk decor & gifts.",
      imgSrc:
        "https://jwright2021.github.io/workingPortfolio/images/origami-houseplant-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink: "https://www.linkedin.com/in/jenna-wright/",
    },
    {
      label: "Origami Star Bowl Instructions",
      description:
        "Learn how to make a simple origami star bowl or dish, use these to serve snacks at parties or hang them up as paper decorations.",
      imgSrc:
        "https://jwright2021.github.io/workingPortfolio/images/origami-star-bowl-tutorial-paper-kawaii-03-440x440.jpg",
      slideLink: "https://www.linkedin.com/in/jenna-wright/",
    },
    {
      label: "Origami Hinged Box Video Tutorial",
      description:
        "Learn how to make a modular origami hinged box with lids that open to the sides, this box would make a very neat wedding ring box.",
      imgSrc:
        "https://jwright2021.github.io/workingPortfolio/images/hinged-origami-gift-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink: "https://www.linkedin.com/in/jenna-wright/",
    },
  ];

  // Find injection point
  const currentDiv = document.getElementById("sliderInjection");

  // Loop through data
  slideData.forEach((e) => {
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
  });

  // remove injection point
  currentDiv.remove();
}

/**
 * Adds popular cards to the second carousel
 * @param {none} _callback
 */
function addPopular(_callback) {
  const popularData = [
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
    {
      label: "Octagonal Origami Gift Box Tutorial",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/06/origami-octagonal-box-tutorial-paper-kawaii-01-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/octagonal-origami-gift-box-tutorial/",
    },
  ];

  const currentDiv = document.getElementById("popularInjection");

  popularData.forEach((e) => {
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
  });

  currentDiv.remove();
}

/**
 * Adds recently cards to the third carousel
 * @param {none} _callback
 */
function addRecently(_callback) {
  const recentlyData = [
    {
      label: "Geometric Origami Pot / Box Tutorial - Verdi's Vase Variation",
      date: "May 16, 2021",
      description:
        "In this tutorial you can learn how to make a pretty geometric origami pot or box. This unique popup box is make from 1 sheet of square paper, no glue…",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2021/05/geometric-origami-box-pot-tutorial-paper-kawaii-03-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/geometric-origami-pot-box-tutorial/",
    },
    {
      label: "Geometric Origami Pot / Box Tutorial - Verdi's Vase Variation",
      date: "May 16, 2021",
      description:
        "In this tutorial you can learn how to make a pretty geometric origami pot or box. This unique popup box is make from 1 sheet of square paper, no glue…",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2021/05/geometric-origami-box-pot-tutorial-paper-kawaii-03-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/geometric-origami-pot-box-tutorial/",
    },
    {
      label: "Geometric Origami Pot / Box Tutorial - Verdi's Vase Variation",
      date: "May 16, 2021",
      description:
        "In this tutorial you can learn how to make a pretty geometric origami pot or box. This unique popup box is make from 1 sheet of square paper, no glue…",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2021/05/geometric-origami-box-pot-tutorial-paper-kawaii-03-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/geometric-origami-pot-box-tutorial/",
    },
    {
      label: "Geometric Origami Pot / Box Tutorial - Verdi's Vase Variation",
      date: "May 16, 2021",
      description:
        "In this tutorial you can learn how to make a pretty geometric origami pot or box. This unique popup box is make from 1 sheet of square paper, no glue…",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2021/05/geometric-origami-box-pot-tutorial-paper-kawaii-03-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/geometric-origami-pot-box-tutorial/",
    },
    {
      label: "Geometric Origami Pot / Box Tutorial - Verdi's Vase Variation",
      date: "May 16, 2021",
      description:
        "In this tutorial you can learn how to make a pretty geometric origami pot or box. This unique popup box is make from 1 sheet of square paper, no glue…",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2021/05/geometric-origami-box-pot-tutorial-paper-kawaii-03-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/geometric-origami-pot-box-tutorial/",
    },
    {
      label: "Geometric Origami Pot / Box Tutorial - Verdi's Vase Variation",
      date: "May 16, 2021",
      description:
        "In this tutorial you can learn how to make a pretty geometric origami pot or box. This unique popup box is make from 1 sheet of square paper, no glue…",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2021/05/geometric-origami-box-pot-tutorial-paper-kawaii-03-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/geometric-origami-pot-box-tutorial/",
    },
    {
      label: "Geometric Origami Pot / Box Tutorial - Verdi's Vase Variation",
      date: "May 16, 2021",
      description:
        "In this tutorial you can learn how to make a pretty geometric origami pot or box. This unique popup box is make from 1 sheet of square paper, no glue…",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2021/05/geometric-origami-box-pot-tutorial-paper-kawaii-03-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/geometric-origami-pot-box-tutorial/",
    },
    {
      label: "Geometric Origami Pot / Box Tutorial - Verdi's Vase Variation",
      date: "May 16, 2021",
      description:
        "In this tutorial you can learn how to make a pretty geometric origami pot or box. This unique popup box is make from 1 sheet of square paper, no glue…",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2021/05/geometric-origami-box-pot-tutorial-paper-kawaii-03-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/geometric-origami-pot-box-tutorial/",
    },
    {
      label: "Geometric Origami Pot / Box Tutorial - Verdi's Vase Variation",
      date: "May 16, 2021",
      description:
        "In this tutorial you can learn how to make a pretty geometric origami pot or box. This unique popup box is make from 1 sheet of square paper, no glue…",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2021/05/geometric-origami-box-pot-tutorial-paper-kawaii-03-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/geometric-origami-pot-box-tutorial/",
    },
  ];

  const currentDiv = document.getElementById("recentlyInjection");

  recentlyData.forEach((e) => {
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
  });

  currentDiv.remove();
}

// first-carousel interaction
document.addEventListener("DOMContentLoaded", function () {
  addPopular();
  addSlides();
  addRecently();
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
