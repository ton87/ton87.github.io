const header = document.querySelector("[data-header]");

const syncHeader = () => {
  if (!header) return;
  header.style.background = window.scrollY > 24 ? "rgba(247, 243, 234, 0.88)" : "transparent";
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
