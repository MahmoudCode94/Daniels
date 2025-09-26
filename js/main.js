// ================= Navbar Scroll Effect =================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});
// ================= Navbar Scroll Effect =================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});
// ================= Typewriter Effect =================
class TxtType {
  constructor(el, toRotate, period) {
    this.el = el;
    this.toRotate = toRotate;
    this.period = parseInt(period, 10) || 1000;
    this.txt = "";
    this.loopNum = 0;
    this.isDeleting = false;
    this.tick();
  }
  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];
    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);
    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;
    let delta = 150 - Math.random() * 100;
    if (this.isDeleting) delta /= 2;
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(() => this.tick(), delta);
  }
}
// Initialize Typewriter
window.addEventListener("load", () => {
  const elements = document.getElementsByClassName("typewrite");
  for (let el of elements) {
    const toRotate = el.getAttribute("data-type");
    const period = el.getAttribute("data-period");
    if (toRotate) new TxtType(el, JSON.parse(toRotate), period);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const portfolioModal = document.getElementById("portfolioModal");
  const portfolioCarousel = document.getElementById("portfolioCarousel");
  const carousel = new bootstrap.Carousel(portfolioCarousel);
  portfolioModal.addEventListener("show.bs.modal", function (event) {
    const button = event.relatedTarget;
    const index = button.getAttribute("data-index");
    carousel.to(index);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("#portfolioCarousel");
  const counter = document.querySelector("#carouselCounter");
  const items = carousel.querySelectorAll(".carousel-item");
  const total = items.length;
  let activeIndex = 0;
  counter.textContent = `${activeIndex + 1} of ${total}`;
  carousel.addEventListener("slid.bs.carousel", function (e) {
    activeIndex = e.to;
    counter.textContent = `${activeIndex + 1} of ${total}`;
  });
});
