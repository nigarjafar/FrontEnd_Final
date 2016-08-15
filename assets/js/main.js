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



