var baseData;

// fetch all data
async function fetchBaseData() {
  try {
    const response = await fetch(
      `https://jwright2021.github.io/workingPortfolio/origamis-data.json`
    );
    // const response = await fetch(`./origamis-data.json`);
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
  for (i in socialData) {
    const e = socialData[i];

    const socialHold = document.createElement("a");
    socialHold.setAttribute("href", e.hreflink);
    socialHold.setAttribute("aria-label", e.ariaLabel);
    socialHold.setAttribute("target", "_blank");
    const spanHold = document.createElement("span");
    const svgHold = document.createElement("svg");
    svgHold.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgHold.setAttribute("viewBox", e.viewBox);
    svgHold.setAttribute("fill", e.fill);

    var pathHold = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathHold.setAttribute("d", e.svgPath);

    svgHold.appendChild(pathHold);
    spanHold.innerHTML = svgHold.outerHTML;
    socialHold.appendChild(spanHold);

    currentDiv.parentNode.insertBefore(socialHold, currentDiv);
  }
  currentDiv.remove();
}

// Add Navbar Nav
function addNavbarNav(_callback) {
  const navLinks = baseData.navigationLinks;
  const currentDiv = document.getElementById("navbarNavInjection");
  for (i in navLinks) {
    const e = navLinks[i];
    const navDiv = document.createElement("div");
    const label = document.createElement("a");
    label.innerText = e.label;
    label.setAttribute("href", e.hrefLink);
    navDiv.appendChild(label);
    currentDiv.parentNode.insertBefore(navDiv, currentDiv);
  }
  currentDiv.remove();
}

// Add Navbar Search
function addNavbarSearch() {
  const currentDiv = document.getElementById("navbarSearchInjection");
  const searchDiv = document.createElement("div");
  const searchSVG = document.createElement("svg");
  searchSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  searchSVG.setAttribute("viewBox", "-893 478 142 142");
  searchSVG.setAttribute("xml:space", "preserve");
  var pathHold = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathHold.setAttribute(
    "d",
    "M-787.4 568.7h-6.3l-2.4-2.4c7.9-8.7 12.6-20.5 12.6-33.1 0-28.4-22.9-51.3-51.3-51.3s-51.3 22.9-51.3 51.3 22.9 51.3 51.3 51.3c12.6 0 24.4-4.7 33.1-12.6l2.4 2.4v6.3l39.4 39.4 11.8-11.8-39.3-39.5zm-47.3 0c-19.7 0-35.5-15.8-35.5-35.5s15.8-35.5 35.5-35.5 35.5 15.8 35.5 35.5c-.1 19.8-15.8 35.5-35.5 35.5z"
  );
  searchSVG.appendChild(pathHold);
  searchDiv.innerHTML = searchSVG.outerHTML;
  currentDiv.parentNode.insertBefore(searchDiv, currentDiv);
  currentDiv.remove();
}

// Add Paper Kawaii Logo
function addPaperKawaiiLogo() {
  const currentDiv = document.getElementById("logoInjection");
  const logoDiv = document.createElement("div");
  logoDiv.setAttribute("class", "paper-kawaii-logo");
  const logoImg = document.createElement("img");
  logoImg.setAttribute(
    "src",
    "https://jwright2021.github.io/workingPortfolio/images/origami-cropped-favicon-1.png"
  );
  const logoLabel = document.createElement("a");
  logoLabel.innerText = "Paper Kawaii";
  logoDiv.appendChild(logoImg);
  logoDiv.appendChild(logoLabel);
  currentDiv.parentNode.insertBefore(logoDiv, currentDiv);
  currentDiv.remove();
}

// Add Page Constants
function addPageConstants(_callback) {
  const linksData = baseData.pageConstants;
  const currentDiv = document.getElementById("pageConstantsInjection");

  const visitPaperShop = document.createElement("div");
  visitPaperShop.setAttribute("class", "visit-paper-shop");
  const visitPaperButton = document.createElement("button");
  visitPaperButton.setAttribute("class", "origami-buttons");
  visitPaperButton.innerText = "Visit Paper Kawaii Shop";
  visitPaperShop.appendChild(visitPaperButton);
  currentDiv.parentNode.insertBefore(visitPaperShop, currentDiv);

  const instagramLink = document.createElement("a");
  instagramLink.setAttribute("href", "https://www.instagram.com/paperkawaii/");
  instagramLink.setAttribute("target", "_blank");
  instagramLink.textContent = "@paperkawaii";
  const instagramHead = document.createElement("h2");
  instagramHead.innerHTML =
    "Follow " + instagramLink.outerHTML + " on Instagram";
  currentDiv.parentNode.insertBefore(instagramHead, currentDiv);

  const signUpNewsLetter = document.createElement("div");
  signUpNewsLetter.setAttribute("class", "sign-up-newsletter");
  const imageDiv = document.createElement("div");
  const imageSrc = document.createElement("img");
  imageSrc.setAttribute(
    "src",
    "https://jwright2021.github.io/workingPortfolio/images/subscribe-pop2.png"
  );
  imageDiv.appendChild(imageSrc);

  const signUpForm = document.createElement("div");
  signUpForm.setAttribute("class", "sign-up-form");
  const freePrints = document.createElement("h3");
  freePrints.innerText = "Free Printable Origami Paper!";
  const printDescription = document.createElement("p");
  printDescription.innerText =
    "Join Paper Kawaii's newsletter to receive post updates, giveaways, free printables & more.";
  const newsletterInputOne = document.createElement("div");
  newsletterInputOne.setAttribute("class", "newsletter-input");
  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("title", "First Name");
  inputName.setAttribute("placeholder", "First Name");
  inputName.setAttribute("value", "");
  newsletterInputOne.appendChild(inputName);
  const newsletterInputTwo = document.createElement("div");
  newsletterInputTwo.setAttribute("class", "newsletter-input");
  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "text");
  inputEmail.setAttribute("title", "Email");
  inputEmail.setAttribute("placeholder", "Your Email");
  inputEmail.setAttribute("value", "");
  newsletterInputTwo.appendChild(inputEmail);
  const subscribeNewsletter = document.createElement("button");
  subscribeNewsletter.setAttribute("class", "origami-buttons");
  subscribeNewsletter.innerText = "Subscribe";

  signUpForm.appendChild(freePrints);
  signUpForm.appendChild(printDescription);
  signUpForm.appendChild(newsletterInputOne);
  signUpForm.appendChild(newsletterInputTwo);
  signUpForm.appendChild(subscribeNewsletter);

  signUpNewsLetter.appendChild(imageDiv);
  signUpNewsLetter.appendChild(signUpForm);
  currentDiv.parentNode.insertBefore(signUpNewsLetter, currentDiv);

  const linksPrintables = document.createElement("div");
  linksPrintables.setAttribute("class", "links-printables");
  const linksHeader = document.createElement("h2");
  linksHeader.innerText = "Links";
  const miscLinks = document.createElement("div");
  miscLinks.setAttribute("class", "misc-links");

  for (i in linksData) {
    const e = linksData[i];
    const holdLink = document.createElement("a");
    holdLink.setAttribute("href", e.hrefLink);
    holdLink.setAttribute("target", "_blank");
    const holdImage = document.createElement("img");
    holdImage.setAttribute("src", e.imgSrc);
    holdLink.appendChild(holdImage);
    miscLinks.appendChild(holdLink);
  }

  linksPrintables.appendChild(linksHeader);
  linksPrintables.appendChild(miscLinks);

  currentDiv.parentNode.insertBefore(linksPrintables, currentDiv);

  currentDiv.remove();
}

// Add Footer Nav
function addFooterNav(_callback) {
  const footerLabels = baseData.footerNavigations;
  const currentDiv = document.getElementById("footerInjection");
  const footer = document.createElement("div");
  footer.setAttribute("class", "footer");
  const footerNav = document.createElement("div");
  footerNav.setAttribute("class", "footer-nav");

  for (e in footerLabels) {
    const i = footerLabels[e];
    const newFooterLabel = document.createElement("div");
    newFooterLabel.innerText = i;
    footerNav.appendChild(newFooterLabel);
  }

  const copyrightFooter = document.createElement("div");
  copyrightFooter.setAttribute("class", "copyright");
  copyrightFooter.innerText = "Copyright © 2024 Paper Kawaii";

  footer.appendChild(footerNav);
  footer.appendChild(copyrightFooter);

  currentDiv.parentNode.insertBefore(footer, currentDiv);
  currentDiv.remove();
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
