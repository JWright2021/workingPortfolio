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
      console.log("skill is", skill);
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
