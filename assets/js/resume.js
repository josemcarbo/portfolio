const appData = getAppData();
const currentCulture = appData.currentCulture;
const data =
  appData && appData[currentCulture] ? appData[currentCulture] : null;

console.log({ currentCulture, appData });

if (data) {
  document.querySelector(`#header h2`).innerHTML = data.cv.description;
  document.querySelector(`#experience h1`).innerHTML =
    data.cv.experience.description;
  document.querySelector(`#senior`).innerHTML = data.cv.experience.senior;
  document.querySelector(`#engineer`).innerHTML = data.cv.experience.engineer;
  document
    .querySelectorAll(`#experience ul#general li`)
    .forEach((li, index) => {
      li.innerHTML = data.cv.experience.general[index];
    });
  document.querySelector(`#experience #details`).innerHTML =
    data.cv.experience.details.join("");
  document.querySelector(`#skills`).innerHTML = data.cv.skills;
  document.querySelector(`#education`).innerHTML = data.cv.education;
  document.querySelector(`#language`).innerHTML = data.cv.languages;
  document.querySelector(`#interest`).innerHTML = data.cv.interest;
  document.querySelector(`a.sticky`).href = `./assets/doc/resume_${currentCulture}.pdf`;
}
