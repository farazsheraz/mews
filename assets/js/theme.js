// start responsive header
// function darken_screen(yesno){
//     if( yesno == true ){
//         document.querySelector('.screen-darken').classList.add('active');
//     }
//     else if(yesno == false){
//         document.querySelector('.screen-darken').classList.remove('active');
//     }
// }

function close_offcanvas() {
    // darken_screen(false);
    document.querySelector('.mobile-offcanvas.show').classList.remove('show');
    document.body.classList.remove('offcanvas-active');
}

function show_offcanvas(offcanvas_id) {
    // darken_screen(true);
    document.getElementById(offcanvas_id).classList.add('show');
    document.body.classList.add('offcanvas-active');
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('[data-trigger]').forEach(function(everyelement) {

        let offcanvas_id = everyelement.getAttribute('data-trigger');

        everyelement.addEventListener('click', function(e) {
            e.preventDefault();
            show_offcanvas(offcanvas_id);

        });
    });

    document.querySelectorAll('.btn-close').forEach(function(everybutton) {

        everybutton.addEventListener('click', function(e) {
            e.preventDefault();
            close_offcanvas();
        });
    });

    // document.querySelector('.screen-darken').addEventListener('click', function(event){
    //     close_offcanvas();
    // });

});
// DOMContentLoaded  end

// end responsive header




$(document).ready(function() {
    // NAV LINK ACTIVE
    jQuery(function($) {
        var path = window.location.href;
        $("nav ul li a").each(function() {
            if (this.href === path) {
                $(this).addClass("fw-bold");
            }
        });
    });


    //NAVBAR FIXED HIDE STARTS
    $(window).scroll(function(e) {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $('nav').addClass("bg-black");

        } else {
            $('nav').removeClass("bg-black");
        }

    })

    // AOS Initialize
    AOS.init({
        duration: 1200,
    });


    // COLLASPE CLOSE WHEN OTHER CLICK


    $(document).click(function(e) {

        if (!$(e.target).is(".sidebar .collapse")) {
            $(".sidebar .collapse").collapse("hide");
        }
    });

    $(".work-process li").click(function() {
        $(".work-process li").removeClass("active");
        $(this).addClass("active");
    });



    // SLICK SLIDER

    //RECENT WINS SLIDER
    //recentWinSlider
    $(".recentWinSlider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="slide-arrow prev-arrow"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="31" cy="31" r="31" fill="white"/><path d="M44 31L17 31" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 24L17 31L24 38" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
        nextArrow: '<span class="slide-arrow next-arrow"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="31" cy="31" r="31" fill="white"/>    <path d="M18 31L45 31" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>    <path d="M38 24L45 31L38 38" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
        responsive: [{
            breakpoint: 2250,
            settings: {
                arrows: true,
            },
            breakpoint: 1300,
            settings: {
                arrows: false,
            },
            breakpoint: 767,
            settings: {
                arrows: true,
            },
        }, ],
    });

    // partners
    $(".partners").slick({
        slidesToScroll: 1,
        slidesToShow: 1.5,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        prevArrow: '<span class="slide-arrow prev-arrow"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="31" cy="31" r="31" fill="white"/><path d="M44 31L17 31" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 24L17 31L24 38" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
        nextArrow: '<span class="slide-arrow next-arrow"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="31" cy="31" r="31" fill="white"/>    <path d="M18 31L45 31" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>    <path d="M38 24L45 31L38 38" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
        centerPadding: "100px",
        // centerMode: true,
        // focusOnSelect: true
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            },
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            },
        }, ],
    });

    // client slider
    $(".clientSlider").slick({
        centerMode: true,
        centerPadding: "350px",
        slidesToShow: 1,
        arrows: true,
        autoplay: false,
        prevArrow: '<span class="slide-arrow prev-arrow"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="31" cy="31" r="31" fill="white"/><path d="M44 31L17 31" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 24L17 31L24 38" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
        nextArrow: '<span class="slide-arrow next-arrow"><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="31" cy="31" r="31" fill="white"/>    <path d="M18 31L45 31" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>    <path d="M38 24L45 31L38 38" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: "100px",
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });
    //Logo Slider
    $(".logoSlider").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        centerPadding: "20px",
        centerMode: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        }, ],
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    vertical: false,
                    centerMode: false,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    vertical: false,
                    centerMode: false,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    vertical: false,
                    centerMode: false,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    // SLICK SLIDER END
    //BG VIDEO
    $('.cover').on('click', function() {
        $(this).children().css({
            // 'z-index': 99,
            'opacity': 1
        });
        $(this).children().trigger('play');

    });

});