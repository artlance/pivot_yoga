$(document).ready(function() {

    //ready

    //nojs
    $('body').removeClass('no-js');

    //------------------------------------------------------------------------//

    //fakelink
    $('a[href="#"]').on('click', function(event) {
        event.preventDefault();
    });

    //------------------------------------------------------------------------//

    //navigation
    $('.navigation-toggle').on('click', function(event) {
        event.preventDefault();
        $('body').toggleClass('navigation-open');
    });

    //------------------------------------------------------------------------//

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 10;
    var navbarHeight = $('.header-global').innerHeight();

    $(window).scroll(function(event){
        didScroll = true;
        fromTop();
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function fromTop() {
        if ( $(window).scrollTop() > 1 ) {
            $('.header-global').addClass('from-top');
        } else {
            $('.header-global').removeClass('from-top');
        }
    }

    fromTop();

    function hasScrolled() {
        var st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta) {
            return;
        }
        if (st > lastScrollTop && st > navbarHeight){
            $('.header-global').removeClass('nav-down').addClass('nav-up');
        } else {
            if(st + $(window).height() < $(document).height()) {
                $('.header-global').removeClass('nav-up').addClass('nav-down');
            }
        }
        lastScrollTop = st;
    }

    //------------------------------------------------------------------------//

    // $(document).on('click', function(event) {
    //     event.preventDefault();
    //     $('html').toggleClass('video-open');
    // });

    //------------------------------------------------------------------------//

    //slider
    $('.teachers-slider').slick({
        dots: false,
        arrows: true,
        draggable: true,
        infinite: true,
        centerMode: true,
        centerPadding: '29.95%',
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 500,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slide: '.teachers-slide',
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                centerPadding: '20%',
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerPadding: '0%'
              }
            }
          ]
    });

    //------------------------------------------------------------------------//

    //slider
    $('.reviews-slider').slick({
        dots: false,
        arrows: false,
        draggable: true,
        infinite: true,
        centerMode: false,
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 600,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slide: '.reviews-item',
        slidesToShow: 1,
        slidesToScroll: 1,
        //asNavFor: '',
        fade: true
    });

    //------------------------------------------------------------------------//

    $('.tech-point-toggle').on('click', function(event) {
        event.preventDefault();
        $(this).parents('.tech-point').toggleClass('open');
    });

    //------------------------------------------------------------------------//

    // var Spectra = {
    //   //example instaToken: '2136707.12e2743.9576ae17af4e4ad4aebf6b72433c01fd',
    //   instaToken: '8098378008.d5de661.6ae4ff521acf497095fcaa340f9e3972',

    //   init: function () {
    //     $.fn.spectragram.accessData = {
    //       accessToken: this.instaToken,
    //       clientID: this.instaID
    //     };

    //     // method getUserFeed
    //     $('.instagram-slider').spectragram('getUserFeed',{
    //       max: 120,
    //       size: "medium",
    //       wrapEachWith: '<div class="instagram-item">'
    //     });
    //   }
    // }

    // var Spectra = {
    //   instaToken: '8098378008.d5de661.6ae4ff521acf497095fcaa340f9e3972',

    //   init: function () {
    //     $.fn.spectragram.accessData = {
    //       accessToken: this.instaToken,
    //       clientID: this.instaID
    //     };

    //     // method getRecentTagged
    //     $('.instagram-slider').spectragram('getRecentTagged',{
    //       max: 120,
    //       query: 'pivotyoga',
    //       size: "medium",
    //       wrapEachWith: '<div class="instagram-item">'
    //     });
    //   }
    // }

    //Spectra.init();

    //------------------------------------------------------------------------//

    $(function(){$('.tabs').delegate('li:not(.active)','click',function(){$(this).addClass('active').siblings().removeClass('active').parents('.tab').find('.box').hide().eq($(this).index()).fadeIn(400, function() {  });})});

    //------------------------------------------------------------------------//

    //slider
    $('.product-gallery').slick({
        dots: false,
        arrows: false,
        draggable: true,
        infinite: false,
        centerMode: false,
        centerPadding: '0px',
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 500,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slide: '.product-gallery-item',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-thumbnails',
        //fade: true
    });

    //slider
    $('.product-thumbnails').slick({
        dots: false,
        arrows: false,
        draggable: true,
        infinite: false,
        centerMode: false,
        centerPadding: '0px',
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 500,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slide: '.product-thumbnail',
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-gallery',
        focusOnSelect: true,
        //fade: true
    });

    $(document).on('click', '.product-thumbnail', function(event) {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
    });

    //------------------------------------------------------------------------//

    function colorChange(elementInput) {
        var thisParent = elementInput.parents('.radio-color');
        var thisText = thisParent.find('label').text();
        elementInput.parents('.color-group').find('.color-list-value').text(thisText);
    }
    $('.color-list input:checked').each(function(index, el) {
        colorChange($(this));
    });
    $('.color-list input').on('change', function(event) {
        colorChange($(this));
    });

    //------------------------------------------------------------------------//

    // $('.video-toggle').on('click', function(event) {
    //     event.preventDefault();
    //     $(this).fadeOut('150');
    //     document.getElementById('product-video-play').play();
    // });

    //------------------------------------------------------------------------//

    $('.faq-item-title').on('click', function(event) {
        event.preventDefault();
        $(this).parents('.faq-item').toggleClass('open');
    });

    //------------------------------------------------------------------------//

    //Color
    var labelColor = '';
    $('.radio-color').each(function(index, el) {
        var thisText = $(this).find('label').text();
        switch(thisText) {
            case 'Purple Haze':
                labelColor = '503A8E';
                break;
            case 'Blue':
                labelColor = '5E8DC5';
                break;
            case 'Gray':
                labelColor = '636363';
                break;
            default:
                labelColor = '202124';
        }
        $(this).find('label').css({
            'background': '#'+labelColor
        });
    });


}); //document ready

