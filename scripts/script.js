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
});

// Add Page Constants
// document.addEventListener("DOMContentLoaded", function () {
//   const footerLabels = [
//     "About Paper Kawaii",
//     "Donate & Support",
//     "Privacy Policy",
//     "Copyright Information",
//     "Contact",
//   ];
//   const currentDiv = document.getElementById("bottomLinks");
//   const footer = document.createElement("div");
//   footer.setAttribute("class", "footer");
//   const footerNav = document.createElement("div");
//   footerNav.setAttribute("class", "footer-nav");

//   for (e in footerLabels) {
//     const i = footerLabels[e];
//     const newFooterLabel = document.createElement("div");
//     newFooterLabel.innerText = i;
//     footerNav.appendChild(newFooterLabel);
//   }

//   const copyrightFooter = document.createElement("div");
//   copyrightFooter.setAttribute("class", "copyright");
//   copyrightFooter.innerText = "Copyright © 2024 Paper Kawaii";

//   footer.appendChild(footerNav);
//   footer.appendChild(copyrightFooter);

//   //   currentDiv.parentNode.insertBefore(footer, currentDiv);
// });
