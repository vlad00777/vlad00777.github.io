$(document).ready(function () {
    $('.js-form').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'mfp-with-zoom',
        removalDelay: 400,
        items: {
            src: '#popup',
            type: "inline"
        }
    });
    
    $(".js-closeMenu").on("click", function(){
        $(".popupMenu").removeClass("is-opened");
    });
    $(".js-openMenu").on("click", function () {
        $(".popupMenu").addClass("is-opened");
    });
    
    $('.mainSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
        speed:2000
    });
    
    $('.js-counter').on('inview', function (event, isInView) {
        var el = $(this);
        if (isInView) {
            if (!el.hasClass("is-active")) {
                setTimeout(function () {
                    animateCounter();
                }, 400);
            }
        }
    });
    
});

function animateCounter() {
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: ' ',
        decimal: '.',
    };
    for (i = 0; i < 3; i++) {
        var demo = new CountUp('js-counter' + i, 0, parseInt($("#js-counter" + i).data("count")), 0, 2.5, options);
        if (!demo.error) {
            demo.start();
            $(".js-counter").addClass("is-active");
        }
    }
}