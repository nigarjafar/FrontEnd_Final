//******************SLIDER******************
setTimeout(function(){ $("#slider").animate({"opacity": "1"}) ; }, 500);
//*****************LOGOS*******************
i=1;
var k=1;
function clickButton(){
		if(k==1){
			$("#about .button-group button:first-child").click();
			k=0;
			
		}	
	}

$(window).scroll(function() {
  var wScroll=$(window).scrollTop()
  var wHeight=$(window).height()



if ( wScroll > $("#logos").offset().top-wHeight/2-100 ){

	var logos= setInterval(function(){
	 $("#logos")
	 .find( "img:nth-child("+i+")" )
	 .animate({"top": "0"} ,250) 
	 i++;
	 //repeat 5 times
	 if(i==6){ clearInterval( logos) }
	}
	, 300);
}





//*********************ABOUT********************0507699367

if ( wScroll > $("#about").offset().top-wHeight/2 ){
/*$(".firstTab").show()
$(".firstTab").find(".text-div").animate({"right":"0"},350)
$(".firstTab").find(".img-div").animate({"left":"0"},350)

$(".secondTab").hide()
$(".thirdTab").hide()
$(".thirdTab .subtitle").fadeOut()*/

	
clickButton();
}//if


$("#about .button-group button:first-child")
.on('click', function(){
	//Add button active class/ remove class another buttons
	$(".button-group button").removeClass("active-button")
	$(".button-group button:first-child").addClass("active-button")

	$(".firstTab").show()
	$(".firstTab .text-div").animate({"right":"0"},350)
	$(".firstTab .img-div").animate({"left":"0"},350)

	//Hide other tabs 
	$(".secondTab").hide()
	$(".secondTab .img-div").css("right","-800px")
	$(".secondTab .text-div").css("left","-800px")

	$(".thirdTab").hide()
	$(".thirdTab .row").css("top","-800px")
	$(".thirdTab .subtitle").fadeOut()

})

$("#about .button-group button:nth-child(2)")
.on('click', function(){
	$(".button-group button").removeClass("active-button")
	$(".button-group button:nth-child(2)").addClass("active-button")

	$(".secondTab").show()
	$(".secondTab .img-div").animate({"right":"0"},350)
	$(".secondTab .text-div").animate({"left":"0"},350)

	//Hide other tabs
	$(".firstTab").hide()
	$(".firstTab .text-div").css("right","-800px")
	$(".firstTab .img-div").css("left","-800px")

	$(".thirdTab").hide()
	$(".thirdTab .row").css("top","-800px")
	$(".thirdTab .subtitle").fadeOut()
})

$("#about .button-group button:nth-child(3)")
.on('click', function(){
	$(".button-group button").removeClass("active-button")
	$(".button-group button:nth-child(3)").addClass("active-button")

	$(".thirdTab").show()
	$(".thirdTab .subtitle").fadeIn()
	$(".thirdTab .row").animate({top:"0"})

	//Hide other tabs
	$(".firstTab").hide()
	$(".firstTab .text-div").css("right","-800px")
	$(".firstTab .img-div").css("left","-800px")

	$(".secondTab").hide()
	$(".secondTab .img-div").css("right","-800px")
	$(".secondTab .text-div").css("left","-800px")
})



}); //Scroll FUnction

//******************************Features*********************
$("#features #ftrs2, #features #ftrs3").hide(); //hide image2 /image3



$("#features ul li").on("click", function(){
	var className=$(this).attr("class")
	$("#features .img-div img").hide();
	$("#"+className).show()

	$("#features li").removeClass("active")
	$(this).addClass("active")
	
})

//*************************TEAM**************************


//hover

