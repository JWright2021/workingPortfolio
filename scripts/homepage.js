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

  document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("active");
  });
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const navClass = document.getElementById("nav-links").classList;
  if (target.classList.contains("headNav") && navClass.contains("active")) {
    document.getElementById("nav-links").classList.remove("active");
  }
});
