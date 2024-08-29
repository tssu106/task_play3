// W,A,S,D 또는 움직이는 키 누를 시 호출
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

  // 케릭터 제어
   // 모든 basic_form 요소 선택
    const basic_form_elements = document.querySelectorAll('.basic_form');
      
    basic_form_elements.forEach((element) => {
      element.addEventListener('mouseover', function() {
        const gif_form = element.nextElementSibling;

        // 형제 요소가 gif_form인 경우만 처리
        if (gif_form && gif_form.classList.contains('gif_form')) {
          element.style.display = 'none';

          gif_form.style.display = 'block';

          setTimeout(function() {
            gif_form.style.display = 'none';

            element.style.display = 'block';
          }, 3200); 
        }
      });
    });

  // 이모션 풍선 5개의 그룹에서 랜덤하게 보이기
  function getRandomElement(elements) {
    const index = Math.floor(Math.random() * elements.length);
    return elements[index];
  }

  function toggleRandomVisibility(groupClass, interval) {
      const group = document.querySelector(groupClass);
      const items = Array.from(group.querySelectorAll('.emotion-wrap'));

      function toggle() {
        items.forEach(item => item.style.opacity = '0');
        const randomItem = getRandomElement(items);
        randomItem.style.opacity = '1';
    }

      toggle(); // Initially show a random element
      setInterval(toggle, interval);
  }

  // Toggle emotion-wrap elements at specified intervals
  toggleRandomVisibility('.emotion-group01', 4000); // 5 seconds
  toggleRandomVisibility('.emotion-group02', 1700); // 3 seconds
  toggleRandomVisibility('.emotion-group03', 2500); // 4 seconds
  toggleRandomVisibility('.emotion-group04', 3400); // 7 seconds
  toggleRandomVisibility('.emotion-group05', 1000); // 7 seconds


  // 텍스트 말풍선
  let wordArr = ['Hello', 'My name is Abril', 'Nice to meet you!'];
  let classNm = 'chracter_word_balloon'
  let periodicTime = 1500;
  let date = '2024/09/10';

  function changeWordBalloon(wordArray, className, periodTime, date){
    setInterval(()=>{
      let arrayIndex = Math.floor(Math.random() * wordArray.length);

      document.getElementsByClassName(className)[0].innerHTML = wordArray[arrayIndex];
    }, periodTime);

    
  }

  changeWordBalloon(wordArr, classNm, periodicTime, date);

  // logo의 coming soon 애니메이션 제어
  const element = document.querySelector('#comingSoon');
    setInterval(() => {
        function triggerAnimation() {
            element.style.animation = 'wobbleLeft 2s ease forwards';

            setTimeout(() => {
                element.style.animation = 'none';
            }, 2000); // 애니메이션 지속 시간 (2초)에 맞춰서 초기화
        }
        setInterval(() => {
          triggerAnimation();
        }, 18000);
        
        triggerAnimation();
      }, 4000);
});