//*********************************************************************//

$(window).load(function() {

    var scrollLinkState = false;

    //scroll link
    $('a.scroll-link, a.scroll-link-top').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            var correction = 0;
            scrollLinkState = true;
            if ( $(this).hasClass('scroll-link-top') && $('.teachers-hero').is(':visible') ){
                correction = $('body').innerHeight() * 0.8 - 300;
            }
            if (target.length) {
                $('html').removeClass('navigation-open');
                $('html, body').animate({
                    scrollTop: target.offset().top + 1 - correction
                }, 600, function() { scrollLinkState = false; });
                return false;
            }
        }
    });


    //------------------------------------------------------------------------//

    $('.rings').waypoint(function(direction) {
        if ( direction == 'down' ) {
            $('.rings').addClass('rings-animated');
        }
    }, {
        offset: "110%"
    });

    $('.rings').waypoint(function(direction) {
        if ( direction == 'up' ) {
            $('.rings').removeClass('rings-animated');
        }
    }, {
        offset: "150%"
    });

    $('.hero-title, .hero-note, .hero-navigation, .down-wrap').waypoint(function(direction) {
        $(this.element).addClass('animated1 fadeInUp').addClass('visibility-visible');
    }, {
        offset: "100%"
    });

    $('.header-global-container, .modal-header').waypoint(function(direction) {
        $(this.element).addClass('animated1 fadeInDown').addClass('visibility-visible');
    }, {
        offset: "100%"
    });

    $('.teachers-title h2, .teachers-slider, .teachers-navigation, .reviews-slider, .get-started-content, .js-cm-form, .product-teachers-content *, .video-toggle-title, .video-toggle-play, .product-design-title, .product-design-description, .product-design-more, .product-faq-title, .faq-navigation, .faq, .product-tech-group, .product-tech-title, .teacher, .teacher-info-content, .hero-inner, .info-inner-content, .teachers-cta-content, .breadcrumbs').waypoint(function(direction) {
        $(this.element).addClass('animated1 fadeInUp').addClass('visibility-visible');
    }, {
        offset: "85%"
    });

    $('.product-title, .product-price-st, .product-price-mo, .product-description, .color-group, .product-navigation, .product-thumbnails-wrapper').waypoint(function(direction) {
        $(this.element).addClass('animated1 fadeInUp').addClass('visibility-visible');
    }, {
        offset: "95%"
    });

    $('.product-gallery-wrapper, .product-design-image').waypoint(function(direction) {
        $(this.element).addClass('animated1 fadeIn').addClass('visibility-visible');
    }, {
        offset: "85%"
    });

    $('.instagram-slider').waypoint(function(direction) {
        $('.instagram-slider, .instagram-link').addClass('animated1 fadeIn').addClass('visibility-visible');
    }, {
        offset: "85%"
    });

    var teachersHeroBackgroundOffset = $('.teachers-hero').offset().top + 100;
    var teachersHeroHeight = $('.teachers-hero').innerHeight();
    var techSlideBackgroundOffset = $('.tech-slide-background').eq(0).offset().top;
    var offsetDiff = techSlideBackgroundOffset - teachersHeroBackgroundOffset - teachersHeroHeight + 300;

    $(window).resize(function() {

        //resize
        teachersHeroBackgroundOffset = $('.teachers-hero').offset().top + 100;
        teachersHeroHeight = $('.teachers-hero').innerHeight();
        techSlideBackgroundOffset = $('.tech-slide-background').eq(0).offset().top;
        offsetDiff = techSlideBackgroundOffset - teachersHeroBackgroundOffset - teachersHeroHeight + 300;

    });//window resize

    var $nonScrollable = $('body');


    $(".how-it-works").waypoint(function(direction) {

        if ( direction == 'down' ) {

            $(".how-it-works-wrap").removeClass('fadeOutDown').addClass('animated1 fadeInUp').addClass('visibility-visible');
            $('.how-it-works-photo-img').removeClass('fadeOutDownBig').addClass('animated1 fadeInUpBig').addClass('visibility-visible');
            $('.teachers-hero-background').css({'transform' : 'translate3d(0, ' + offsetDiff +'px, 0)'});
            $('.teachers-hero').css({'min-height': '300px'});

            $('.note').removeClass('fadeOutRight').addClass('animated1').addClass('fadeInLeft').addClass('visibility-visible');
            $('.note-revert').addClass('fadeOutDown');

            if ( !scrollLinkState && window.innerWidth > 1023 ) {
                var hiwHeight = $('#how-it-works').innerHeight() / 2;
                var bodyHeight = $('body').innerHeight() / 2;
                $('html, body').animate({
                    scrollTop: $('#how-it-works').offset().top - bodyHeight
                }, 1000, function(){ $nonScrollable.disablescroll("undo"); });
                $nonScrollable.disablescroll();
            }

        } else {
            $(".how-it-works-wrap").addClass('fadeOutDown');
            $('.how-it-works-photo-img').addClass('fadeOutDownBig');

            $('.teachers-hero-background').css({'transform' : 'translate3d(0, 0, 0)'});
            $('.teachers-hero').css({'min-height': '80vh'});

            $('.note').addClass('fadeOutRight');

            $('.note-revert').removeClass('fadeOutDown');
        }

    }, {
        offset: "50%"
    });

    $(".tech").waypoint(function(direction) {
        if ( direction == 'down' ) {
            $(this.element).addClass('tech-slide-visible');
            $('.teachers-hero-background').css({'opacity' : 0});
        } else {
            $(this.element).removeClass('tech-slide-visible');
            $('.teachers-hero-background').css({'opacity' : 1});
        }

    }, {
        offset: "100%"
    });

    $('.teachers-hero').waypoint(function(direction) {
        $('.teachers-hero-background').addClass('teachers-hero-background-visible');

        if ( direction == 'down' ) {
            $('.teachers-hero-content').addClass('animated1 fadeInDown').addClass('visibility-visible');
        } else {
            $('.teachers-hero-content').addClass('animated1 fadeInUp').addClass('visibility-visible');
        }
    }, {
        offset: "60%"
    });

    $('.teachers-hero-mask').waypoint(function(direction) {
        if ( direction == 'down' ) {
            $('.teachers-hero-content').addClass('fadeOutUp');
            $('.note-revert').addClass('animated1 fadeInUp').addClass('visibility-visible').removeClass('fadeOutDown');
        } else {
            $('.teachers-hero-content').removeClass('fadeOutUp');
            $('.note-revert').addClass('fadeOutDown');
        }

    }, {
        offset: "50%"
    });

    //------------------------------------------------------------------------//

    //load
    var floatingDiv = $('.tech-slider');

    function stickyPanel() {
        var topPosition = $('.tech-wrapper').offset().top;

        var floatingDivHeight = floatingDiv.innerHeight();
        var windowHeight = $('body').innerHeight();
        var floatingOffset = (windowHeight - floatingDivHeight) / 2;

        var footerFromTop = $('.tech-wrapper').offset().top + $('.tech-wrapper').innerHeight() - floatingOffset;
        var absPosition = footerFromTop - floatingDivHeight;

        //sticky
        if ( ($(window).scrollTop() > topPosition  - floatingOffset) && ($(window).scrollTop() < absPosition) ) {
            floatingDiv.css({'position': 'fixed', 'top': floatingOffset, 'bottom': 'auto'});
        } else if ( ($(window).scrollTop() > topPosition) && ($(window).scrollTop() > absPosition) ) {
            floatingDiv.css({'position': 'absolute', 'top': 'auto', 'bottom': 0});
        } else {
            floatingDiv.css({'position': 'absolute', 'top': 0, 'bottom': 'auto'});
        }
    }

    function floatingScroll() {
        //content
        var platformPosition = $('').offset();

        $('.tech-platform').each(function(){

            if( $(window).scrollTop() > $(this).offset().top ) {

                var thisIndex = $(this).index();
                var thisPlatform = $('.tech-slide-js').eq(thisIndex);
                var thisNav = $('.tech-navigation li').eq(thisIndex);

                thisPlatform.siblings('.tech-slide-js.current').removeClass('current');
                thisNav.siblings('.tech-navigation li').removeClass('active');

                thisNav.addClass('active');
                thisPlatform.addClass('current');

                if ( thisIndex > 0 ) {
                    $('.tech-rings').addClass('tech-rings-hidden');
                }
                if ( thisIndex == 0 ) {
                    $('.tech-rings').removeClass('tech-rings-hidden');
                }

            }
        });
    }

    $(window).on("scroll resize", function(){
        stickyPanel();
        floatingScroll();
    });

    stickyPanel();
    floatingScroll();

    //------------------------------------------------------------------------//

    // $('.instagram-slider').slick({
    //     dots: false,
    //     arrows: false,
    //     draggable: true,
    //     infinite: true,
    //     centerMode: true,
    //     centerPadding: '11.5%',
    //     autoplay: false,
    //     autoplaySpeed: 5000,
    //     speed: 500,
    //     pauseOnHover: false,
    //     pauseOnDotsHover: false,
    //     slide: '',
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     focusOnSelect: true,
    //     swipeToSlide: true,
    //     responsive: [
    //         {
    //           breakpoint: 1024,
    //           settings: {
    //             slidesToShow: 3,
    //           }
    //         },
    //         {
    //           breakpoint: 480,
    //           settings: {
    //             slidesToShow: 1,
    //             centerPadding: '23.5%',
    //           }
    //         }
    //       ]
    // });

    function getWidHeight() {
        var bodyWidth = $('body').innerWidth();
        var snapHeight = bodyWidth * 0.142857142857;
        $('.snapwidget-widget').css({ 'height': snapHeight+'px'});
    }
    getWidHeight();
    $(window).resize(function() {
        getWidHeight();
    });


    (function($) {

        var $source = $("#billing-info");
        var $sourceInput = $source.find(":input:not([type=hidden])");
        var $target = $("#shipping-info");
        var $targetInput = $target.find(":input:not([type=hidden])");

        var $chk = $(document).find('.js-mirrordata');

        var _regex = /\[(.*?)\]/;
        var _ev = "keyup blur change";

        // Update vars.
        $(window).on('onAfterAjaxUpdate', function(){
            $source = $("#billing-info");
            $sourceInput = $source.find(":input:not([type=hidden])");
            $target = $("#shipping-info");
            $targetInput = $target.find(":input:not([type=hidden])");

            $targetInput.prop('disabled', $chk.is(':checked'));
        });

        // Update on typing.
        $(document).on(_ev, $sourceInput, function(ev) {

            $chk = $(document).find('.js-mirrordata');

            if (!$chk.is(':checked')) {
                return;
            }

            mirrorField.apply(ev.target);

            return false;
        });

        $(document).on('change', $chk, function() {
            $targetInput.prop('disabled', $chk.is(':checked'));
        });

        $targetInput.prop('disabled', $chk.is(':checked'));


        function mirrorField() {

            if (!$(this).attr("name")) {
                return;
            }

            var $el = $(this);
            var mirrorVal = $el.val();
            var nameMatch = $el.attr("name").match(_regex);

            // $target = $("#shipping-info");
            // $targetInput = $target.find(":input:not([type=hidden])");

            if (!nameMatch) {
                return;
            }

            nameMatch = nameMatch[1];

            var re = new RegExp(nameMatch, "g");
            var $targetEl = $targetInput.filter(function() {
                return this.name.match(re);
            });

            $targetEl.val(mirrorVal);

            if ($el[0].id === "billing_country") {
                $targetEl.trigger("change");
            }
        }

    })(jQuery);



});//window load

//*********************************************************************//

$(window).resize(function() {

    //resize

});//window resize