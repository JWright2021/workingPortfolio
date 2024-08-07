var baseData;

// fetch all data
async function fetchBaseData() {
  try {
    const response = await fetch(
      `https://jwright2021.github.io/workingPortfolio/data/origamis-data.json`
    );
    // const response = await fetch(`/../data/origamis-data.json`);
    const origamis = await response.json();
    baseData = origamis;
  } catch (error) {
    console.error(error);
  }
}

// Add Navbar Socials
function addNavbarSocials(_callback) {
  const socialData = baseData.socialMedias;
  const currentDiv = document.getElementById("navbarSocialsInjection");
  if (!currentDiv) return;

  const fragment = document.createDocumentFragment();

  for (const e of socialData) {
    const socialHold = document.createElement("a");
    socialHold.setAttribute("href", e.hreflink);
    socialHold.setAttribute("aria-label", e.ariaLabel);
    socialHold.setAttribute("target", "_blank");

    const svgHold = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgHold.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgHold.setAttribute("viewBox", e.viewBox);
    svgHold.setAttribute("fill", e.fill);
    if (e.width) {
      svgHold.setAttribute("width", e.width);
    }

    const pathHold = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathHold.setAttribute("d", e.svgPath);

    svgHold.appendChild(pathHold);
    socialHold.appendChild(svgHold);

    fragment.appendChild(socialHold);
  }

  currentDiv.parentNode.replaceChild(fragment, currentDiv);
}

// Add Navbar Nav
function addNavbarNav(_callback) {
  const navLinks = baseData.navigationLinks;
  const currentDiv = document.getElementById("navbarNavInjection");
  if (!currentDiv) return;

  const fragment = document.createDocumentFragment();

  for (const e of navLinks) {
    const navDiv = document.createElement("div");
    const label = document.createElement("a");
    label.innerText = e.label;
    label.setAttribute("href", e.hrefLink);
    navDiv.appendChild(label);
    fragment.appendChild(navDiv);
  }

  currentDiv.parentNode.replaceChild(fragment, currentDiv);
}

// Add Navbar Search
function addNavbarSearch() {
  const currentDiv = document.getElementById("navbarSearchInjection");
  if (!currentDiv) return;

  const searchSVG = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  searchSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  searchSVG.setAttribute("viewBox", "-893 478 142 142");
  searchSVG.setAttribute("xml:space", "preserve");
  searchSVG.setAttribute("aria-label", "Search Website");

  const pathHold = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathHold.setAttribute(
    "d",
    "M-787.4 568.7h-6.3l-2.4-2.4c7.9-8.7 12.6-20.5 12.6-33.1 0-28.4-22.9-51.3-51.3-51.3s-51.3 22.9-51.3 51.3 22.9 51.3 51.3 51.3c12.6 0 24.4-4.7 33.1-12.6l2.4 2.4v6.3l39.4 39.4 11.8-11.8-39.3-39.5zm-47.3 0c-19.7 0-35.5-15.8-35.5-35.5s15.8-35.5 35.5-35.5 35.5 15.8 35.5 35.5c-.1 19.8-15.8 35.5-35.5 35.5z"
  );
  searchSVG.appendChild(pathHold);
  const searchDiv = document.createElement("div");
  searchDiv.appendChild(searchSVG);

  currentDiv.parentNode.replaceChild(searchDiv, currentDiv);
}

// Add Paper Kawaii Logo
function addPaperKawaiiLogo() {
  const currentDiv = document.getElementById("logoInjection");
  if (!currentDiv) return;

  const logoDiv = document.createElement("div");
  logoDiv.setAttribute("id", "paper-kawaii-id");
  logoDiv.setAttribute("class", "paper-kawaii-logo");
  const logoImg = document.createElement("img");
  logoImg.setAttribute(
    "src",
    "https://jwright2021.github.io/workingPortfolio/images/origami-cropped-favicon-1.png"
  );
  logoImg.setAttribute("alt", "Paper Kawaii Logo");
  const logoLabel = document.createElement("a");
  logoLabel.innerText = "Paper Kawaii";
  logoDiv.appendChild(logoImg);
  logoDiv.appendChild(logoLabel);
  currentDiv.parentNode.replaceChild(logoDiv, currentDiv);
}

