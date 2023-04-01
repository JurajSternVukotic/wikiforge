document.addEventListener("DOMContentLoaded", function () {
    loadFooter();
  });
  
  function loadFooter() {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (!footerPlaceholder) return;
  
    fetch("footer.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((html) => {
        footerPlaceholder.innerHTML = html;
      })
      .catch((error) => {
        console.warn("Error loading footer:", error);
      });
  }