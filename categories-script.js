var localData;

async function fetchData() {
  try {
    const response = await fetch(`./origamis-data.json`);
    const origamis = await response.json();
    localData = origamis.categories;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Adds categories
 * @param {none} _callback
 */
function addCategories(_callback) {
  const currentDiv = document.getElementById("categoryInjection");

  for (let i = 0; i < 5; i++) {
    const e = localData[i];
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

document.addEventListener("DOMContentLoaded", function () {
  addCategories();
});
