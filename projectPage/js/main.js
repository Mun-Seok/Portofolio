let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); // 모바일 PC 구분

// projectSlide 페이지네이션
const projectPagination = () => {
    let slide = document.querySelector('.projectSlide'); // 화면에 보여지는 slide
    let slideBox = document.querySelectorAll('.projectSlideBox'); // slide
    let slideWidth = slide.clientWidth; // slide의 width (border,margin 제외)
    let maxSlide = slideBox.length; // slide 갯수
    let currentSlide = 1; // 현재 보여지는 slide
    let pagination = document.querySelector('.projectPager'); //슬라이드 페이저 버튼
    if (isMobile) {
        // 페이지네이션 (pagination)
        for (let i = 0; i < maxSlide; i++) {
            if (i === 0) pagination.innerHTML += `<li class="active"></li>`;
            else pagination.innerHTML += `<li></li>`;
        }
        let paginationItems = document.querySelectorAll('.projectPager > li');
        // 기기에 따른 slideWidth 변경
        window.addEventListener('resize', () => {
            slideWidth = slide.clientWidth;
        });
        // 각 페이저 버튼 클릭 시 해당 슬라이드로 이동하기
        for (let i = 0; i < maxSlide; i++) {
            paginationItems[i].addEventListener('click', () => {
                currentSlide = i + 1;
                let offset = slideWidth * (currentSlide - 1); // 페이저 누른  slide와 현재 slide 편차
                slideBox.forEach((i) => {
                    i.setAttribute('style', `left: ${-offset}px`);
                });
                paginationItems.forEach((i) => i.classList.remove('active'));
                paginationItems[currentSlide - 1].classList.add('active');
            });
        }
    }
};
document.addEventListener('DOMContentLoaded', () => {
    projectPagination();
});
