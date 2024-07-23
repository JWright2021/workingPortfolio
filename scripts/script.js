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

  const currentDiv = document.getElementById("pageConstants");

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
