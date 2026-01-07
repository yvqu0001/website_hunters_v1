// DARK MODE
const html = document.querySelector("html");
const btn = document.querySelector("#toggle");

// Check localStorage on page load
if (localStorage.getItem("darkMode") === "enabled") {
  html.classList.add("dark");
}

// Toggle function
function colorSchemeToggle() {
  html.classList.toggle("dark");

  // Save preference
  if (html.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

btn.addEventListener("click", colorSchemeToggle);
