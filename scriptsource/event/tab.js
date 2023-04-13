// orange 클래스 부착
// tab버튼 0을 누르면
// 모든 버튼에 붙은 orange 클래스명 제거
// tab 버튼0에 orange 클래스명 부착

// classList.add()  /  classList.remove()

// 버튼 클릭에 맞춰 tab-content 보여주기
// show 클래스명 부착

const tabBtn0 = document.querySelector(".list> li:first-child");
const tabBtn1 = document.querySelector(".list> li:nth-child(2)");
const tabBtn2 = document.querySelector(".list> li:last-child");

const tabCnt0 = document.querySelector(".container > div:nth-child(2)");
const tabCnt1 = document.querySelector(".container > div:nth-child(3)");
const tabCnt2 = document.querySelector(".container > div:nth-child(4)");

tabBtn0.addEventListener("click", () => {
  tabBtn0.classList.add("orange");
  tabBtn1.classList.remove("orange");
  tabBtn2.classList.remove("orange");

  tabCnt0.classList.add("show");
  tabCnt1.classList.remove("show");
  tabCnt2.classList.remove("show");
});

tabBtn1.addEventListener("click", () => {
  tabBtn0.classList.remove("orange");
  tabBtn1.classList.add("orange");
  tabBtn2.classList.remove("orange");

  tabCnt0.classList.remove("show");
  tabCnt1.classList.add("show");
  tabCnt2.classList.remove("show");
});

tabBtn2.addEventListener("click", () => {
  tabBtn0.classList.remove("orange");
  tabBtn1.classList.remove("orange");
  tabBtn2.classList.add("orange");

  tabCnt0.classList.remove("show");
  tabCnt1.classList.remove("show");
  tabCnt2.classList.add("show");
});
