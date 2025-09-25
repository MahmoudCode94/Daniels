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
