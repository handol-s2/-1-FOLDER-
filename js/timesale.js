$(document).ready(function(){
	//지정 날짜 변환
	var sale_date = parseInt($("#sale_date").text());
	var sale_hours = parseInt($("#sale_hours").text());
	var sale_minutes = parseInt($("#sale_minutes").text());
	var sale_seconds = parseInt($("#sale_seconds").text());
	
	//최초 세팅시간 설정
	var settingTime = new Date();
	settingTime.setDate(settingTime.getDate() + sale_date);
	settingTime.setHours(settingTime.getHours() + sale_hours);
	settingTime.setMinutes(settingTime.getMinutes() + sale_minutes);
	settingTime.setSeconds(settingTime.getSeconds() + sale_seconds);
	
	var saleTimer = setInterval(function() {
		//시간 계산
		var _second = 1000;
		var _minute = _second * 60;
		var _hour = _minute * 60;
		var _day = _hour * 24;
		
		var today = new Date();
		var disDt = settingTime - today;

		var days = Math.floor(disDt / _day);
		var hours = Math.floor((disDt % _day) / _hour);
		var minutes = Math.floor((disDt % _hour) / _minute);
		var seconds = Math.floor((disDt % _minute) / _second);
		
		//결과값
		$("#sale_date").text(days);
		$("#sale_hours").text(hours);
		$("#sale_minutes").text(minutes);
		$("#sale_seconds").text(seconds);
		
	}, 1000);	
	
});


