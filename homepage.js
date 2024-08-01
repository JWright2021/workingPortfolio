var baseData;

// fetch all data
async function fetchBaseData() {
  try {
    // const response = await fetch(
    //   `https://jwright2021.github.io/workingPortfolio/homepage-data.json`
    // );
    const response = await fetch(`./homepage-data.json`);
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
    console.log("career is", e);
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
  for (const e of aboutMeData) {
    aboutDiv.innerText += e + " ";
  }
  currentDiv.parentNode.insertBefore(aboutDiv, currentDiv);

  currentDiv.remove();
}

document.addEventListener("DOMContentLoaded", async function () {
  await fetchBaseData();
  addCareerDetails();
  addAboutMe();
});
