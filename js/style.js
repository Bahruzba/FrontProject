$(document).ready(function () {

    $(".discount i").click(function () {
        $(".discount").remove();
    });

    // Scroll Header
    $(window).scroll(function (e) {
        if ($(".discount").length == 1) {
            if ($("html").scrollTop() > 104) {
                $(".navigation").addClass("fixed");
            } else {
                $(".navigation").removeClass("fixed");
            }
        }
        else {
            $(window).scroll(function (e) {
                if ($("html").scrollTop() > 55) {
                    $(".navigation").addClass("fixed");
                } else {
                    $(".navigation").removeClass("fixed");
                }
            })
        }
    })

    // Left button
    $("#slider .icons .left").click(function () {
        sliderToLeft();
    })

    // Right button
    $("#slider .icons .right").click(function () {
        sliderToRight();
    })

    var autoSlider = window.setInterval(function () {
        sliderToRight()
    }, 3000);


    $("#slider").on("mouseover", function () {
        window.clearInterval(autoSlider);
    });

    $("#slider").on("mouseout", function () {
        autoSlider = window.setInterval(function () {
            sliderToRight()
        }, 3000);
    })

    function sliderToRight() {
        sliderText();
        if ($("#slider .show").next().length != 0) {
            $("#slider .show").removeClass("show").next().addClass("show");
        } else {
            $("#slider .show").removeClass("show");
            $(".slider-item:first-child").addClass("show");
        }
    }

    function sliderToLeft() {
        sliderText();
        if ($("#slider .show").prev().length != 0) {
            $("#slider .show").removeClass("show").prev().addClass("show");
        } else {
            $("#slider .show").removeClass("show");
            $(".slider-item:last-child").addClass("show");
        }
    }

    // sliderText();
    function sliderText() {
        $(".text-slider").children().addClass("d-none");
        setTimeout(function () { $(".text-slider h1").removeClass("d-none").addClass("w3-container w3-center w3-animate-top"); }, 800);
        setTimeout(function () { $(".text-slider h5").removeClass("d-none").addClass("w3-container w3-center w3-animate-bottom"); }, 1200);
        setTimeout(function () { $(".text-slider .buttons").removeClass("d-none").addClass("w3-container w3-center w3-animate-bottom"); }, 1400);
    }
    sliderText();


    // Number courses
    var i = 0, free, paid;

    $(window).scroll(function (e) {
        if ($("html").scrollTop() > 1250) {
            if (i == 0) {
                free = setInterval(function () {
                    if (i > 259) {
                        clearInterval(free);
                        $("#about-us .free").text("260");
                    } else {
                        i = i + 1;
                        $("#about-us .free").text(i);
                    }
                }, 5);

                paid = setInterval(function () {
                    if (i > 242) {
                        clearInterval(paid);
                        $("#about-us .paid").text("162");
                    } else {
                        i = i + 1;
                        $("#about-us .paid").text(Math.round(i/1.5));
                    }
                }, 8);
            }
        }
    })

    // owl slider

    $("#most-popular-categories .items").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:5,
                nav:true,
                loop:true
            }
        }
    });

    // function for close video about us
    function closeVideo() {
        $("#about-us .video").addClass("d-none");
        $("#about-us .video iframe").remove();

    }

    //open video about us
    $("#about-us i").click(function () {
        $("#about-us .video").removeClass("d-none");
        if ($("#about-us .video iframe").length == 0) {
            $("#about-us .video .w-100").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/7e90gBu4pas" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
        }
    })
    // close video on keyup space
    $("body").keydown(function (e) {
        if (e.which == 27) {
            closeVideo();
        }
    })


    // close video on click out video
    $("#about-us .video").click(function () {
        closeVideo();

    })



var students, courses, teachers, award;

    $(window).scroll(function (e) {
        if ($("html").scrollTop() > 3000) {
            if (i == 0) {
                students = setInterval(function () {
                    if (i > 1798) {
                        clearInterval(students);
                        $("#statics .students").text("1800+");
                    } else {
                        i = i + 2;
                        $("#statics .students").text(i+"+");
                    }
                }, 3);

                courses = setInterval(function () {
                    if (i >1749) {
                        clearInterval(courses);
                        $("#statics .courses").text("69");
                    } else {
                        i = i + 1;
                        $("#statics .courses").text(Math.round(i/26));
                    }
                }, 8);

                teachers = setInterval(function () {
                    if (i > 1800) {
                        clearInterval(teachers);
                        $("#statics .teachers").text("700+");
                    } else {  
                            i = i + 1;
                        $("#statics .teachers").text(Math.round(i/2.6)+"+");
                    }
                }, 8);

                award = setInterval(function () {
                    if (i > 1798) {
                        clearInterval(award);
                        $("#statics .award").text("1200+");
                    } else {
                        i = i + 2;
                        $("#statics .award").text(Math.round(i/1.5)+"+");
                    }
                }, 8);
            }
        }
    })
    
    })