// Add Page Constants
function addPageConstants(_callback) {
  const linksData = baseData.pageConstants;
  const currentDiv = document.getElementById("pageConstantsInjection");
  if (!currentDiv) return;
  const fragment = document.createDocumentFragment();

  const visitPaperShop = document.createElement("div");
  visitPaperShop.className = "visit-paper-shop";
  const visitPaperButton = document.createElement("button");
  visitPaperButton.className = "origami-buttons";
  visitPaperButton.textContent = "Visit Paper Kawaii Shop";
  visitPaperShop.appendChild(visitPaperButton);
  fragment.appendChild(visitPaperShop);

  const instagramLink = document.createElement("a");
  instagramLink.href = "https://www.instagram.com/paperkawaii/";
  instagramLink.target = "_blank";
  instagramLink.textContent = "@paperkawaii";
  const instagramHead = document.createElement("h2");
  instagramHead.innerHTML = `Follow ${instagramLink.outerHTML} on Instagram`;
  fragment.appendChild(instagramHead);

  const signUpNewsLetter = document.createElement("div");
  signUpNewsLetter.className = "sign-up-newsletter";

  const imageDiv = document.createElement("div");
  const imageSrc = document.createElement("img");
  imageSrc.src =
    "https://jwright2021.github.io/workingPortfolio/images/subscribe-pop2.png";
  imageDiv.appendChild(imageSrc);

  const signUpForm = document.createElement("div");
  signUpForm.className = "sign-up-form";
  const freePrints = document.createElement("h3");
  freePrints.textContent = "Free Printable Origami Paper!";
  const printDescription = document.createElement("p");
  printDescription.textContent =
    "Join Paper Kawaii's newsletter to receive post updates, giveaways, free printables & more.";

  const createInput = (type, title, placeholder) => {
    const inputDiv = document.createElement("div");
    inputDiv.className = "newsletter-input";

    const input = document.createElement("input");
    input.type = type;
    input.title = title;
    input.placeholder = placeholder;

    inputDiv.appendChild(input);
    return inputDiv;
  };

  signUpForm.appendChild(freePrints);
  signUpForm.appendChild(printDescription);
  signUpForm.appendChild(createInput("text", "First Name", "First Name"));
  signUpForm.appendChild(createInput("text", "Email", "Your Email"));

  const subscribeNewsletter = document.createElement("button");
  subscribeNewsletter.className = "origami-buttons";
  subscribeNewsletter.textContent = "Subscribe";

  signUpForm.appendChild(subscribeNewsletter);
  signUpNewsLetter.appendChild(imageDiv);
  signUpNewsLetter.appendChild(signUpForm);
  fragment.appendChild(signUpNewsLetter);

  const linksPrintables = document.createElement("div");
  linksPrintables.className = "links-printables";
  const linksHeader = document.createElement("h2");
  linksHeader.textContent = "Links";
  const miscLinks = document.createElement("div");
  miscLinks.className = "misc-links";

  linksData.forEach((e) => {
    const holdLink = document.createElement("a");
    holdLink.href = e.hrefLink;
    holdLink.target = "_blank";
    const holdImage = document.createElement("img");
    holdImage.src = e.imgSrc;
    holdLink.appendChild(holdImage);
    miscLinks.appendChild(holdLink);
  });

  linksPrintables.appendChild(linksHeader);
  linksPrintables.appendChild(miscLinks);
  fragment.appendChild(linksPrintables);

  currentDiv.parentNode.replaceChild(fragment, currentDiv);
}

// Add Footer Nav
function addFooterNav(_callback) {
  const footerLabels = baseData.footerNavigations;
  const currentDiv = document.getElementById("footerInjection");
  if (!currentDiv) return;

  const footer = document.createElement("footer");
  footer.setAttribute("class", "footer");
  const footerNav = document.createElement("nav");
  footerNav.setAttribute("class", "footer-nav");
  footerNav.setAttribute("aria-label", "Footer Navigation");

  for (const e of footerLabels) {
    const newFooterLabel = document.createElement("div");
    newFooterLabel.innerText = e;
    footerNav.appendChild(newFooterLabel);
  }

  const copyrightFooter = document.createElement("div");
  copyrightFooter.setAttribute("class", "copyright");
  copyrightFooter.innerText = "Copyright © 2024 Paper Kawaii";

  footer.appendChild(footerNav);
  footer.appendChild(copyrightFooter);

  currentDiv.parentNode.replaceChild(footer, currentDiv);
}

document.addEventListener("DOMContentLoaded", async function () {
  await fetchBaseData();
  addNavbarSocials();
  addNavbarNav();
  addNavbarSearch();
  addPaperKawaiiLogo();
  addPageConstants();
  addFooterNav();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const navClass = document.getElementById("nav-links").classList;
  const paperKawaiiAdj = document.getElementById("paper-kawaii-id").classList;

  if (target.classList.contains("menu-toggle") && navClass.contains("hidden")) {
    navClass.remove("hidden");
    paperKawaiiAdj.add("shift-down");
  } else if (
    target.classList.contains("menu-toggle") &&
    !navClass.contains("hidden")
  ) {
    navClass.add("hidden");
    paperKawaiiAdj.remove("shift-down");
  }
});

// window.onresize = function () {
//   var windowwidth = window.innerWidth;
//   console.log(windowwidth);
// };
