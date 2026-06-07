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
    imgSrc: "../room1.jpeg",
    alt: "部室の画像1",
    color: "#f7087f",
    intro:
      "物情の部室全体像です。部室は広々としていて、部員が自由に使えるスペースがたくさんあります。",
  },
  {
    index: 1,
    imgSrc: "../room2.jpeg",
    alt: "部室の画像2",
    color: "#f5f10c",
    intro:
      "主にVtuberやプログラミングなど、メインの活動で使用されるパソコンです。",
  },
  {
    index: 2,
    imgSrc: "../room3.jpeg",
    alt: "部室の画像3",
    color: "#64f106",
    intro:
      "パソコンというより大画面のほうがメインです。みんなでゲームをしたりするときに使います。",
  },
  {
    index: 3,
    imgSrc: "../room4.jpeg",
    alt: "部室の画像4",
    color: "#0f8b8b",
    intro: "物情備え付けのベッド(？)です。部員の中にはここで寝る人もいるとか…",
  },
  {
    index: 4,
    imgSrc: "../room5.jpeg",
    alt: "部室の画像5",
    color: "#323ee6",
    intro:
      "本棚です。部員たちが持ち寄った本がたくさん置いてあります。技術書のほかにも攻略本や参考書が置いてあったりします。",
  },
  {
    index: 5,
    imgSrc: "../room6.jpeg",
    alt: "部室の画像6",
    color: "#880eec",
    intro:
      "物情の設備は結構充実してて、冷蔵庫のほかにもオーブントースターやかき氷機などがあります！",
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
