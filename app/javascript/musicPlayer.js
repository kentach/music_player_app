const musicPlayerSection = document.querySelector(".player");
let clickCount = 1;

musicPlayerSection.addEventListener("click", () => {
  if (clickCount >= 2) {
    musicPlayerSection.classList.add("active");
    clickCount = 1;
    return;
  }
  clickCount++;
  setTimeout(() => {
    clickCount = 1;
  }, 250);
});


// //プレイヤーからホームに戻る
const backHomeFromPlayer = document.querySelector(".player .arrow-btn");
backHomeFromPlayer.addEventListener("click", () => {
  musicPlayerSection.classList.remove("active");
});

// //トラックリストへ
const trackListSection = document.querySelector(".track-list");
const menuBtn = document.querySelector(".player .menu-btn");

menuBtn.addEventListener("click", () => {
  trackListSection.classList.add("active");
});

// トラックリストからホームへ戻る
const backHomeFromTrackList = document.querySelector(".track-list .arrow-btn");

backHomeFromTrackList.addEventListener("click", () => {
  trackListSection.classList.remove("active");
});

