/**
 * Adds options to the book carousel
 * @param {none} _callback
 */
function addOption(_callback) {
  const optionsData = baseData.bookOptions;
  const currentDiv = document.getElementById("optionInjection");

  for (let i = 0; i < 4; i++) {
    const e = optionsData[i];
    const newOption = document.createElement("div");
    newOption.setAttribute("class", "option");
    const newStyle = `--optionBackground: url(${e.imgSrc});`;
    newOption.setAttribute("style", newStyle);

    const newShadow = document.createElement("div");
    newShadow.setAttribute("class", "shadow");
    const newLabel = document.createElement("div");
    newLabel.setAttribute("class", "label");
    const newInfo = document.createElement("div");
    newInfo.setAttribute("class", "info");
    const newMain = document.createElement("div");
    newMain.setAttribute("class", "main");
    const newSub = document.createElement("div");
    newSub.setAttribute("class", "sub");

    newMain.innerText = e.main;
    newSub.innerText = e.sub;

    newInfo.appendChild(newMain);
    newInfo.appendChild(newSub);

    newLabel.appendChild(newInfo);
    newOption.appendChild(newShadow);
    newOption.appendChild(newLabel);

    currentDiv.parentNode.insertBefore(newOption, currentDiv);
  }

  currentDiv.remove();

  const setFirstOption = document.querySelector(".option");
  setFirstOption.classList.add("active");
}

/**
 * Adds diagrams to the diagrams container
 * @param {none} _callback
 */
function addDiagram(_callback) {
  const diagramData = baseData.diagrams;
  const currentDiv = document.getElementById("diagramsInjection");

  for (let i = 0; i < 9; i++) {
    const e = diagramData[i];
    const newDiagram = document.createElement("div");
    newDiagram.setAttribute("class", "diagram");
    const newLabel = document.createElement("a");
    newLabel.setAttribute("href", e.imgSrc);
    newLabel.setAttribute("target", "_blank");

    const newImg = document.createElement("img");
    newImg.setAttribute("src", e.imgSrc);

    const hrefLink = newLabel.cloneNode(true);
    hrefLink.appendChild(newImg);

    newLabel.innerText = e.label;
    newDiagram.appendChild(hrefLink);
    newDiagram.appendChild(newLabel);

    currentDiv.parentNode.insertBefore(newDiagram, currentDiv);
  }
  currentDiv.remove();
}

document.addEventListener("DOMContentLoaded", async function () {
  await fetchBaseData();
  addOption();
  addDiagram();
});

// Ebooks interaction
document.addEventListener("click", function (e) {
  const target = e.target;
  let container = target.closest(".ebooks-fancy-expand");

  if (container) {
    let currentElement = target;
    let foundParent = null;

    while (currentElement) {
      if (
        currentElement.classList &&
        currentElement.classList.contains("option")
      ) {
        foundParent = currentElement;
        break;
      } else if (
        currentElement.classList &&
        currentElement.classList.contains("page-width")
      ) {
        break;
      }
      currentElement = currentElement.parentNode;
    }
    if (!currentElement.classList.contains("option")) return;
    if (currentElement.classList.contains("active")) return;
    const options = document.querySelectorAll(".option");
    options.forEach((ev) => {
      ev.classList.remove("active");
    });
    currentElement.classList.add("active");
  }
});
