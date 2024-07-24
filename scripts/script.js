// Add Navbar Socials
document.addEventListener("DOMContentLoaded", function () {
  const socialData = [
    {
      hreflink: "https://facebook.com/paperkawaii",
      ariaLabel: "Facebook",
      viewBox: "0 0 448 512",
      fill: "#557dbc",
      svgPath:
        "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z",
    },
    {
      hreflink: "https://instagram.com/paperkawaii",
      ariaLabel: "Instagram",
      viewBox: "0 0 448 512",
      fill: "#8a3ab9",
      svgPath:
        "M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z",
    },
    {
      hreflink: "https://twitter.com/paperkawaii",
      ariaLabel: "Twitter X",
      viewBox: "0 0 512 512",
      fill: "#7acdee",
      svgPath:
        "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
    },
    {
      hreflink: "https://www.youtube.com/paperkawaii",
      ariaLabel: "YouTube",
      viewBox: "0 0 576 512",
      fill: "#e96651",
      svgPath:
        "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
    },
  ];
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
});

// Add Navbar Nav
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = [
    {
      label: "Home",
      hrefLink: "https://jwright2021.github.io/workingPortfolio/",
    },
    {
      label: "Categories",
      hrefLink:
        "https://jwright2021.github.io/workingPortfolio/categories.html",
    },
    {
      label: "Shop",
      hrefLink: "https://jwright2021.github.io/workingPortfolio/shop.html",
    },
    {
      label: "About",
      hrefLink: "https://jwright2021.github.io/workingPortfolio/about.html",
    },
  ];

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
});

// Add Navbar Search
document.addEventListener("DOMContentLoaded", function () {
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
});

// Add Paper Kawaii Logo
document.addEventListener("DOMContentLoaded", function () {
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
});

// Add Page Constants
document.addEventListener("DOMContentLoaded", function () {
  const linksData = [
    {
      hrefLink: "https://origami.guide/",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2018/06/origami-guide-link-440x440.jpg",
    },
    {
      hrefLink: "https://kaomojikuma.com/",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2022/09/kaomoji-kuma-square-ad-600-440x440.jpg",
    },
    {
      hrefLink: "https://kawaiihoshi.com/",
      imgSrc:
        "https://www.paperkawaii.com/wp-content/uploads/2022/09/kawaii-hoshi-600-440x440.png",
    },
  ];

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
});

// Add Footer Nav
document.addEventListener("DOMContentLoaded", function () {
  const footerLabels = [
    "About Paper Kawaii",
    "Donate & Support",
    "Privacy Policy",
    "Copyright Information",
    "Contact",
  ];
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
});
