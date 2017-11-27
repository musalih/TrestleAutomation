$(document).ready(function() {

    'use strict';



    // iPad and iPod detection	
    var isiPad = function() {
        return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function() {
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    };

    //scroll navbar
    $(window).scroll(function() {
        "use strict";
        var b = $(window).scrollTop();
        if (b > 60) {
            $(".navbar").addClass("is-scrolling");
        } else {
            $(".navbar").removeClass("is-scrolling");
        }
    });


    //carousel for testimony
    var testimonialCarousel = function() {
        var owl = $('.owl-carousel-fullwidth');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoHeight: true
        });
    };



//parallax mobile fix
if (Modernizr.touch && ($('#header').attr('data-stellar-background-ratio') !== undefined)) {
    $('#header').css('background-attachment', 'scroll');
    $('#header').removeAttr('data-stellar-background-ratio');
} else {
    $(window).stellar({
        horizontalScrolling: false
    });
}

    //hides navbar after click on mobile version
    (function($) {

        "use strict";

        $('.nav.navbar-nav li a').click(function() {
            var $togglebtn = $(".navbar-toggle");
            if (!($togglebtn.hasClass("collapsed")) && ($togglebtn.is(":visible"))) {
                $(".navbar-toggle").trigger("click");
            }
        });
    })(jQuery);



    // Scrollto plugin for page scrolling
    var onMobile;

    onMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) { onMobile = true; }

    if (onMobile === true) {
        $('a.scrollto').click(function(event) {
            $('html, body').scrollTo(this.hash, this.hash, { gap: { y: -10 }, animation: { easing: 'easeInOutCubic', duration: 0 } });
            event.preventDefault();
        });
    } else {
        $('a.scrollto').click(function(event) {
            $('html, body').scrollTo(this.hash, this.hash, { gap: { y: -10 }, animation: { easing: 'easeInOutCubic', duration: 1500 } });
            event.preventDefault();
        });
    }


    //Fixes bootstrap problems with IE
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.querySelector('head').appendChild(msViewportStyle);
    }

testimonialCarousel();


});