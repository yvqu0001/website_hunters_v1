console.log("loading instructions");

const popup = document.getElementById("popup");
const closeBtn = popup.querySelector(".close-btn");
const openBtn = document.getElementById("open_settings");

// OPEN
openBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

// CLOSE (X)
closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// CLOSE (ESC)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !popup.classList.contains("hidden")) {
    popup.classList.add("hidden");
  }
});
