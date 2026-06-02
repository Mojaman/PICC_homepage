const hamburger = document.getElementById("hamburger");

const globalNav = document.querySelector(".global-nav");

const close = document.getElementById("close");

const backPage = document.querySelector(".back-page a");

hamburger.addEventListener("click", () => {
  globalNav.classList.toggle("active");
  globalNav.classList.add("loaded");
});

close.addEventListener("click", () => {
  globalNav.classList.toggle("active");
});

backPage.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    window.history.back();
  } catch (error) {
    window.location.href = "../index.html";
  }
});
