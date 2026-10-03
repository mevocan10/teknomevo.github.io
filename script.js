document.getElementById("year").textContent = new Date().getFullYear();
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.style.borderColor = window.scrollY > 24
    ? "rgba(255,145,76,.18)"
    : "rgba(255,255,255,.08)";
}, { passive: true });
