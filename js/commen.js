// W,A,S,D 또는 움직이는 키 누를 시 호출
// let wKey = 87;
// let aKey = 65;
// let sKey = 83;
// let dKey = 68;

// document.addEventListener("keyup", (event) => {
//   if (event.keyCode === wKey || event.keyCode === aKey || event.keyCode === sKey || event.keyCode === dKey) {
//     alert("키보드 누름");
//   }
//     return;
// });
let wKey = 87;
let aKey = 65;
let sKey = 83;
let dKey = 68;

document.addEventListener("keyup", (event) => {
    if (event.keyCode === wKey || event.keyCode === aKey || event.keyCode === sKey || event.keyCode === dKey) {
        const warningDiv = document.getElementById('warning01');
        warningDiv.style.display = 'block'; // 경고 메시지 표시
    }
});


// 광장 영역 4회 이상 click 시 호출
let count = 0;

document.addEventListener("click", () => {
  count += 1;
  if(count >= 4){
    const warningDiv = document.getElementById('warning02');
    warningDiv.style.display = 'block'; // 경고 메시지 표시
    count = 0;
  }
  return ;
});


// 팝업창 닫기
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('warning01').addEventListener('click', () => {
      const warningDiv = document.getElementById('warning01');
      warningDiv.style.display = 'none'; // 경고 메시지 숨기기
  });
  document.getElementById('warning02').addEventListener('click', () => {
      const warningDiv = document.getElementById('warning02');
      warningDiv.style.display = 'none'; // 경고 메시지 숨기기
  });

  // Learn More 팝업창
  const popupLearnBtn = document.getElementById('popup-learn');
  const popupWrap = document.querySelector('.popup-wrap');
  const btnClose = document.querySelector('.btn-close');
  const btnOk = document.querySelector('.btn-ok');

  // 팝업 열기
  popupLearnBtn.addEventListener('click', () => {
      popupWrap.style.display = 'flex'; // 팝업을 보이게 함
  });

  // 팝업 닫기
  function closePopup() {
      popupWrap.style.display = 'none'; // 팝업을 숨김
  }

  // 닫기 버튼과 확인 버튼 클릭 시 팝업 닫기
  btnClose.addEventListener('click', closePopup);
  btnOk.addEventListener('click', closePopup);

  // 팝업 외부 클릭 시 닫기
  // popupWrap.addEventListener('click', (event) => {
  //     if (event.target === popupWrap) {
  //         closePopup();
  //     }
  // });
});