// Nav Color Change
// 스크롤에 따라 메뉴에 클래스 붙이기
$(window).scroll(function () {
	var navItem = $('.nav-color-change li') //li 담기
	var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정

	if (height > 0) {
		$('#menu1').addClass('active');
	} else if (height == 0) {

	};
	if (height > $('#section2').offset().top) {
		$('#menu2').addClass('active');
		navItem.not("#menu2").removeClass("active"); //menu2를 제외한 나머지 엘리먼트에는 클래스삭제
		navItem.not("#menu2").removeClass("active"); //menu2를 제외한 나머지 엘리먼트에는 클래스삭제
	} else {
		$('#menu2').removeClass('active');
	};

	if (height > $('#section3').offset().top - 50) {
		$('#menu3').addClass('active');
		navItem.not("#menu3").removeClass("active");
	} else {
		$('#menu3').removeClass('active');
	};
	if (height > $('#section4').offset().top - 50) {
		$('#menu4').addClass('active');
		navItem.not("#menu4").removeClass("active");
	} else {
		$('#menu4').removeClass('active');
	};
	if (height > $('#section5').offset().top - 300) {
		$('#menu5').addClass('active');
		navItem.not("#menu5").removeClass("active");
	} else {
		$('#menu5').removeClass('active');
	};


});



// nav 클릭 -> 페이지내 해당영역으로 이동
function scrollMove(seq) {	// seq 값을 인자로 가지는 scrollMove 이름의 함수
	var offset = $("#section" + seq).offset();	// 이동하고자하는 태그의 좌표를 찍어주는 offset변수 생성
	

	$(window).resize(function(){ 
		if (window.innerWidth > 480) {  // 디바이스 크기가 480이상이라면
			$('html, body').animate({
				scrollTop: offset.top + 10					
			}, 0); //0.4초 느리게
		} else {
			$('html, body').animate({  // 디바이스 크기가 480이하라면
				scrollTop: offset.top - 10				
			}, 0); //0.4초 느리게
		
		}
		
		}).resize(); 
}
