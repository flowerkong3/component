$(document).ready(function(){
	$('#btnKakao').on('click',function(){
		snsKakao();
	})

	function snsKakao(){
		
		// 카카오
			// e.preventDefault();
			var thisUrl = document.URL;
			var snsTitle = "아방갸륵";
			 
					// 사용할 앱의 JavaScript 키 설정
					Kakao.init('74878c8a1099ba8a54273a88c61d0628');
					
					// 카카오링크 버튼 생성
					Kakao.Share.createDefaultButton({
							container: '#btnKakao', // HTML에서 작성한 ID값
							objectType: 'feed',
							content: {
							title: "아방갸륵", // 보여질 제목
							description: "갸륵이는 고양이", // 보여질 설명
							imageUrl: thisUrl, // 콘텐츠 URL
							link: {
									mobileWebUrl: thisUrl,
									webUrl: thisUrl
							}
							}
					});
	}

		$(".name-btn").click(function(){
				updateNameInfo();
			
				
		});
		// $("#fruitText").text("입력값에 대한 정보가 없습니다.");


		$(".btn-refresh").click(function(){
			// 입력값 초기화 및 기본 이미지와 텍스트로 복원
			
			$(".name-input").val("");
			$('.name-section').show();
			$('.result-section').hide();
			$('.name-btn').removeClass('color');''
			$('body').css('overflow','hidden');
			
		});


		$(".btn-download").click(function(){
			// 이미지 다운로드
			var imgSrc = $(".result-img").attr("src");
			var imgLink = document.createElement('a');
			imgLink.href = imgSrc;  //링크를 클릭하면 이미지속성 연결
			imgLink.download = 'result_image.jpg'; //이미지 저장이름
			document.body.appendChild(imgLink);
			imgLink.click();
			document.body.removeChild(imgLink);
		});


		// SNS 공유
		// function fn_sendFB(sns) {
		// 	var thisUrl = document.URL;
		// 	var snsTitle = "2021 웹진 [봄]";
		// 	if( sns == 'facebook' ) {
		// 			var url = "http://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(thisUrl);
		// 			window.open(url, "", "width=486, height=286");
		// 	}
		// 	else if( sns == 'twitter' ) {
		// 			var url = "http://twitter.com/share?url="+encodeURIComponent(thisUrl)+"&text="+encodeURIComponent(snsTitle);
		// 			window.open(url, "tweetPop", "width=486, height=286,scrollbars=yes");
		// 	}
		// 	else if( sns == 'band' ) {
		// 			var url = "http://www.band.us/plugin/share?body="+encodeURIComponent(snsTitle)+"&route="+encodeURIComponent(thisUrl);
		// 			window.open(url, "shareBand", "width=400, height=500, resizable=yes");
		// 	} 
		// }


				 
			





		// 초기 실행
		updateNameInfo();
		snsKakao()

	








});

// var appleText = "이것은" +'
// '+"사과입니다";

function updateNameInfo() {
		var userInput = $(".name-input").val().toLowerCase();
		var placeholderText = "홍길동";
		$(".name-input").attr("placeholder", placeholderText).addClass("shake-animation");

	//글자수세기
		$('.name-input').keyup(function (e) {
			let nameInput = $(this).val();
				// 글자수 1이상이면 버튼색 변경
				if (nameInput.length >= 1) {
					$('.name-btn').addClass('color');
					// $('.name-section .name-input').addClass('color');
				} else {
					$('.name-btn').removeClass('color')
				}
			});
		$('.name-btn').focus(function(){
			$('.name-input').addClass('color');
			// $('.name-section .name-input').addClass('color');
		})


		if(userInput === "임영하") {
				$(".result-img").attr("src", "images/img3.png");
				$("#fruitText").text("츄르 한입만 줄래?");
				
				// 공통
				$('.result-section').show();
				$('.name-section').hide();
				$('.result-name').text("TO. 영하");
				$('.result-txt').text("임여사님, 꽃처럼 환하고 이쁜 엄마! 올한해도 고생많았어요~내년에는 이사도 가고 좋은일만 가득할거에요^^ 항상 사랑하고 감사합니다. 건강하세요 ❤");
				$('body').css('overflow','auto');
		} 
		
		else if(userInput === "한상연") {
				$(".result-img").attr("src", "images/img1.png");
				$("#fruitText").text("어이 뭘 쳐다봐");
				// 공통
				$('.result-section').show();
				$('.name-section').hide();
				$('.result-name').text("TO. 상연");
				$('.result-txt').text("브로콜리 한상연! 내가 좋아하는 가수는 브로콜리 너마저🥦 내가 좋아하는 사람은 브로콜리 한상연🥦 브로콜리야 아프지 말고 쑥쑥 자라라❤");
				$('body').css('overflow','auto');
		} 

		else if(userInput === "문슬기") {
				$(".result-img").attr("src", "images/img2.png");
				$("#fruitText").text("어이 뭘 쳐다봐");
				// 공통
				$('.result-section').show();
				$('.name-section').hide();
				$('.result-name').text("TO. 슬기");
				$('.result-txt').text("슬기야 안뇽😀 슬기는 참 맑고 밝은 내동생이야 크크, 지금처럼 환한웃음 잃지말아줘 ><슬기는 웃는게 참 이쁘다😁 그럼 내년에도 우리 사이좋게 지내자~알라뷰❤ 우웩");
				$('body').css('overflow','auto');
		} 
		else if(userInput.length === 1) {
			// $('.name-btn').css('background','red')
		} 
		else {
				// 다른 경우에는 기본 이미지와 텍스트 설정 및 안내 메시지 표시
				
				// $("#fruitText").text("다시입력해주세요" + placeholderText);
				// $("#fruitText").text("다시 입력해주세요");
				$(".name-input").attr("placeholder", placeholderText).addClass("shake-animation");

			
				

				// 애니메이션 후에 클래스 제거
				setTimeout(function(){
						$(".name-input").removeClass("shake-animation");
				}, 500);
		}
}



// snow
function createSnowflake() {
const snowflake = $('<div class="snowflake"></div>');
const size = Math.random() * 4 + 2 + 'px';
snowflake.css({
	width: size,
	height: size,
	left: Math.random() * $(window).width() + 'px'
});
$('.snow-wrap').append(snowflake);
snowflake.animate(
	{ top: '100vh' },
	{
		duration: 5000,
		easing: 'linear',
		complete: function() {
			$(this).remove();
		}
	}
);
}

// setInterval(createSnowflake, 200); // 0.2초마다 눈송이 생성

function startSnowAnimation() {
animationInterval = setInterval(createSnowflake, 200);
}

function stopSnowAnimation() {
clearInterval(animationInterval);
$('.snowflake').stop(true, true).remove();
}

$('#stopButton').on('click', stopSnowAnimation);

// startSnowAnimation(); // 초기에 애니메이션 시작


let scroll = 0;
window.addEventListener('scroll',function(){
	scroll = window.scrollY;
	console.log(scroll);
	if(scroll > 0){
		$('.result-section .result-img-wrap').addClass('active');
		$('.container--full').addClass('active');
	}else {
		$('.result-section .result-img-wrap').removeClass('active');
		$('.container--full').removeClass('active');
	}
})
