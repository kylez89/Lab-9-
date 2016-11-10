$(document).ready(function (){

	$("li").mouseenter(function (){

	$("li").fadeTo("slow",0.25); 

	}); 

	$("li").mouseleave(function (){
		$("li").fadeTo("slow", 1);
		
	});
	
	$("li").click(function (){
		$(this).css("background", "red")
		$(this).text("CLICKED!");


	});

});