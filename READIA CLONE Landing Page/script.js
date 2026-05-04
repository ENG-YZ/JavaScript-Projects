let menuBtn = document.querySelector(".menu");
let logoHeader = document.querySelector(".logo");
let minMenu = document.querySelector(".menu-min");
let closeBtn = document.querySelector(".closeBtn");
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

// header menu

menuBtn.addEventListener("click", function () {
  logoHeader.classList.add("display");
  minMenu.style.display = "block";
  menuBtn.style.display = "none";
});
closeBtn.addEventListener("click", function () {
  logoHeader.classList.remove("display");
  minMenu.style.display = "none";
  menuBtn.style.display = "block";
});

//

slide.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateCarousel() {
  slides.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach((d) => d.classList.remove("active"));
  dots[current].classList.add("active");
}

function nextSlide() {
  current = (current + 1) % slide.length;
  updateCarousel();
}

function prevSlide() {
  current = (current - 1 + slide.length) % slide.length;
  updateCarousel();
}

function goToSlide(i) {
  current = i;
  updateCarousel();
}


// Auto-play every 4s
setInterval(nextSlide, 4000);
