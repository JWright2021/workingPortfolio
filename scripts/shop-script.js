var localData;

async function fetchData() {
  try {
    const response = await fetch(
      `https://jwright2021.github.io/workingPortfolio/origamis-data.json`
    );
    // const response = await fetch(`./origamis-data.json`);
    const origamis = await response.json();
    localData = origamis;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Adds options to the book carousel
 * @param {none} _callback
 */
function addOption(_callback) {
  const currentDiv = document.getElementById("optionInjection");

  for (let i = 0; i < 4; i++) {
    const e = localData.bookOptions[i];
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
  const currentDiv = document.getElementById("diagramsInjection");

  for (let i = 0; i < 9; i++) {
    const e = localData.diagrams[i];
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
  await fetchData();
  addOption();
  addDiagram();
});

// Ebooks interaction
document.addEventListener("click", function (e) {
  const target = e.target;

  if (!target.classList.contains("option")) return;

  if (target.classList.contains("active")) return;

  const options = document.querySelectorAll(".option");

  options.forEach((ev) => {
    ev.classList.remove("active");
  });

  target.classList.add("active");
});
