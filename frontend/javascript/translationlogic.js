const languageToggler = document.getElementById("language_toggler");
const home = document.getElementById("home");
const myWikis = document.getElementById("my-wikis");
const friends = document.getElementById("friends");
const bookmarks = document.getElementById("bookmarks");
const tutorial = document.getElementById("tutorial");
const profile = document.getElementById("profile");
const language_toggler = document.getElementById("language_toggler");
const theme_toggler = document.getElementById("theme_toggler")


function switchLanguage() {
const currentLanguage = localStorage.getItem("language") || "en";
const newLanguage = currentLanguage === "en" ? "hr" : "en";
localStorage.setItem("language", newLanguage);
updateTranslations(newLanguage);
}

function loadLanguage() {
const savedLanguage = localStorage.getItem("language") || "en";
updateTranslations(savedLanguage);
}

function updateTranslations(lang) {
home.textContent = translations[lang].home;
myWikis.textContent = translations[lang].myWikis;
friends.textContent = translations[lang].friends;
bookmarks.textContent = translations[lang].bookmarks;
tutorial.textContent = translations[lang].tutorial;
profile.textContent = translations[lang].profile;
language_toggler.textContent = translations[lang].language_toggler;
theme_toggler.textContent = translations[lang].theme_toggler;
}