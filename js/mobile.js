document.addEventListener("DOMContentLoaded", function () {
    let targetElement = document.querySelector('section');
    let movingSpeed = 6;   //숫자를 내리면 빨라진다.
    let positionCoord = 2;  //숫자를 내리면 더 부드럽게 움직이는것 처럼 보임.
    let halfPosition = (targetElement.scrollWidth - targetElement.clientWidth) / 2;
    let scrollLeft = targetElement.scrollWidth - targetElement.offsetWidth;

    let isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    let init = () => {
        targetElement.scrollTo(halfPosition, 0);    //x, y 좌표

        return targetElement.scrollLeft;
    }

    let moveToLeftFromCenter = (scrollPosition) => new Promise(resolve => {
        let position = scrollPosition;

        let intervalId = setInterval(() => {
            targetElement.scrollTo(position, 0);

            position -= positionCoord;

            if (position <= 0) {
                resolve(intervalId);
            }
        }, movingSpeed);
    });

    let moveToRightFromLeft = () => new Promise(resolve => {
        let currentPosition = 0;
        let intervalId = setInterval(() => {
            targetElement.scrollTo(currentPosition, 0);

            currentPosition += positionCoord;

            if (currentPosition >= scrollLeft) {
                resolve(intervalId);
            }
        }, movingSpeed);
    });

    let moveToCenterFromRight = () => new Promise(resolve => {
        let currentPosition = targetElement.scrollLeft;
        let intervalId = setInterval(() => {
            targetElement.scrollTo(currentPosition, 0);

            currentPosition -= positionCoord;

            if (currentPosition <= halfPosition) {
                resolve(intervalId);
            }
        }, movingSpeed); //좌로 이동 속도 조절
    });



    let startMove = async (scrollPosition) => {
        await moveToLeftFromCenter(scrollPosition).then(data => {
            clearInterval(data);
        });
        await moveToRightFromLeft().then(data => {
            clearInterval(data);
        });;
        await moveToCenterFromRight().then(data => {
            clearInterval(data);
        });;
    }


    /*==================== mobile START ====================*/
    if (isMobile()) {   //모바일 환경에서 작동
        //To-do 마우스 포인터 없애기

        let scrollPosition = init();

        startMove(scrollPosition);
    }

    /*===================== mobile END =====================*/
});













