$(document).ready(function(){

var swiper_bottom = new Swiper('.bottom_product .swiper-container', { 
			spaceBetween: 5, //
			slidesPerView :2.5, // 한 화면에 보이는 r슬라이드의 개수
			loop: true, //연속
			autoplay: {
				delay: 3000, 
			}, 	
			pagination: {
				el: '.bottom_product .swiper-pagination',
			},
				breakpoints: {
				1201: { //1200
					slidesPerView: 4,
					slidesPerGroup:1,
					loop: true,
				},
				771: { //760
					slidesPerView: 4,
					slidesPerGroup:1,
				},
				375: { //376부
					slidesPerView: 2.5,
					spaceBetween: 5,	
					slidesPerGroup:1,					
				},
			},
		});
		


      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 5,
      //  navigation: {
       //   nextEl: ".swiper-button-next",
       //   prevEl: ".swiper-button-prev",
     //   },
        thumbs: {
          swiper: swiper,
        },
      });
	  
})  

function count(type)  {
  // 결과를 표시할 element
  const resultElement = document.getElementById('result');
  
  // 현재 화면에 표시된 값
  let number = resultElement.innerText;
  
  // 더하기/빼기
  if(type === 'plus') {
    number = parseInt(number) + 1;
  }else if(type === 'minus')  {
    number = parseInt(number) - 1;
  }
  
  // 결과 출력
  resultElement.innerText = number;
}
	  
