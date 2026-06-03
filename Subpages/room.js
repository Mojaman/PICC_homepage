const hamburger = document.getElementById("hamburger");

const globalNav = document.querySelector(".global-nav");

const close = document.getElementById("close");

const logo = document.querySelector(".logo a");

const imgIndexes = document.querySelectorAll(".room-img-index");

const roomIntro = document.getElementById("room-intro");

const roomImg = document.getElementById("room-img");

const backPage = document.querySelector(".back-page a");

// 変数宣言

let currentIndex = 0;

const roomData = [
  {
    index: 0,
    imgSrc: "../sample.png",
    alt: "部室の画像1",
    color: "#f7087f",
    intro: "test",
  },
  {
    index: 1,
    imgSrc: "../sample.png",
    alt: "部室の画像2",
    color: "#f5f10c",
    intro: "test",
  },
  {
    index: 2,
    imgSrc: "../sample.png",
    alt: "部室の画像3",
    color: "#64f106",
    intro: "test",
  },
  {
    index: 3,
    imgSrc: "../sample.png",
    alt: "部室の画像4",
    color: "#0f8b8b",
    intro: "test",
  },
  {
    index: 4,
    imgSrc: "../sample.png",
    alt: "部室の画像5",
    color: "#323ee6",
    intro: "test",
  },
  {
    index: 5,
    imgSrc: "../sample.png",
    alt: "部室の画像6",
    color: "#880eec",
    intro: "test",
  },
];

hamburger.addEventListener("click", () => {
  globalNav.classList.toggle("active");
  globalNav.classList.add("loaded");
});

close.addEventListener("click", () => {
  globalNav.classList.toggle("active");
});

imgIndexes.forEach((index) => {
  index.addEventListener("click", () => {
    imgIndexes.forEach((i) => i.classList.remove("active"));
    index.classList.add("active");
    currentIndex = parseInt(index.getAttribute("data-index"));
    updateRoomImage();
  });
});

function updateRoomImage() {
  const imgContainer = document.querySelector(".room-img-container");
  const imgElement = imgContainer.querySelector("img");
  const currentData = roomData[currentIndex];
  imgElement.src = currentData.imgSrc;
  imgElement.alt = currentData.alt;
  imgContainer.style.backgroundColor = currentData.color;
  roomIntro.textContent = currentData.intro;
  reFadein();
}

updateRoomImage();

function reFadein() {
  roomIntro.classList.remove("fadein");
  roomImg.classList.remove("popup");
  void roomIntro.offsetWidth; // Trigger reflow
  roomIntro.classList.add("fadein");
  roomImg.classList.add("popup");
}

// history.pushState({ tmp: true }, "", "../index.html");

// backPage.addEventListener("click", (e) => {
//   e.preventDefault();
//   try {
//     window.history.back();
//   } catch (error) {
//     window.location.href = "../index.html";
//   }
// });

// logo.addEventListener("click", (e) => {
//   e.preventDefault();
//   try {
//     window.history.back();
//   } catch (error) {
//     window.location.href = "../index.html";
//   }
// });
