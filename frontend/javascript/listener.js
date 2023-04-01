const modal = document.getElementById("login-register-modal");
const themeToggler = document.getElementById("theme_toggler");
const body = document.body;

themeToggler.addEventListener("click", switchTheme);
loadTheme();
applyModalTheme();

languageToggler.addEventListener("click", switchLanguage);
loadLanguage();