// Writing the code....

setInterval(function viewBall() {
    const ballSpase = document.querySelector(".container"); // 눈 부모 불러오기
    const createBall = document.createElement("div"); // 눈 생성
    const speeddDelay = parseInt(Math.random() * 3 + 1); // 눈 속도
    const leftSize = parseInt(Math.random() * 100 + 1); // 눈 위치
    const ballSize = parseInt(Math.random() * 10 + 10); // 눈 사이즈 
    ballSpase.appendChild(createBall); // createBall 을 ballSpase 안에 넣어주기
    // 스타일 
    createBall.style.width = ballSize + "px";
    createBall.style.height = ballSize + "px";
    createBall.style.backgroundColor = "#fff";
    createBall.style.borderRadius = "50%";
    createBall.style.left = leftSize + "%" 
    createBall.style.transition = speeddDelay + "s";

    // 삭제
    setTimeout(() => {
        const btm = createBall.className = "btm"; // btm className 생성
        setTimeout(() => {
            if(createBall.className === btm) { // createBall 에 className 이 btm 인가?
                createBall.parentNode.removeChild(createBall); // createBall 삭제
            }
        }, 2800) // 2.8후에 실행
    }, 0) // 0초 후에 btm className 을 넣음.
}, 0) // 0초 마다 눈 생성 + 눈 스타일