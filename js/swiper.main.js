$(document).ready(function(){
	var swiper_mv = new Swiper('.mv .swiper-container', { 
			spaceBetween: 20, //
			slidesPerView : 1, // 한 화면에 보이는 r슬라이드의 개수
			loop: true, //연속
			autoplay: {
				delay: 2000, 
			}, 	
			pagination: {
				el: '.mv .swiper-pagination',
			},
		});
		
		// time_sale swiper
		var swiper_time_sale = new Swiper('.time_sale .swiper-container', { 
			slidesPerView : 4,
			slidesPerGroup :4,
			spaceBetween: 5,
			grid: {
				 rows:2,
					},	
			breakpoints: {
				1201: { //1200
					slidesPerView: 4,
					spaceBetween: 10,
					slidesPerGroup:4,
					loop: true,
					grid: {
						rows:1,
					},
				},
				771: { //760
					slidesPerView: 3,
					spaceBetween: 15,	
					slidesPerGroup:3,
					grid: {
					  rows: 1,
					},	
				},
				375: { //376부
					slidesPerView: 2,
					spaceBetween: 5,	
					slidesPerGroup:2,
					grid: {
					  rows: 2,
					},					
				},
			},
			pagination: {
				el: '.time_sale .swiper-pagination',
			 },
			 navigation: {
				nextEl: ".time_sale .swiper-button-next",
				prevEl: ".time_sale .swiper-button-prev",
			},
		});
		
		// md pick swiper
		var swiper = new Swiper('.md .swiper-container', { 
			slidesPerView : 1,
			spaceBetween: 10,
			loop: true, 
			//autoplay: {
				//delay: 2000, 
			//}, 
		   pagination: {
				el: '.md .swiper-pagination',
			},
				
		});
				
		// crew swiper
		var swiper_crew = new Swiper('.crew .swiper-container', { 
			slidesPerView : 2,
			slidesPerGroup :2,
			//centeredSlides :true,
			initialSlide:1,
			pagination: {
				el: '.crew .swiper-pagination',
			},
		   navigation: {
				nextEl: ".crew .swiper-button-next",
				prevEl: ".crew .swiper-button-prev",
			},	
			
			breakpoints: {
				1201: { //1200
					slidesPerView: 4,
					spaceBetween: 20,
					slidesPerGroup:4,
				},
				1025: { //1024
					slidesPerView: 4,
					spaceBetween: 15,	
					slidesPerGroup:4,
					
				},
				551: { //550
					slidesPerView: 3,
					spaceBetween: 10,	
					slidesPerGroup:2,
					loop: true,
				},
				376: { //375부
					slidesPerView: 2,
					spaceBetween: 10,	
					slidesPerGroup:2,
				},
			},
			
		});
		
		 // brand swiper
		var swiper_brand = new Swiper('.brand .swiper-container', { 
			slidesPerView : 2,
			slidesPerGroup :1,
			spaceBetween: 8,	
			grid: {
					  rows: 2,
					},	
			breakpoints: {
				1201: { 
					slidesPerView: 4,
					spaceBetween: 20,
					slidesPerGroup :4,
					loop: true,
					grid: {
						rows:1,
					},
				},
				771: { 
					slidesPerView: 3,
					spaceBetween: 15,	
					slidesPerGroup :3,
					grid: {
					  rows: 1,
					},			
				},
				375: { 
					slidesPerView: 2,
					spaceBetween: 5,	
					grid: {
					  rows: 2,
					},						
				},
			},
			pagination: {
				el: '.brand .swiper-pagination',
			 },
			 navigation: {
				nextEl: ".brand .swiper-button-next",
				prevEl: ".brand .swiper-button-prev",
			},
		});

		// folder_tv
		var swiper_folder_tv = new Swiper(".folder_tv .swiper-container", {
			  slidesPerView: 1,
			  slidesPerGroup :1,
			  spaceBetween: 10,
			  centeredSlides: true, //가운데 정렬
			  loop: true, 
			  autoplay: {
				delay: 2000, 
			 }, 	
			 // initialSlide: 1, 순서지정
			
			pagination: {
				el: '.folder_tv .swiper-pagination',
				//clickable: true,
			},
			breakpoints: {
				1201: { 
					slidesPerView: 3,
					spaceBetween: 20,
					autoplay: {
					delay: 2000, 
					}, 	
				},
				771: { 
					slidesPerView: 1.6,
					spaceBetween: 10,	
					slidesPerGroup:1,	
				},
				376: { 
					slidesPerView: 1.2,
					spaceBetween: 5,	
					autoplay: {
					delay: 2000, 
					}, 	
				},	
			},  
		});
		
		// footer
		var swiper_event = undefined;
		
		function initSwiper_event() {
			gray_footer = new Swiper(".footer .swiper-container", {
			  slidesPerView: 1,
				loop: true, 
			  	autoplay: {
				delay: 2000, 
				}, 
				direction: "vertical",
				loop: true,
			});
		};
		initSwiper_event();
		
		
});