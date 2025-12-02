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

// create/add page content
function addPageContent(_callback) {
  const baseInjection = document.getElementById("baseInjection");
  if (!baseInjection) return;

  const baseFragment = document.createDocumentFragment();
  const mainBody = document.createElement("div");
  mainBody.className = "main";
  mainBody.role = "main";

  const otherHeader = document.createElement("header");
  otherHeader.innerHTML = `
    <h1>Jenna Wright</h1>
    <h2>Software Engineer</h2>
    <p>&#128204; Open and available for hire &#128204;</p>
  `;
  baseFragment.appendChild(otherHeader);

  const basePage = document.createElement("page");

  const careerHeader = document.createElement("h3");
  careerHeader.id = "Career";
  careerHeader.textContent = "Career";
  basePage.appendChild(careerHeader);

  const careerInjection = document.createElement("div");
  careerInjection.id = "careerInjection";
  basePage.appendChild(careerInjection);

  const educationHeader = document.createElement("h3");
  educationHeader.textContent = "Education";
  basePage.appendChild(educationHeader);

  const educationDetails = document.createElement("p");
  educationDetails.textContent =
    "Graduated May 2019 with a B.A. in Computer Science from Gettysburg College.";
  basePage.appendChild(educationDetails);

  const AboutMeHeader = document.createElement("h3");
  AboutMeHeader.id = "About";
  AboutMeHeader.textContent = "About Me";
  basePage.appendChild(AboutMeHeader);

  const aboutMeDetails = document.createElement("div");
  aboutMeDetails.className = "aboutMeDiv";
  aboutMeDetails.innerText = baseData.aboutMe.join(" ");
  basePage.appendChild(aboutMeDetails);

  const aboutInjectionDiv = document.createElement("div");
  aboutInjectionDiv.id = "aboutInjection";
  basePage.appendChild(aboutInjectionDiv);

  const goToTopButton = document.createElement("a");
  goToTopButton.className = "homepage-button";
  goToTopButton.href = "#top";
  goToTopButton.textContent = "Go to Top";
  basePage.appendChild(goToTopButton);

  mainBody.appendChild(basePage);
  baseFragment.appendChild(mainBody);

  baseInjection.parentNode.replaceChild(baseFragment, baseInjection);
}

// Add career details
function addCareerDetails(_callback) {
  const careerData = baseData.career;
  const currentDiv = document.getElementById("careerInjection");
  if (!currentDiv) return;

  const fragment = document.createDocumentFragment();

  const careerResume = document.createElement("div");
  careerResume.className = "career-resume";
  for (const e of careerData) {
    const careerCard = document.createElement("div");
    careerCard.className = "career-card";

    const timelineDiv = document.createElement("div");
    timelineDiv.className = "timeline";
    const dateDiv = document.createElement("div");
    dateDiv.className = "date";
    dateDiv.innerText = e.dates;
    const lengthDiv = document.createElement("div");
    lengthDiv.className = "length";
    lengthDiv.innerText = e.time;
    timelineDiv.append(dateDiv, lengthDiv);

    const skillsCard = document.createElement("div");
    skillsCard.className = "skills-card";
    for (const skill of e.tools) {
      const oneSkill = document.createElement("div");
      oneSkill.className = "stackSkill";
      oneSkill.innerText = skill;
      skillsCard.appendChild(oneSkill);
    }

    const jobCard = document.createElement("div");
    jobCard.className = "job-card";
    const jobTitle = document.createElement("div");
    jobTitle.className = "job-title";
    jobTitle.innerText = `${e.title} ♦ ${e.company}`;
    const jobDescription = document.createElement("div");
    jobDescription.className = "job-description";
    jobDescription.innerText = e.description;
    jobCard.append(jobTitle, jobDescription);

    careerCard.append(timelineDiv, skillsCard, jobCard);
    careerResume.appendChild(careerCard);
  }
  fragment.appendChild(careerResume);
  currentDiv.parentNode.replaceChild(fragment, currentDiv);
}

document.addEventListener("DOMContentLoaded", async function () {
  await fetchBaseData();
  addPageContent();
  addCareerDetails();

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
