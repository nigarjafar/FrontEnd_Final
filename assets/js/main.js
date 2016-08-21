//Details
//**hide scroll-top button 
$(".scrollTop").hide();
//******************SLIDER*************
setTimeout(function () {
    $("#slider").animate({
        "opacity": "1"
    });
}, 500);
//*****************LOGOS***************
//********************Scroll function*******************//
var i = 1;
var k = 1;
$(window).scroll(function () {
        var wScroll = $(window).scrollTop()
        var wHeight = $(window).height()
            //****************Navbar*********************
        if (wScroll > $("#logos").offset().top - wHeight / 2 + 150) {
            $(".navbar-brand img").attr("src", "assets/img/logo-inverted.png")
            $(".navbar").addClass("animateTopNav").css("animation-play-state", "running").addClass("navbar-scroll").removeClass("navbar-no-scroll")
        }
        else if (wScroll < $("#logos").offset().top - wHeight / 2 + 50) {
            $(".navbar-brand img").attr("src", "assets/img/logo.png")
            $(".navbar").addClass("navbar-no-scroll").removeClass("navbar-scroll").removeClass("animateTopNav")
                //Add active class=>home
            $(".navbar-nav li").removeClass("active")
            $(".navbar-nav li:first-child").addClass("active")
        }
        //****************Logos**********************
        if (wScroll > $("#logos").offset().top - wHeight / 2 - 100) {
            $("#logos img:first-child").css("animation-play-state", "running");
            setTimeout(function () {
                $("#logos img:nth-child(2)").css("animation-play-state", "running")
            }, 300)
            setTimeout(function () {
                $("#logos img:nth-child(3)").css("animation-play-state", "running")
            }, 600)
            setTimeout(function () {
                $("#logos img:nth-child(4)").css("animation-play-state", "running")
            }, 900)
            setTimeout(function () {
                $("#logos img:nth-child(5)").css("animation-play-state", "running")
            }, 1200)
        }
        //*****************ABout**************//
        if (wScroll > $("#about").offset().top - wHeight / 2) {
            $(".navbar-nav li").removeClass("active")
            $(".navbar-nav li:nth-child(2)").addClass("active")
            $("#about .firstTab").show()
            $("#about .firstTab .animateLeft").css("animation-play-state", "running");
            $("#about .firstTab .animateRight").css("animation-play-state", "running");
            $("#about .secondTab").hide()
            $("#about .thirdTab").hide()
            if (wScroll > $("#about .newAgeTech").offset().top - wHeight / 2) {
                $("#about .newAgeTech .animateLeft").css("animation-play-state", "running");
                $("#about .newAgeTech .animateRight").css("animation-play-state", "running");
            }
            if (wScroll > $("#about .helmet").offset().top - wHeight / 2) {
                $("#about .helmet .animateLeft").css("animation-play-state", "running");
                $("#about .helmet .animateRight").css("animation-play-state", "running");
            }
        }
        //****************Features****************//
        if (wScroll > $("#features").offset().top - wHeight / 2) {
            $(".navbar-nav li").removeClass("active")
            $(".navbar-nav li:nth-child(3)").addClass("active")
            $("#features .feature1").css("animation-play-state", "running");
        }
        if (wScroll > $("#features .animateRight").offset().top - wHeight / 2 + 10) {
            $("#features .animateRight").css("animation-play-state", "running");
        }
        if (wScroll > $("#features .animateLeft").offset().top - wHeight / 2) {
            $("#features .animateLeft").css("animation-play-state", "running");
        }
        //*******************Uptades************************
        if (wScroll > $("#uptades .animateRight").offset().top - wHeight / 2) {
            $("#uptades .animateRight").css("animation-play-state", "running");
        }
        if (wScroll > $("#uptades .animateLeft").offset().top - wHeight / 2 - 20) {
            $("#uptades .animateLeft").css("animation-play-state", "running");
        }
        //*****************Prices***********************
        if (wScroll > $("#prices").offset().top - wHeight / 2 + 20) {
            $(".navbar-nav li").removeClass("active")
            $(".navbar-nav li:nth-child(4)").addClass("active")
            $("#prices .animateBottom").css("animation-play-state", "running");
        }
        //****************Awards*****************
        if (wScroll > $("#awards").offset().top - wHeight / 2 + 20) {
            $("#awards .animateTop").css("animation-play-state", "running");
        }
        //***********************Feedback******************************
        if (wScroll > $("#feedback").offset().top - wHeight / 2) {
            $(".navbar-nav li").removeClass("active")
            $(".navbar-nav li:nth-child(5)").addClass("active")
            $("#feedback #reviews").css("animation-play-state", "running");
        }
        if (wScroll > $("#feedback").offset().top - wHeight / 2 + 180) {
            $("#feedback #clients").css("animation-play-state", "running");
        }
        //**********************Team******************************
        if (wScroll > $("#teamMembers").offset().top - wHeight / 2) {
            $(".navbar-nav li").removeClass("active")
            $(".navbar-nav li:nth-child(6)").addClass("active")
            $("#teamMembers .team-member:first-child").css("animation-play-state", "running");
            setTimeout(function () {
                $("#teamMembers .team-member:nth-child(2)").css("animation-play-state", "running")
            }, 300)
            setTimeout(function () {
                $("#teamMembers .team-member:nth-child(3)").css("animation-play-state", "running")
            }, 600)
            setTimeout(function () {
                $("#teamMembers .team-member:nth-child(4)").css("animation-play-state", "running")
            }, 900)
        }
        //*****************Contact*********************
        if (wScroll > $("#footer").offset().top - wHeight / 2) {
            $(".navbar-nav li").removeClass("active")
            $(".navbar-nav li:nth-child(7)").addClass("active")
        }
        //**************************Scroll Top ***********************
        if (wScroll > $("#about").offset().top - wHeight / 2 + 100) {
            $(".scrollTop").show().on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 400);
            })
        }
        else if (wScroll < $("#about").offset().top - wHeight / 2 - 400) {
            $(".scrollTop").hide();
        }
    })
    //**********************Buttons***********************
    //******************ABOUT********************
