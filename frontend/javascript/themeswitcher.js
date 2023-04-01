

function switchTheme() {
    if (body.classList.contains("light-theme")) {
        body.classList.replace("light-theme", "dark-theme");
        localStorage.setItem("theme", "dark-theme");
    } 
    else {
        body.classList.replace("dark-theme", "light-theme");
        localStorage.setItem("theme", "light-theme");
    }

    modal.classList.toggle("dark-mode");
    }

function loadTheme() {
    const savedTheme = localStorage.getItem("theme") || "light-theme";
    body.classList.add(savedTheme);
}

function applyModalTheme() {
    const currentTheme = localStorage.getItem("theme") || "light-theme";
    if (currentTheme === "dark-theme") {
        modal.classList.add("dark-mode");
    } else {
        modal.classList.remove("dark-mode");
    }
}
