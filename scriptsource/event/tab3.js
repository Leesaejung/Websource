// tab.js ==> 이벤트 버블링 변경
// 이벤트버블링 : 자식에서 발생한 이벤트가 부모로 전달
// e.target : 이벤트가 일어난 대상
// e.currentTarget : 이벤트가 일어난 대상 + 버블링 된 대상

// 이벤트 대상(tab-button) =전달> 부모(ul)에게 이벤트 전달
const tabParent = document.querySelector(".list");
const tabBtns = document.querySelectorAll(".tab-button");
const tabCnts = document.querySelectorAll(".tab-content");
// tabBtns.forEach((tabBtn) => {
//   tabBtn.addEventListener("click", (e) => {
//     console.log(e.currentTarget.className);
//   });
// });

function tabOpen(idx) {
  // 모든 tab-button orange 클래스명 제거
  tabBtns.forEach((item) => {
    item.classList.remove("orange");
  });

  // 모든 tab-content의 show 제거
  tabCnts.forEach((tabCnt) => {
    tabCnt.classList.remove("show");
  });

  tabBtns[idx].classList.add("orange");
  // 현재 클릭이 된 tab-button 순서에 맞는 tab-content 보여주기,
  tabCnts[idx].classList.add("show"); // cnt는 이벤트 리스너를 사용하지 않았기에 idx 사용
}

// tabParent.addEventListener("click", (e) => {
//   // console.log(e.currentTarget.className);
//   // console.log(e.target);

//   if (e.target == tabBtns[0]) {
//     tabOpen(0);
//   } else if (e.target == tabBtns[1]) {
//     tabOpen(1);
//   } else {
//     tabOpen(2);
//   }
// });

// data- 이용 : 조건문 안 쓸려고
// data- : 전역 속성
//    -  다음에는 이름을 자유롭게

// <h1 data-index-number="1234">헤드</h1>
// data-index-number(지정) : dataset.indexNumber(접근)
// 대쉬로 접근하는게 아니라 카멜 케이스로 접근
// 스크립트에서 접근 (밑은 예시)
// const h1 = document.querySelector("h1")
// h1.dataset.indexNumber

tabParent.addEventListener("click", (e) => {
  // 이벤트가 일어난 대상의 data- 값 가져오기
  tabOpen(e.target.dataset.id);
});
