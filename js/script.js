$(function(){
    $('.menu>ul>li>a').click(function(){
        $('.menu>ul>li>a').removeClass('active'); // 모든 메뉴에서 active 제거
        $(this).addClass('active'); // 클릭한 항목만 active 추가
    });

    $('.button_up').click(function(){
        $('html, body').animate({scrollTop:0}, 600);
    });
    
})


// sub_Web.html 용 이미지 전체 보기
function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var fullImage = document.getElementById("fullImage");

    fullImage.src = imgElement.src; // 클릭한 이미지의 src를 모달에 적용
    modal.style.display = "block"; // 모달 표시
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none"; // 모달 닫기
}
