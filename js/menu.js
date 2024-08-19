$(document).ready(function(){
	const checkPoint=770; //기준이 되는 수 설정
	var navWidth; //모바일-메뉴 너비 (변수) 선언 (컨테이너 너비 가져오기)
	
	//해상도(770)를 기준으로 Desktop와 모바일을 나눔
	function menuControl(){
		if( $(window).width() > checkPoint){ //checkPoint보다 클 때 호출 -초과일 때 
			initDesktop(); 
			displayDesktop();
		}else{ //mobile용 - 이하일 때 
			initMobile();
			displayMobile();
			initpop_up();	
		}	
	}//호출
	
	menuControl();
		
	$(window).resize(function(){
		menuControl(); //메뉴들어가기
	});
	
	//Desktop용 초기화 선언
	function initDesktop(){
		$(".main_menu_warp").show();
		$(".sub_bg, .sub_menu_warp ").hide();
		$(".sub_list").css("height" , 283 );
		$(".container").css("left",0);
		$("body").css("overflow-y", "auto"); 
	}
	
	//Desktop용 부르기
	function displayDesktop(){
		$(".main_menu >.depth1").on("mouseenter" , function(e){
			e.preventDefault();
			$(this).find(".sub_bg, .sub_menu_warp").stop().slideDown(200);
			$(".sub_bg").show();
			
		}).on("mouseleave", function(e){
				e.preventDefault();
			$(".sub_bg, .sub_menu_warp").hide();
			//$(".sub_bg, .sub_menu_warp").stop().slideUp(100);
		});
	}
	

	//mobile 초기화 선언 함수
	function initMobile(){
		$(".main_menu_warp").hide();
		$(".sub_bg ").hide();
		$(".mobile_btn, .depth_menu").removeClass("on"); //버튼 
		$(".container").css("left",0); 
		$("body").css("overflow-y" , "auto");
		
		//navWidth = Math.min( 375,$(window).width() ); 375px와 브라우저의 너비 중 둘 중 하나 작은 수 width에 넣기
		$(".depth_menu").css("height","auto");
	}
	
	//mobile_index에서 가려줌
	$(".mobile_menu_warp a.m").click(function(e){ 
		e.preventDefault();
	   $(this).parent().siblings().find(".depth_menu").removeClass("on");
	   $(this).next().addBack().toggleClass("on").end().find(".m, ul").removeClass("on").end().parent().siblings().find(".m, ul,").removeClass("on");              
		return false; //바깥으로 빠져나간다.
	});
	

	//mobile 메뉴 부르기
	function displayMobile(){
		$(".mobile_btn").off().on("click" , function(e){
			e.preventDefault();
		
			$(this).toggleClass("on"); //햄버거 메뉴<->닫기버튼
			$(".mobile_nav").toggleClass("on");
			$(".sub_bg").stop().fadeToggle(); //배경도 같이
			
			if($(this).hasClass("on")){ //햄버거 메뉴 클릭시
				$(".container").css("left",-navWidth); //navWidth만큼 돌아오기
				$("body").css("overflow-y" , "Hidden");  //스크롤 x

			}else{//햄버거 메뉴 닫기 버튼시
				$(".container").css("left",0); 
				$("body").css("overflow-y" , "auto"); 
				initMobile();
			}
		});
		
		//배경 클릭시
		$(".sub_bg, .gnb .logo").on("click",function(e){
			e.preventDefault();
		//	$(this).stop().fadeOut();
			$(".mobile_nav").removeClass("on");
			initMobile();
		});
	}
	
	//pop_up
	function initpop_up(){
		$(".pop_up").hide(); 
	} 
		$(".button").click(function(e){
		e.preventDefault
		$(".pop_up").hide();
	});
});



