/**
 * Adds slides to the first carousel
 * @param {none} _callback
 */
function addCategories(_callback) {
  // Working with these data values
  const categoryData = [
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
    {
      label: "Advanced Origami",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2019/03/origami-pokeball-box-tutorial-paper-kawaii-04-440x440.jpg",
      slideLink:
        "https://www.paperkawaii.com/origami-by-difficulty/advanced-origami/",
    },
  ];

  const currentDiv = document.getElementById("categoryInjection");

  categoryData.forEach((e) => {
    const newCategory = document.createElement("div");
    newCategory.setAttribute("class", "category");
    const newImg = document.createElement("img");
    newImg.setAttribute("src", e.imgSrc);
    const newLabel = document.createElement("a");
    newLabel.setAttribute("href", e.slideLink);
    newLabel.setAttribute("target", "_blank");

    const hrefLink = newLabel.cloneNode(true);
    hrefLink.appendChild(newImg);

    newLabel.innerText = e.label;
    newCategory.appendChild(hrefLink);
    newCategory.appendChild(newLabel);

    currentDiv.parentNode.insertBefore(newCategory, currentDiv);
  });

  currentDiv.remove();
}

document.addEventListener("DOMContentLoaded", function () {
  addCategories();
});
