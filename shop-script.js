/**
 * Adds options to the book carousel
 * @param {none} _callback
 */
function addOption(_callback) {
  const optionData = [
    {
      imgSrc:
        "https://shop.paperkawaii.com/wp-content/uploads/2023/12/LEARNIGAMI-Vol-4-Origami-Gifts-Ebook-Paper-Kawaii-500x500.jpg",
      main: "LEARNINGAMI VOL 4",
      sub: "Origami Gifts Ebook - 8 Projects",
    },
    {
      imgSrc:
        "https://shop.paperkawaii.com/wp-content/uploads/2020/06/LEARNIGAMI-Vol-3-Interlocking-Origami-Boxes-Ebook-Paper-Kawaii-500x500.jpg",
      main: "LEARNINGAMI VOL 3",
      sub: "Interlocking Origami Boxes Ebook",
    },
    {
      imgSrc:
        "https://shop.paperkawaii.com/wp-content/uploads/2018/09/LEARNIGAMI-Vol-2-Modular-Origami-Boxes-Ebook-Paper-Kawaii-500x500.jpg",
      main: "LEARNINGAMI VOL 2",
      sub: "Modular Origami Boxes Ebook",
    },
    {
      imgSrc:
        "https://shop.paperkawaii.com/wp-content/uploads/2018/09/LEARNIGAMI-Vol-1-27-Origami-Models-Ebook-Paper-Kawaii-500x500.jpg",
      main: "LEARNINGAMI VOL 1",
      sub: "26 Fun Origami Models Ebook",
    },
  ];

  const currentDiv = document.getElementById("optionInjection");

  optionData.forEach((e) => {
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

    console.log("newOption is ", newOption);

    currentDiv.parentNode.insertBefore(newOption, currentDiv);
  });

  currentDiv.remove();

  const setFirstOption = document.querySelector(".option");
  setFirstOption.classList.add("active");
}

/**
 * Adds diagrams to the diagrams container
 * @param {none} _callback
 */
function addDiagram(_callback) {
  const diagramData = [
    {
      imgSrc:
        "https://shop.paperkawaii.com/wp-content/uploads/2023/10/modular-origami-tissue-box-variations-diagram-paper-kawaii-500x281.jpg",
      label: "Origami Tissue Box / Coin Bank Diagram V2",
      slideLink:
        "https://shop.paperkawaii.com/origami-tissue-box-coin-bank-diagram-v2/",
    },
    {
      imgSrc:
        "https://shop.paperkawaii.com/wp-content/uploads/2023/10/modular-origami-tissue-box-variations-diagram-paper-kawaii-500x281.jpg",
      label: "Origami Tissue Box / Coin Bank Diagram V2",
      slideLink:
        "https://shop.paperkawaii.com/origami-tissue-box-coin-bank-diagram-v2/",
    },
    {
      imgSrc:
        "https://shop.paperkawaii.com/wp-content/uploads/2023/10/modular-origami-tissue-box-variations-diagram-paper-kawaii-500x281.jpg",
      label: "Origami Tissue Box / Coin Bank Diagram V2",
      slideLink:
        "https://shop.paperkawaii.com/origami-tissue-box-coin-bank-diagram-v2/",
    },
    {
      imgSrc:
        "https://shop.paperkawaii.com/wp-content/uploads/2023/10/modular-origami-tissue-box-variations-diagram-paper-kawaii-500x281.jpg",
      label: "Origami Tissue Box / Coin Bank Diagram V2",
      slideLink:
        "https://shop.paperkawaii.com/origami-tissue-box-coin-bank-diagram-v2/",
    },
    {
      imgSrc:
        "https://shop.paperkawaii.com/wp-content/uploads/2023/10/modular-origami-tissue-box-variations-diagram-paper-kawaii-500x281.jpg",
      label: "Origami Tissue Box / Coin Bank Diagram V2",
      slideLink:
        "https://shop.paperkawaii.com/origami-tissue-box-coin-bank-diagram-v2/",
    },
    {
      imgSrc:
        "https://shop.paperkawaii.com/wp-content/uploads/2023/10/modular-origami-tissue-box-variations-diagram-paper-kawaii-500x281.jpg",
      label: "Origami Tissue Box / Coin Bank Diagram V2",
      slideLink:
        "https://shop.paperkawaii.com/origami-tissue-box-coin-bank-diagram-v2/",
    },
    {
      imgSrc:
        "https://shop.paperkawaii.com/wp-content/uploads/2023/10/modular-origami-tissue-box-variations-diagram-paper-kawaii-500x281.jpg",
      label: "Origami Tissue Box / Coin Bank Diagram V2",
      slideLink:
        "https://shop.paperkawaii.com/origami-tissue-box-coin-bank-diagram-v2/",
    },
    {
      imgSrc:
        "https://shop.paperkawaii.com/wp-content/uploads/2023/10/modular-origami-tissue-box-variations-diagram-paper-kawaii-500x281.jpg",
      label: "Origami Tissue Box / Coin Bank Diagram V2",
      slideLink:
        "https://shop.paperkawaii.com/origami-tissue-box-coin-bank-diagram-v2/",
    },
    {
      imgSrc:
        "https://shop.paperkawaii.com/wp-content/uploads/2023/10/modular-origami-tissue-box-variations-diagram-paper-kawaii-500x281.jpg",
      label: "Origami Tissue Box / Coin Bank Diagram V2",
      slideLink:
        "https://shop.paperkawaii.com/origami-tissue-box-coin-bank-diagram-v2/",
    },
  ];

  const currentDiv = document.getElementById("diagramsInjection");

  diagramData.forEach((e) => {
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
  });
  currentDiv.remove();
}

document.addEventListener("DOMContentLoaded", function () {
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
