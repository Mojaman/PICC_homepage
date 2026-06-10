import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
  getDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

// Firebase設定
const firebaseConfig = {
  apiKey: "AIzaSyD2-qs_MfQk1540EgVtl6F3bH0tEmRIU88",
  authDomain: "homepage-test-cc15b.firebaseapp.com",
  projectId: "homepage-test-cc15b",
  storageBucket: "homepage-test-cc15b.firebasestorage.app",
  messagingSenderId: "306865836134",
  appId: "1:306865836134:web:8e6262f6f9fab6477a9da7",
  measurementId: "G-Z4B1QECB3Y",
};

// 初期化
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const welcomeRef = doc(db, "template", "welcome");
const welcomeSnap = await getDoc(welcomeRef);

const activityRef = doc(db, "template", "activity");
const activitySnap = await getDoc(activityRef);

const roomRef = doc(db, "template", "room");
const roomSnap = await getDoc(roomRef);

let tipsList = [];
let tipsList2 = [];

//DOM取得
const templateWelcome = document.getElementById("template_welcome");
const templateActivity = document.getElementById("template_activity");
const templateRoom = document.getElementById("template_room");
const displayNews = document.getElementById("display_news");
const tips = document.querySelector(".tips");
const tipContent = document.getElementById("tip-content");

templateWelcome.innerHTML = welcomeSnap.data().text.replace(/\n/g, "<br>");
templateActivity.innerHTML = activitySnap.data().text.replace(/\n/g, "<br>");
templateRoom.innerHTML = roomSnap.data().text.replace(/\n/g, "<br>");

//ページ読み込み後に実行
await reloadNews();
await reloadTips();

async function reloadNews() {
  displayNews.innerHTML = "";
  const collectionRef = collection(db, "articles");
  const querySnapshot = await getDocs(collectionRef);

  querySnapshot.forEach((doc) => {
    const published = doc.data().published;
    if (published === 1) {
      const div = document.createElement("div");
      const a = document.createElement("a");
      a.href = `Subpages/article.html?page=${doc.id}`;
      a.textContent = doc.data().title;
      div.appendChild(a);
      displayNews.appendChild(div);
    }
  });
}

//tipリストの取得作成だけ
async function reloadTips() {
  const collectionRef = collection(db, "tips");
  const querySnapshot = await getDocs(collectionRef);
  tipsList = [];
  querySnapshot.forEach((doc) => {
    tipsList.push(doc.data().text);
  });
  tipsList2 = shuffle(tipsList);

  await showTips();
}

async function showTips() {
  for (const tip of tipsList2) {
    tipContent.textContent = tip;
    void tips.offsetWidth; // ← これが強制リフロー
    tips.classList.add("popup");
    await wait(6000);
    tips.classList.remove("popup");
  }
  showTips();
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // 要素を入れ替え
  }
  return array;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
