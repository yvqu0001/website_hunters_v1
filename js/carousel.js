const track = document.querySelector(".carousel_track");
const items = Array.from(track.children);
const prevBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");

let currentIndex = 0;

function updateCarousel() {
  // get width of first slide
  const width = items[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = items.length - 1;
  }
  updateCarousel();
});

window.addEventListener("resize", () => {
  updateCarousel();
});