$("#about .button-group button:first-child").on('click', function () {
    $("#about .button-group button").removeClass("active-button");
    $(this).addClass("active-button");
    $("#about .firstTab").show()
    $("#about .firstTab .animateLeft").css("animation-play-state", "running");
    $("#about .firstTab .animateRight").css("animation-play-state", "running");
    $("#about .secondTab").hide()
    $("#about .thirdTab").hide()
})
$("#about .button-group button:nth-child(2)").on('click', function () {
    $("#about .button-group button").removeClass("active-button");
    $(this).addClass("active-button");
    $("#about .secondTab").show()
    $("#about .secondTab .animateLeft").css("animation-play-state", "running")
    $("#about .secondTab .animateRight").css("animation-play-state", "running")
    $("#about .firstTab").hide()
    $("#about .thirdTab").hide()
})
$("#about .button-group button:nth-child(3)").on('click', function () {
        $("#about .button-group button").removeClass("active-button");
        $(this).addClass("active-button");
        $("#about .thirdTab").show()
        $("#about .thirdTab .animateZoom").css("animation-play-state", "running")
        $("#about .thirdTab .animateTop").css("animation-play-state", "running")
        $("#about .firstTab").hide()
        $("#about .secondTab").hide()
    })
    //******************************Features*******************
$("#features .feature2, #features .feature3").hide(); //hide image2 /image3
$("#features ul li").on("click", function () {
        $("#features li").removeClass("active")
        $("#features .img-div img").hide()
        var idName = $(this).attr("id")
        console.log(idName)
        $("." + idName).show().css("animation-play-state", "running")
        $(this).addClass("active")
    })
    //*************************TEAM**************************
    //hover