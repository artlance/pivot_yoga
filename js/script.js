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
        dots: true,
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
            case 'Purple Heather':
                labelColor = '5F3C73';
                break;
            case 'Charcoal':
                labelColor = '363636';
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

    //------------------------------------------------------------------------//

    $(document).on("change", "#payment_method input", function() {
        $("#payment_form").html('Loading...');
        $(this).sendRequest("shop:onUpdatePaymentMethod", {
            update: {
                "#payment_form": "shop-paymentform"
            }
        });
    });

    //------------------------------------------------------------------------//

    $('.how-step').hover(function() {
        $(this).removeClass('how-step-disabled').siblings('.how-step').addClass('how-step-disabled');
    }, function() {
        $('.how-step').removeClass('how-step-disabled');
    });

    $('.how-step').on('click', function(event) {
        event.preventDefault();
        var slideIndex = $(this).index();
        $('.how-steps-block').addClass('steps-modal-active');
        $('.how-step-slider').slick('setPosition');
        $('.how-step-slider').slick('slickGoTo', parseInt(slideIndex) );
    });

    $('.step-back-link').on('click', function(event) {
        event.preventDefault();
        $('.how-steps-block').addClass('steps-modal-fade');
        setTimeout(function(){
            $('.how-steps-block').removeClass('steps-modal-active').removeClass('steps-modal-fade');
        }, 300);
    });

    $('.step-next-link').on('click', function(event) {
        event.preventDefault();
        $('.how-step-slider').slick('slickNext');
    });

    //------------------------------------------------------------------------//

    //slider
    $('.how-step-slider').slick({
        dots: false,
        arrows: false,
        draggable: true,
        infinite: true,
        centerMode: false,
        centerPadding: '0px',
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 500,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slide: '.how-step-slide',
        slidesToShow: 1,
        slidesToScroll: 1,
        //asNavFor: '',
        fade: true
    });

    //------------------------------------------------------------------------//

    $('.js-design-features-list').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      adaptiveHeight: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            arrows: false,
            dots: true,
            customPaging : function(slider, i) {
              console.log(slider.$slides[i]);
              var tabTitle = $(slider.$slides[i]).find('.js-feature-card-heading').text();
              return '<a>' + tabTitle + '</a>';
            }
          }
        },
      ]
    });

    //------------------------------------------------------------------------//

    const countdown = function(_config) {
      const tarDate = $(_config.target).data('date').split('-');
      const day = parseInt(tarDate[0]);
      const month = parseInt(tarDate[1]);
      const year = parseInt(tarDate[2]);
      let tarTime = $(_config.target).data('time');
      let tarhour, tarmin;

      if (tarTime != null) {
        tarTime = tarTime.split(':');
        tarhour = parseInt(tarTime[0]);
        tarmin = parseInt(tarTime[1]);
      }

      let months = [31, new Date().getFullYear() % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      let dateNow = new Date();
      let dayNow = dateNow.getDate();
      let monthNow = dateNow.getMonth() + 1;
      let yearNow = dateNow.getFullYear();
      let hourNow = dateNow.getHours();
      let minNow = dateNow.getMinutes();
      let count_day = 0, count_hour = 0, count_min = 0;
      let count_day_isSet = false;
      let isOver = false;
      const countDownDate = new Date(year, month-1, day, tarhour, tarmin, 0, 0).getTime();

      $(_config.target+' .day .word').html(_config.dayWord);
      $(_config.target+' .hour .word').html(_config.hourWord);
      $(_config.target+' .min .word').html(_config.minWord);
      $(_config.target+' .sec .word').html(_config.secWord);

      const updateTime = () => {

        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        requestAnimationFrame(updateTime);

        $(_config.target+' .day .num').html(addZero(days));
        $(_config.target+' .hour .num').html(addZero(hours));
        $(_config.target+' .min .num').html(addZero(minutes));
        $(_config.target+' .sec .num').html(addZero(seconds));

        if (distance < 0) {
          $(".message-global").remove();
        }
      }

      updateTime();
    }

    const addZero = (x) => (x < 10 && x >= 0) ? "0"+x : x;

    const efcc_countdown = new countdown({
      target: '.countdown',
      dayWord: ' days',
      hourWord: ' hours',
      minWord: ' mins',
      secWord: ' secs'
    });


    //------------------------------------------------------------------------//

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

    $('.teachers-title h2, .teachers-slider, .teachers-navigation, .reviews-slider, .get-started-content, .js-cm-form, .product-teachers-content *, .video-toggle-title, .video-toggle-play, .product-design-title, .product-design-description, .product-design-more, .product-faq-title, .faq-navigation, .faq, .product-tech-group, .product-tech-title, .teacher, .teacher-info-content, .hero-inner, .info-inner-content, .teachers-cta-content, .breadcrumbs, .how-testimonial-img, .how-testimonial-block, .teacher-testimonial-title, .teacher-testimonial-link, .teacher-course, .teacher-courses-title, .map-col, .contact-title, .contact-note, .feedback, .media-information-download, .media-information-list, .media-information-title, .news-item, .news-title').waypoint(function(direction) {
        $(this.element).addClass('animated1 fadeInUp').addClass('visibility-visible');
    }, {
        offset: "85%"
    });

    $('.product-title, .product-price-st, .product-price-mo, .product-description, .color-group, .product-navigation, .product-thumbnails-wrapper').waypoint(function(direction) {
        $(this.element).addClass('animated1 fadeInUp').addClass('visibility-visible');
    }, {
        offset: "95%"
    });

    $('.product-gallery-wrapper, .product-design-image, .how-step').waypoint(function(direction) {
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

function submitOverride(){
      $('#shipping-info :input').removeAttr('disabled');
      $('#shipping-info :input').attr('readonly', 'readonly');
      $('body').bind('onAjaxError', function(e){
        $('#shipping-info :input').removeAttr('readonly');
        $('#shipping-info :input').attr('disabled', 'disabled');
      });
    }