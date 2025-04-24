const DEFAULT_CULTURE = "en";
const CULTURES = ["es", "en"];
let currentCulture = DEFAULT_CULTURE;

const processCulture = (culture) => {
  document.querySelector("#description").innerHTML = culture.description;
  // menu
  document.querySelector("#m-about").innerHTML = culture.about.action;
  document.querySelector("#m-experience").innerHTML = culture.experience.action;
  document.querySelector("#m-resume").innerHTML = culture.resume.action;
  //content
  document.querySelector("#about p").innerHTML = culture.about.description;
  document.querySelector("#resume h3").innerHTML = culture.resume.description;
  document.querySelectorAll("#experience ul li").forEach((li, i) => {
    li.querySelector("p").innerHTML = culture.experience.items[i].date;
    li.querySelector("article h3").innerHTML =
      culture.experience.items[i].title;
    li.querySelector("article p").innerHTML =
      culture.experience.items[i].description;
  });
};

const loadCulture = (lang) => {
  fetch(`assets/lang/${lang}.json`)
    .then((res) => res.json())
    .then((data) => {
      processCulture(data);
    });
};

const changeLanguage = (language) => {
  if (CULTURES.includes(language)) {
    currentCulture = language;
    loadCulture(currentCulture);
    document.querySelectorAll(".languages span").forEach((span) => {
      span.classList.remove("active");
    });
    document.querySelector(`span#${language}`).classList.add("active");
  } else {
    console.error("Language not supported");
  }
};

loadCulture(currentCulture);
