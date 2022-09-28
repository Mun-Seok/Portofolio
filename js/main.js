let menuIcon = document.getElementById('menuIcon');
let menuList = document.getElementById('menuList');

menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('active');
    menuIcon.classList.toggle('close');
});

function ready() {
    if (!confirm('본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 제작되었습니다. 홈페이지 일부 내용과 기타 이미지 등은 출처가 따로 있음을 밝힙니다. ')) {
        window.close();
    } else {
        alert('신입 프론트 개발자 최문석의 포트폴리오를 보러와주셔서 감사합니다.');
    }
}

// document.addEventListener('DOMContentLoaded', ready);
// 포트폴리오에 추가할 멘트
/* 
본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 제작되었습니다. 홈페이지 일부 내용과 기타 이미지 등은 출처가 따로 있음을 밝힙니다.

alert! 확인 누르면 페이지 계속 나오고 취소 누르면 페이지 종료하게끔 하셔도 좋고
팝업 메세지 박스를 표시해줘도 좋음
어떻게든 한번 명시

예시 코드
function ready(){
    if(!confirm("본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 제작되었습니다. 홈페이지 일부 내용과 기타 이미지 등은 출처가 따로 있음을 밝힙니다. ")){
        window.close()
    }else{
        alert("신입 프론트 개발자 ###의 포트폴리오를 보러와주셔서 감사합니다.")
    }
}
*/
