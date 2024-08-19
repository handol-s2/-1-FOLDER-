//이용약관 전체 선택 
$(document).ready(function(){
	$(".agree_all input").click(function(){
		var chk = $(this).is(":checked");
		if(chk){
			$(this).parent().siblings().find("input").prop('checked',true);
		}else{
			$(this).parent().siblings().find("input").prop('checked',false);
		}	
	});
	
	initDesktop();//호출
	displayDesktop();
	
	
	//자세히보기 버튼
	function initDesktop(){
		$(".check_under").hide();	
	}

	function displayDesktop(){
		$(".read_more").off() .on("click" , function(e){
			e.preventDefault();
			$(this).parent().children ("div .check_under") .fadeToggle(); 
		});
	} //선택한 요소에 fadeIn() 메소드와 fadeOut() 메소드를 번갈아가며 적용함.
});


	
	




    
