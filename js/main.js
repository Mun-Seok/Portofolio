/* 변수 선언 및 초기화 */
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let loadingSpinner = document.getElementById('loadingSpinner');
let menuIcon = document.getElementById('menuIcon');
let menuList = document.getElementById('menuList');

/* 함수 정의 */
// 로딩화면
const startLoading = () => {
    loadingSpinner.style.display = 'block';
};
// 로딩화면 닫기
const afterLoading = () => {
    loadingSpinner.style.display = 'none';
};

// 모바일 및 테블릿 메뉴
const toggleMenu = () => {
    if (isMobile) {
        menuList.classList.toggle('active');
        menuIcon.classList.toggle('close');
    }
};

// 메뉴 이동
const moveToMenu = (event) => {
    let menuName = event.target.id;
    if (menuName == 'introduce') {
        window.scroll(0, 0);
    } else if (menuName == 'skill') {
        window.scroll(0, 650);
    } else if (menuName == 'project') {
        window.scroll(0, 1530);
    } else if (menuName == 'contact') {
        window.scroll(0, 2500);
    }
    toggleMenu();
};

// projectSlide 페이지네이션
const projectPagination = () => {
    let slide = document.querySelector('.projectSlide');
    let slideBox = document.querySelectorAll('.projectSlideBox');
    let slideWidth = slide.clientWidth;
    let maxSlide = slideBox.length;
    let currentSlide = 1;
    let pagination = document.querySelector('.projectPager');
    //
    for (let i = 0; i < maxSlide; i++) {
        if (i === 0) pagination.innerHTML += `<li class="active"></li>`;
        else pagination.innerHTML += `<li></li>`;
    }
    let paginationItems = document.querySelectorAll('.projectPager > li');
    // 기기에 따른 slideWidth 변경
    window.addEventListener('resize', () => {
        slideWidth = slide.clientWidth;
    });
    // 각 버튼 클릭 시 해당 슬라이드로 이동하기
    for (let i = 0; i < maxSlide; i++) {
        paginationItems[i].addEventListener('click', () => {
            currentSlide = i + 1;
            let offset = slideWidth * (currentSlide - 1);
            slideBox.forEach((i) => {
                i.setAttribute('style', `left: ${-offset}px`);
            });
            paginationItems.forEach((i) => i.classList.remove('active'));
            paginationItems[currentSlide - 1].classList.add('active');
        });
    }
};

// project의 아이콘 스크롤 내릴때 생성
const showSkillIcon = () => {};

// 포트폴리오 alert창
const ready = () => {
    if (!confirm('본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 제작되었습니다. 홈페이지 일부 내용과 기타 이미지 등은 출처가 따로 있음을 밝힙니다. ')) {
        window.close();
    } else {
        alert('신입 프론트 개발자 최문석의 포트폴리오를 보러와주셔서 감사합니다.');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    ready();
    projectPagination();
});

window.addEventListener('scroll', () => {
    //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
    let value = window.scrollY;
    console.log(value);
    if (value > 300) {
        document.getElementById('skillHTML').style.visibility = 'visible';
    }
    if (value > 400) {
        document.getElementById('skillCss').style.visibility = 'visible';
    }
    if (value > 550) {
        document.getElementById('skillJS').style.visibility = 'visible';
    }
    if (value > 800) {
        document.getElementById('skillReact').style.visibility = 'visible';
    }
});
