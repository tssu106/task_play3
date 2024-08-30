document.addEventListener("DOMContentLoaded", function () {
    let targetElement = document.querySelector('section');
    let movingSpeed = 30;   //숫자를 내리면 빨라진다.
    let positionCoord = 2;  //숫자를 내리면 더 부드럽게 움직이는것 처럼 보임.
    let halfPosition = (targetElement.scrollWidth - targetElement.clientWidth) / 2;
    let scrollLeft = targetElement.scrollWidth - targetElement.offsetWidth;
    let moveLimit = 560;    //좌우 이동 제한

    let isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    let init = () => {
        targetElement.scrollTo(halfPosition, 0);    //x, y 좌표

        return targetElement.scrollLeft;
    }

    //클릭했을때 clearInterval 실행으로 이동 멈춤
    let stopMoveIfClick = (intervalId) => {
        document.addEventListener('click', () => clearInterval(intervalId))
    }

    let moveToLeftFromCenter = (scrollPosition) => new Promise(resolve => {
        let position = scrollPosition;

        console.log('moveToLeftFromCenter position', position);

        let intervalId = setInterval(() => {
            targetElement.scrollTo(position, 0);

            position -= positionCoord;

            if (position <= moveLimit) {
                resolve(intervalId);
            }
        }, movingSpeed);

        stopMoveIfClick(intervalId);
    });

    let moveToRightFromLeft = () => new Promise(resolve => {
        let currentPosition = targetElement.scrollLeft;
        let intervalId = setInterval(() => {
            targetElement.scrollTo(currentPosition, 0);

            currentPosition += positionCoord;

            if (currentPosition >= (scrollLeft - moveLimit)) {
                resolve(intervalId);
            }
        }, movingSpeed);

        stopMoveIfClick(intervalId);
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

        stopMoveIfClick(intervalId);
    });



    let startMove = async (scrollPosition) => {
        await moveToLeftFromCenter(scrollPosition).then(data => {
            clearInterval(data);
        });
        await moveToRightFromLeft().then(data => {
            clearInterval(data);
        });
        await moveToCenterFromRight().then(data => {
            clearInterval(data);
        });
    }


    /*==================== mobile START ====================*/
    if (isMobile()) {   //모바일 환경에서 작동
        //To-do 마우스 포인터 없애기

        let scrollPosition = init();

        startMove(scrollPosition);
    }

    /*===================== mobile END =====================*/
});













