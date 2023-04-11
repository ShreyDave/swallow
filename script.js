// $(document).ready(function () {
//     $('.slider').slick({
//         autoplay: true,
//         autoplaySpeed: 750,
//         dots: false,
//         infinite: true,
//         speed: 750,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//     });
// });


$(document).ready(function () {
    $('.slider').slick({
        autoplay: false,
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
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 760,
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