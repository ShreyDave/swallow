$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 750,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 750,
        infinite: true,
        responsive: [
            {
                breakpoint: 1400,   
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
});

$(document).ready(function () {
    $('.slider1').slick({
        autoplay: true,
        autoplaySpeed: 750,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 750,
        infinite: true,
        responsive: [
            {
                breakpoint: 1400,   
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
});


$(document).ready(function () {
    $('.slider2').slick({
        autoplay: true,
        autoplaySpeed: 750,
        slidesToShow: 2.19,
        slidesToScroll: 0.8,
        arrows: true,
        dots: false,
        speed: 750,
        infinite: true,
        responsive: [
            {
                breakpoint: 1400,   
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
});

$(document).ready(function () {
    $(".menuIcon").on("click", function () {
        $(this).toggleClass("active");
        $(".menubar").toggleClass("active");
    });
});