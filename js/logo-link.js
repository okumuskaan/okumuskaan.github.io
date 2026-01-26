(function () {
  function init() {
    const logoTitle = document.getElementById("logo-title");

    if (!logoTitle) return;
    logoTitle.style.cursor = "pointer";

    logoTitle.addEventListener("click", () => {
      window.location.href = "index.html";
    });
    
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
