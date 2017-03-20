/**
 * Created by EZAZ on 2/15/2017.
 */

(function ($) {
    "use strict";

    $(window).load(function(){
        $('#loading').fadeOut(1500);
        $('#into-logo').addClass('animated fadeInDown');
    });
    $(document).ready(function() {



    /*Parallax
     * -----------------------------------------------------------------------------------------------------------*/
    $(window).stellar({
        horizontalScrolling: false
    });

        /* Scrolling Smoothly
         * ----------------------------------------------------------------------------------------*/
        $('a[href*=#]:not([href=#])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 0
                    }, 1000);
                    return false;
                }
            }
        });


        /* NAVBAR SCROLLING
         * ----------------------------------------------------------------------------*/
        var scroll_start = 0;
        var startchange = $('.navbar-inverse');
        var offset = startchange.offset();
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.navbar-inverse').css('background-color', 'rgba(0,0,0,1)');
            } else {
                $('.navbar-inverse').css('background-color', 'transparent');
            }
        });

        /*Wow Aniamtion
        * -------------------------------------------------------------------------------------*/

        var wow = new WOW(
            {
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       0,          // distance to the element when triggering the animation (default is 0)
                mobile:       true,       // trigger animations on mobile devices (default is true)
                live:         true,       // act on asynchronously loaded content (default is true)
                callback:     function(box) {
                    // the callback is fired every time an animation is started
                    // the argument that is passed in is the DOM node being animated
                },
                scrollContainer: null // optional scroll container selector, otherwise use window
            }
        );
        wow.init();


        /* PORTFOLIO first
         * --------------------------------------------------------------------------*/
        $(".first-portfolio").hover(function(){
            $('.portfolio-first-overlay', this)
                .addClass('animated fadeIn visible ')
                .show();
        });

        $(".first-portfolio").mouseleave(function(){
            $('.portfolio-first-overlay', this)
                .removeClass('animated fadeOut visible')
                .hide()
        });



        /*Porfolio 1
         * ----------------------------------------------------------------------------------------*/
        $(".single-portfolio").hover(function(){
            $('.portfolio-overlay', this)
                .addClass('animated fadeIn visible ')
                .show();
        });

        $(".single-portfolio").mouseleave(function(){
            $('.portfolio-overlay', this)
                .removeClass('animated fadeOut visible')
                .hide()

        });



        /* PORTFOLIO 2
         * ---------------------------------------------------------------------*/
        $(".second-portfolio").hover(function(){
            $('.portfolio-2-overlay', this)
                .addClass('animated fadeIn visible ')
                .show();
        });

        $(".second-portfolio").mouseleave(function(){
            $('.portfolio-2-overlay', this)
                .removeClass('animated fadeOut visible')
                .hide()

        });



        /* PORTFOLIO 3
         * --------------------------------------------------------------------------*/
        $(".third-portfolio").hover(function(){
            $('.portfolio-3-overlay', this)
                .addClass('animated fadeIn visible ')
                .show();
        });

        $(".third-portfolio").mouseleave(function(){
            $('.portfolio-3-overlay', this)
                .removeClass('animated fadeOut visible')
                .hide()

        });



        /* PORTFOLIO 4
         * --------------------------------------------------------------------------*/
        $(".fourth-portfolio").hover(function(){
            $('.portfolio-4-overlay', this)
                .addClass('animated fadeIn visible ')
                .show();
        });

        $(".fourth-portfolio").mouseleave(function(){
            $('.portfolio-4-overlay', this)
                .removeClass('animated fadeOut visible')
                .hide()
        });



        /* PORTFOLIO 5
         * --------------------------------------------------------------------------*/
        $(".fifth-portfolio").hover(function(){
            $('.portfolio-5-overlay', this)
                .addClass('animated fadeIn visible ')
                .show();
        });

        $(".fifth-portfolio").mouseleave(function(){
            $('.portfolio-5-overlay', this)
                .removeClass('animated fadeOut visible')
                .hide()

        });



        /* PORTFOLIO 6
         * --------------------------------------------------------------------------*/
        $(".sixth-portfolio").hover(function(){
            $('.portfolio-6-overlay', this)
                .addClass('animated fadeIn visible ')
                .show();
        });

        $(".sixth-portfolio").mouseleave(function(){
            $('.portfolio-6-overlay', this)
                .removeClass('animated fadeOut visible')
                .hide()

        });




    });
})
    
    (jQuery);
