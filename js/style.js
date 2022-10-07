$(document).ready(function () {

    // animate onload page

    setTimeout(function () {
        $("#onload .left").animate({ left: "-1000px" });
        $("#onload .right").animate({ right: "-1000px" });
    }, 1000);
    setTimeout(function () {
        $("#onload").animate({ opacity: "0" });
    }, 1300)

    setTimeout(function () {
        $("#onload").remove();
    }, 2000)


    $(".discount i").click(function () {
        $(".discount").remove();
    });

    // toggle menu
    $("#header .menu-icon .fa-bars").click(function () {
        $(".navigation .menues").toggleClass("menues-down");
    })

    $("#header .menu span").click(function () {
        if (window.innerWidth > 992) {
            return;
        }
        if ($(this).parent().children("ul").hasClass("d-block") == true) {
            $(this).parent().children("ul").removeClass("d-block");
            return;
        };
        $("#header .menu").children(".d-block").removeClass("d-block");
        $(this).parent().children("ul").toggleClass("d-block");
    })
    $("#header .menu ul li").click(function () {
        $(this).children("ul").toggleClass("d-block");
        $("this").parent().addClass("d-none");

    })

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
    if ($("#about-us").length == 1) {
        var aboutUs = $("#about-us").position().top;
    }
    $(window).scroll(function (e) {
        if ($("html").scrollTop() > aboutUs - 460) {
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
                        $("#about-us .paid").text(Math.round(i / 1.5));
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
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    });

    // function for close video about us
    function closeVideo() {
        $("#about-us .video").remove();
    }

    //open video about us
    $("#about-us i").click(function () {
        setTimeout(function () {
            if ($("#about-us .video iframe").length == 0) {
                $("#about-us").append('<div class="video d-flex justify-content-center"><div class="col-lg-8"><div class="w-100"><iframe width="560" height="315" src="https://www.youtube.com/embed/7e90gBu4pas" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div></div>')
            }
        }, 50);

    })

    // close video on keyup space
    $(document).keydown(function (e) {
        if (e.which == 27) {
            closeVideo();
        }
    })


    // close video on click out video
    $("body").click(function () {
        if ($("#about-us .video").length == 1) {
            closeVideo();
        }
    })


    // number section statics
    var students, courses, teachers, award, j = 0;
    if ($("#statics").length == 1) {
        var statics = $("#statics").position().top;
    };

    $(window).scroll(function (e) {
        if ($("html").scrollTop() > statics - 660) {
            if (j == 0) {
                students = setInterval(function () {
                    if (j > 1800) {
                        clearInterval(students);
                        $("#statics .students").text("1800+");
                    } else {
                        j = j + 2;
                        $("#statics .students").text(j + "+");
                    }
                }, 5);

                courses = setInterval(function () {
                    if (j > 1760) {
                        clearInterval(courses);
                        $("#statics .courses").text("70");
                    } else {
                        j = j + 1;
                        $("#statics .courses").text(Math.round(j / 26));
                    }
                }, 8);

                teachers = setInterval(function () {
                    if (j > 1800) {
                        clearInterval(teachers);
                        $("#statics .teachers").text("700+");
                    } else {
                        j = j + 1;
                        $("#statics .teachers").text(Math.round(j / 2.6) + "+");
                    }
                }, 8);

                award = setInterval(function () {
                    if (j > 1800) {
                        clearInterval(award);
                        $("#statics .award").text("1200+");
                    } else {
                        j = j + 2;
                        $("#statics .award").text(Math.round(j / 1.5) + "+");
                    }
                }, 8);
            }
        }
    })

    if ($("#about-statics").length == 1) {
        var statics = $("#about-statics").position().top;
    };
    $(window).scroll(function (e) {
        if ($("html").scrollTop() > statics - 660) {
            if (j == 0) {
                students = setInterval(function () {
                    if (j > 1798) {
                        clearInterval(students);
                        $("#about-statics .students").text("1800+");
                    } else {
                        j = j + 2;
                        $("#about-statics .students").text(j + "+");
                    }
                }, 3);

                courses = setInterval(function () {
                    if (j > 1749) {
                        clearInterval(courses);
                        $("#about-statics .courses").text("70");
                    } else {
                        j = j + 1;
                        $("#about-statics .courses").text(Math.round(j / 26));
                    }
                }, 8);

                teachers = setInterval(function () {
                    if (j > 1800) {
                        clearInterval(teachers);
                        $("#about-statics .teachers").text("700+");
                    } else {
                        j = j + 1;
                        $("#about-statics .teachers").text(Math.round(j / 2.6) + "+");
                    }
                }, 8);

                award = setInterval(function () {
                    if (j > 1798) {
                        clearInterval(award);
                        $("#about-statics .award").text("1200+");
                    } else {
                        j = j + 2;
                        $("#about-statics .award").text(Math.round(j / 1.5) + "+");
                    }
                }, 8);
            }
        }
    })

    // our gallery
    $("#our-gallery .items-name div").click(function () {
        if ($(this).hasClass("active") == true) {
            return;
        } else {
            var a = $("[" + $(this).attr("item") + "]");
            $("#our-gallery .items-name .active").removeClass("active");
            $(this).addClass("active");

            $("#our-gallery .item").parent().addClass("dis").removeClass("col-4");
            $("[" + $(this).attr("item") + "]").removeClass("dis").addClass("col-4");
        }
    })




    $('#stydent-say .items').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 20000,
        infinite: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    $('#our-client .items').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
    });


    // main tab-menu in course detail page
    $("#tab-menu .header-tab-menu div").click(function () {
        $("#tab-menu .header-tab-menu [show-tab]").removeAttr("show-tab");
        $(this).attr("show-tab", "");
        $(this).attr("name")
        $("#tab-menu .body-tab-menu [show-tab]").removeAttr("show-tab");
        $("#tab-menu .body-tab-menu [" + $(this).attr("name") + "]").attr("show-tab", "");

    })

    // mini tab-menu in main tab menu in course detail  page
    $("#tab-menu .body-tab-menu [curriculum] h5").click(function () {
        if ($(this).parent().css("height") == "161px") {
            $(this).parent().animate({ height: "62px" });
            return;
        }
        $(this).parent().siblings().animate({ height: "62px" });
        $(this).parent().animate({ height: "161px" });
    })

    $("#tab-menu .body-tab-menu .add-review .fa-star").click(function () {
        $(this).addClass("fas");
        $(this).siblings().addClass("fas");
        $(this).nextAll().removeClass("fas").addClass("far");
    })

    var endTime = 1593958801000;
    function timer() {
        var difference, month, day, hours, minute, second, time;
        setInterval(function () {
            time = new Date;
            difference = time.getTime() - endTime;
            month = new Date().getMonth() - new Date(endTime).getMonth();
            day = Math.floor(difference / 1000 / 60 / 60 / 24);
            hours = Math.floor(difference / 1000 / 60 / 60) % 24;
            minute = Math.floor(difference / 1000 / 60) % (60);
            second = Math.floor(difference / 1000) % (60);
        }, 1000);


        $(".timer").prepend("<div class='to-end'></div>");
        $(".timer .to-end").append("<span class='month'>" + 0 + "</span>");
        $(".timer .to-end").append("<span>:</span>");
        $(".timer .to-end").append("<span class='day'>" + 0 + "</span>");
        $(".timer .to-end").append("<span>:</span>");
        $(".timer .to-end").append("<span class='hours'>" + 0 + "</span>");
        $(".timer .to-end").append("<span>:</span>");
        $(".timer .to-end").append("<span class='minute'>" + 0 + "</span>");
        $(".timer .to-end").append("<span>:</span>");
        $(".timer .to-end").append("<span class='second'>" + 0 + "</span>");

        setInterval(function () {
            $(".timer .to-end .month").text(month)
            $(".timer .to-end .day").text(day)
            $(".timer .to-end .hours").text(hours)
            $(".timer .to-end .minute").text(minute)
            $(".timer .to-end .second").text(second);

        }, 1000);
    }
    timer();





})

function sifir(value, requiredLength) {
    let valueLength = String(value).length;
    let count = requiredLength - valueLength;
    let out = `${'0'.repeat(count)}${value}`;
    return out
}

function getDate() {
    let text = document.getElementById("time").innerText; //Htmlden melumati goturmek goturket
    let myDate = new Date(text).getTime(); //hemin melumati tarixe cevirib onu da millisaniyeye cevirmek
    let nextTime = new Date(myDate + 1000); //hemin millisaniyenin ustune 1 saniye gelib tarixe yeniden cevirmek 

    let day = nextTime.getDate();
    let year = nextTime.getFullYear();
    let month = nextTime.getMonth() + 1;
    let hours = nextTime.getHours();
    let minutes = nextTime.getMinutes();
    let seconds = nextTime.getSeconds();

    let out = `${year}.${month}.${sifir(day, 2)} ${sifir(hours, 2)}:${sifir(minutes, 2)}:${sifir(seconds, 2)}`;
    
    document.getElementById("time").innerText = out;
}


setInterval(getDate, 1000)
