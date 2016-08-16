//******************SLIDER******************

setTimeout(function(){ $("#slider").animate({"opacity": "1"}) ; }, 500);
//*****************LOGOS*******************

i=1;
var logos= setInterval(function(){
 $("#logos")
 .find( "img:nth-child("+i+")" )
 .animate({"top": "0"} ,250) 
 i++;
 //repeat 5 times
 if(i==6){ clearInterval( logos) }
}
, 300);


//*********************ABOUT********************
$(".firstTab").show()
$(".secondTab").hide()
$(".thirdTab").hide()

$("#about .button-group button:first-child")
.on('click', function(){
	$(".button-group button").removeClass("active-button")
	$(".button-group button:first-child").addClass("active-button")

	$(".firstTab").show()
	$(".secondTab").hide()
	$(".thirdTab").hide()

})
$("#about .button-group button:nth-child(2)")
.on('click', function(){
	$(".button-group button").removeClass("active-button")
	$(".button-group button:nth-child(2)").addClass("active-button")

	$(".firstTab").hide()
	$(".secondTab").show()
	$(".thirdTab").hide()
})
$("#about .button-group button:nth-child(3)")
.on('click', function(){
	$(".button-group button").removeClass("active-button")
	$(".button-group button:nth-child(3)").addClass("active-button")

	$(".firstTab").hide()
	$(".secondTab").hide()
	$(".thirdTab").show()
})

//******************************Features*********************
$("#features #ftrs2, #features #ftrs3").hide(); //hide image2 /image3



$("#features ul li").on("click", function(){
	var className=$(this).attr("class")
	$("#features .img-div img").hide();
	$("#"+className).show()

	$("#features li").removeClass("active")
	$(this).addClass("active")
	
})
