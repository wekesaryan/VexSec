const selector = document.getElementById("theme-selector");
const root = document.body;

const themes = {
  tomorrow: "theme-tomorrow",
  light: "theme-light",
  dark: "theme-dark",
  slate: "theme-slate",
};

function applyTheme(themeKey) {
  const className = themes[themeKey];
  if (className) {
    root.className = className;
    selector.value = themeKey;
    localStorage.setItem("theme", themeKey);
  }
}

// Apply saved theme or default
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme") || "tomorrow";
  applyTheme(saved);
});

selector.addEventListener("change", (e) => {
  applyTheme(e.target.value);
});

// Toggle dropdown on icon click
document.getElementById("theme-icon").addEventListener("click", () => {
  selector.style.display =
    selector.style.display === "block" ? "none" : "block";
});

selector.addEventListener("change", (e) => {
  applyTheme(e.target.value);
  selector.style.display = "none"; // collapse after selection
});
