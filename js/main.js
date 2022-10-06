/* 변수 선언 및 초기화 */
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); // 모바일 PC 구분
let loadingSpinner = document.getElementById('loadingSpinner'); //로딩 스피너
let menuIcon = document.getElementById('menuIcon'); // 메뉴 아이콘
let menuList = document.getElementById('menuList'); // 메뉴 목록

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
    let menuName = event.target.id; // 각 메뉴의 아이디
    if (menuName == 'introduce') {
        window.scroll(0, 0);
    } else if (menuName == 'skill') {
        window.scroll(0, 650);
    } else if (menuName == 'project') {
        window.scroll(0, 1530);
    } else if (menuName == 'contact') {
        window.scroll(0, 2500);
    }
    // 메뉴 닫기
    toggleMenu();
};

// projectSlide 페이지네이션
const projectPagination = () => {
    let slide = document.querySelector('.projectSlide'); // 화면에 보여지는 slide
    let slideBox = document.querySelectorAll('.projectSlideBox'); // slide
    let slideWidth = slide.clientWidth; // slide의 width (border,margin 제외)
    let maxSlide = slideBox.length; // slide 갯수
    let currentSlide = 1; // 현재 보여지는 slide
    let pagination = document.querySelector('.projectPager'); //슬라이드 페이저 버튼
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
};

// project의 아이콘 스크롤 내릴때 생성
const showSkill = (value) => {
    let skills = document.querySelectorAll('.skillDescription'); // 각 skill 들
    // console.log(value);
    if (isMobile) {
        for (let i = 0; i < skills.length; i++) {
            if (value > 400 + 150 * i) {
                skills[i].style.visibility = 'visible';
            }
        }
    } else {
        for (let i = 0; i < skills.length; i++) {
            if (value > 400 + 100 * i) {
                skills[i].style.visibility = 'visible';
            }
        }
    }
};
// 포트폴리오 alert창
const ready = () => {
    if (!confirm('본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 제작되었습니다. 홈페이지 일부 내용과 기타 이미지 등은 출처가 따로 있음을 밝힙니다. ')) {
        window.close();
    } else {
        alert('신입 프론트 개발자 최문석의 포트폴리오를 보러와주셔서 감사합니다.');
    }
};

/* 이벤트 추가 */
// 초기 HTML불러오고 분석했을때 alert창 띄우기, slide와 pager 버튼 생성
document.addEventListener('DOMContentLoaded', () => {
    ready();
    projectPagination();
});

// 스크롤시 숨겨둔 skill 아이콘 보이게 해줌
window.addEventListener('scroll', () => {
    let value = window.scrollY; // 스크롤 시 해당 Y값
    showSkill(value);
});
