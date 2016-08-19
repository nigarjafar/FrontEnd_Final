//******************SLIDER******************
setTimeout(function(){ $("#slider").animate({"opacity": "1"}) ; }, 500);
//*****************LOGOS*******************


//********************Scroll function*******************//
var i=1;
var k=1;
$(window).scroll(function() {
  var wScroll=$(window).scrollTop()
  var wHeight=$(window).height()


//****************Logos**********************
if ( wScroll > $("#logos").offset().top-wHeight/2-100 ){

	var logos= setInterval(function(){
	 $("#logos")
	 .find( "img:nth-child("+i+")" )
	 .animate({"top": "0"} ,250) 
	 i++;
	 //repeat 5 times
	 
	}
    
	, 300);
    if(i>=6){ clearInterval( logos) }
}
    //*****************ABout**************//
   if ( wScroll > $("#about").offset().top-wHeight/2 ){
    $("#about .firstTab").show() 
    $("#about .firstTab .animateLeft").css("animation-play-state" , "running");
    $("#about .firstTab .animateRight").css("animation-play-state" , "running");
    $("#about .secondTab").hide()
    $("#about .thirdTab").hide()
        if ( wScroll > $("#about .newAgeTech").offset().top-wHeight/2 ){
             $("#about .newAgeTech .animateLeft").css("animation-play-state" , "running");
            $("#about .newAgeTech .animateRight").css("animation-play-state" , "running");
        }
         if ( wScroll > $("#about .helmet").offset().top-wHeight/2 ){
             $("#about .helmet .animateLeft").css("animation-play-state" , "running");
            $("#about .helmet .animateRight").css("animation-play-state" , "running");
        }
    
   }
    
    //****************Features****************//
    if ( wScroll > $("#features .animateRight").offset().top-wHeight/2+10 ){
    $("#features .animateRight").css("animation-play-state" , "running");
    }
    
     if ( wScroll > $("#features .animateLeft").offset().top-wHeight/2 ){
    $("#features .animateLeft").css("animation-play-state" , "running");
    }
    
    //*******************Uptades************************
    if ( wScroll > $("#uptades .animateRight").offset().top-wHeight/2){
    $("#uptades .animateRight").css("animation-play-state" , "running");
    }
    
     if ( wScroll > $("#uptades .animateLeft").offset().top-wHeight/2-20 ){
    $("#uptades .animateLeft").css("animation-play-state" , "running");
    }
    
    //*****************Prices***********************
    if ( wScroll > $("#prices").offset().top-wHeight/2+20 ){
    $("#prices .animateBottom").css("animation-play-state" , "running");
    }
    
    //****************Awards*****************
    if ( wScroll > $("#awards").offset().top-wHeight/2+20 ){
    $("#awards .animateTop").css("animation-play-state" , "running");
    }
    
    //***********************Feedback******************************
     if ( wScroll > $("#feedback").offset().top-wHeight/2 ){
    $("#feedback #reviews").css("animation-play-state" , "running");
    }
    if ( wScroll > $("#feedback").offset().top-wHeight/2+180 ){
    $("#feedback #clients").css("animation-play-state" , "running");
    }
    
    //**********************Team******************************
    if ( wScroll > $("#teamMembers").offset().top-wHeight/2 ){
    $("#teamMembers .team-member:first-child").css("animation-play-state" , "running"); 
        setTimeout( function(){ 
    $("#teamMembers .team-member:nth-child(2)").css("animation-play-state" , "running")} ,300)
        setTimeout( function(){ 
    $("#teamMembers .team-member:nth-child(3)").css("animation-play-state" , "running")} ,600)
        setTimeout( function(){ 
    $("#teamMembers .team-member:nth-child(4)").css("animation-play-state" , "running")} ,900)
    }
})

//**********************Buttons***********************

//******************ABOUT********************
   
$("#about .button-group button:first-child").on('click', function(){
    $("#about .button-group button").removeClass("active-button");
    $(this).addClass("active-button");
    $("#about .firstTab").show() 
    $("#about .firstTab .animateLeft").css("animation-play-state" , "running");
    $("#about .firstTab .animateRight").css("animation-play-state" , "running");
    $("#about .secondTab").hide()
    $("#about .thirdTab").hide()
    
})
$("#about .button-group button:nth-child(2)").on('click', function(){
    $("#about .button-group button").removeClass("active-button");
    $(this).addClass("active-button");
    $("#about .secondTab").show()
    $("#about .secondTab .animateLeft").css("animation-play-state" , "running")
    $("#about .secondTab .animateRight").css("animation-play-state" , "running")
    $("#about .firstTab").hide()
    $("#about .thirdTab").hide()
    
})

$("#about .button-group button:nth-child(3)").on('click', function(){
    $("#about .button-group button").removeClass("active-button");
    $(this).addClass("active-button");
    $("#about .thirdTab").show()
    $("#about .thirdTab .animateZoom").css("animation-play-state" , "running")
    $("#about .thirdTab .animateTop").css("animation-play-state" , "running")
    $("#about .firstTab").hide()
    $("#about .secondTab").hide()
    
})


//******************************Features*******************
$("#features .ftrs2, #features .feature3").hide(); //hide image2 /image3



$("#features ul li").on("click", function(){
    $("#features li").removeClass("active")
    $("#features .img-div img").hide()
    
	var idName=$(this).attr("id")
    console.log(idName)
	$("."+idName).show().css("animation-play-state" , "running")
	$(this).addClass("active")
	
})

//*************************TEAM**************************


//hover

