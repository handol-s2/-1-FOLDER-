$(document).ready(function(){
	$(".right_box span").click(function(e){
		//e.stopPropagation();
		e.preventDefault();
		$(this).eq(0).find("img").attr("src","img/bag_2.jpg");
	});
});