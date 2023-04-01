function openLoginRegisterModal() {
    modal.style.display = "block";
}

const closeModal = document.querySelector(".close");

function openTab(evt, tabName) {
const tabcontent = document.getElementsByClassName("tabcontent");
for (let i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}

const tablinks = document.getElementsByClassName("tablinks");
for (let i = 0; i < tablinks.length; i++) {
tablinks[i].classList.remove("active");
}

document.getElementById(tabName).style.display = "block";
evt.currentTarget.classList.add("active");
}

closeModal.onclick = function() {
modal.style.display = "none";
};

window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
    }
};

document.getElementById("default-tab").click();