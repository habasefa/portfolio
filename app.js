(function () {
  "use strict";
  var root = document.documentElement;
  var toggle = document.getElementById("themeToggle");
  var preference = null;
  try {
    preference = localStorage.getItem("habtamu-theme-v2");
  } catch (_) {}
  if (preference === "dark" || preference === "light")
    root.dataset.theme = preference;
  function updateLabel() {
    var isDark = root.dataset.theme === "dark";
    toggle.textContent = isDark ? "Light" : "Dark";
    toggle.setAttribute(
      "aria-label",
      "Switch to " + (isDark ? "light" : "dark") + " theme",
    );
  }
  if (!toggle) return;
  updateLabel();
  toggle.addEventListener("click", function () {
    var theme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = theme;
    try {
      localStorage.setItem("habtamu-theme-v2", theme);
    } catch (_) {}
    updateLabel();
  });
})();
