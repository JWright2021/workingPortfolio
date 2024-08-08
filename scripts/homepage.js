var baseData;

// fetch all data
async function fetchBaseData() {
  try {
    const response = await fetch(
      `https://jwright2021.github.io/workingPortfolio/data/homepage-data.json`
    );
    // const response = await fetch(`data/homepage-data.json`);
    const homepage = await response.json();
    baseData = homepage;
  } catch (error) {
    console.error(error);
  }
}

// Add career details
function addCareerDetails(_callback) {
  const careerData = baseData.career;
  const currentDiv = document.getElementById("careerInjection");
  if (!currentDiv) return;

  const careerDiv = document.createElement("div");
  careerDiv.className = "careerDiv";
  for (const e of careerData) {
    // console.log("career is", e);
  }
  currentDiv.parentNode.insertBefore(careerDiv, currentDiv);

  currentDiv.remove();
}

// Add about me details
function addAboutMe(_callback) {
  const aboutMeData = baseData.aboutMe;
  const currentDiv = document.getElementById("aboutInjection");
  if (!currentDiv) return;

  const aboutDiv = document.createElement("div");
  aboutDiv.className = "aboutMeDiv";

  aboutDiv.innerText = aboutMeData.join(" ");

  currentDiv.parentNode.replaceChild(aboutDiv, currentDiv);
}

document.addEventListener("DOMContentLoaded", async function () {
  await fetchBaseData();
  addCareerDetails();
  addAboutMe();

  // Cache the elements so as not to query the DOM unnecessarily
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    // Close menu when a link is selected
    if (
      e.target.classList.contains("headNav") &&
      navLinks.classList.contains("active")
    ) {
      navLinks.classList.remove("active");
    }
    // Close the menu when clicked outside of menu
    if (
      navLinks.classList.contains("active") &&
      !navLinks.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      navLinks.classList.remove("active");
    }
  });
});
