// tab.js ==> forEach(== for) 변경

// const arr=[1,2,3,4];
//for(let i=0; i<배열길이; i++){
//    첫번째 요소 가져오기
//    let 가져온요소 = 배열명[i];
//
//    consol.log(가져온요소)
//}

// arr.forEach((item=가져온요소,i=인덱스번호) => {
//   console.log(item)
// });

// tab-button
const tabBtns = document.querySelectorAll(".tab-button");
// tab-content
const tabCnts = document.querySelectorAll(".tab-content");

tabBtns.forEach((tabBtn, idx) => {
  tabBtn.addEventListener("click", (e) => {
    // 모든 tab-button orange 클래스명 제거
    tabBtns.forEach((item) => {
      item.classList.remove("orange");
    });
    // 현재 클릭이 된 tab-button 만 orange 부착
    e.target.classList.add("orange");

    // 모든 tab-content의 show 제거
    tabCnts.forEach((tabCnt) => {
      tabCnt.classList.remove("show");
    });

    // 현재 클릭이 된 tab-button 순서에 맞는 tab-content 보여주기,
    // cnt는 이벤트 리스너를 사용하지 않았기에 idx 사용
    tabCnts[idx].classList.add("show");
  });
});
