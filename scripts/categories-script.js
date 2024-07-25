/**
 * Adds categories
 * @param {none} _callback
 */
function addCategories(_callback) {
  const categoriesData = baseData.categories;
  const currentDiv = document.getElementById("categoryInjection");

  for (let i = 0; i < 9; i++) {
    const e = categoriesData[i];
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
  }

  currentDiv.remove();
}

document.addEventListener("DOMContentLoaded", async function () {
  await fetchBaseData();
  addCategories();
});
