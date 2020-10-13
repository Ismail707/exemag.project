(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

        // START MENU JS
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 50) {
                $('.main-nav').addClass('menu-shrink');
            } else {
                $('.main-nav').removeClass('menu-shrink');
            }
        });		
        // END MENU JS

        // Mean Menu
        jQuery('.mean-menu').meanmenu({
            meanScreenWidth: "991"
        });
        
        // Travle Slider JS
        $('.travle-slider').owlCarousel({
            items:1,
            loop:true,
            margin:1,
            smartSpeed: 400,
            nav: true,
            autoplay: true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            dots: false,
            navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-next'></i>"
            ],
        });

        //  Post-Six Slider JS
        $('.post-slider').owlCarousel({
            items:1,
            loop:true,
            margin:1,
            smartSpeed: 400,
            nav: true,
            autoplay: true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            dots: false,
            navText: [
                "<i class='icofont-long-arrow-left'></i>",
                "<i class='icofont-long-arrow-right'></i>"
            ],
        });

        // Tteam Slider JS
        $('.team-slider').owlCarousel({
            singleItem: true,
            loop:true,
            items:1,
            center:true,
            margin:1,
            nav: false,
            dots: true,
            smartSpeed: 400,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            
        });

        // Fashion Slider JS
        $('.fashion-sider').owlCarousel({
            singleItem: true,
            loop:true,
            items:1,
            center:true,
            margin:1,
            nav: false,
            dots: true,
            smartSpeed: 400,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            
        });


        // Fashion Slider JS
        $('.mas-slider').owlCarousel({
            singleItem: true,
            loop:true,
            items:1,
            center:true,
            margin:1,
            nav: false,
            dots: true,
            smartSpeed: 400,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            
        });

        // Home Slider-Five JS
        $('.home-slider-five').owlCarousel({
            singleItem: true,
            loop:true,
            items:1,
            center:true,
            margin:1,
            nav: false,
            dots: true,
            smartSpeed: 400,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            
        });

        // Popup youtube JS
        $('.popup-youtube').magnificPopup({
            disableOn: 300,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
            
        // HOME Slider JS
        $('.home-slide').owlCarousel({
            items:1,
            loop:true,
            margin:1,
            smartSpeed: 400,
            nav: true,
            autoplay: true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            dots: false,
            navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-next'></i>"
            ],
        });

        // post-one coment-slider  JS
        $('.coment-slider').owlCarousel({
            items:1,
            loop:true,
            margin:1,
            smartSpeed: 400,
            nav: true,
            autoplay: true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            dots: false,
            navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-next'></i>"
            ],
        });

        // HOME Slider-four JS
        $('.home-slide-four').owlCarousel({
            items:1,
            loop:true,
            margin:1,
            smartSpeed: 400,
            nav: true,
            autoplay: true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            dots: false,
            navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-next'></i>"
            ],
        });

        // PRELOADER
            jQuery(window).on('load',function(){
                jQuery(".loader").fadeOut(500);
            });

            // WOW JS
            new WOW().init();

        // Back to top 
        $('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-simple-up"></i></div>');
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        }); 
        $('#toTop').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 900);
            return false;
        });
            
                

        // Search Box JS
        $('.search-toggle').addClass('closed');
        $('.search-toggle .search-icon').click(function(e) {
            if ($('.search-toggle').hasClass('closed')) {
            $('.search-toggle').removeClass('closed').addClass('opened');
            $('.search-toggle, .search-area').addClass('opened');
            $('#search-terms').focus();
            } else {
            $('.search-toggle').removeClass('opened').addClass('closed');
            $('.search-toggle, .search-area').removeClass('opened');
            }
        });
        
        /*-- Dropdown js --*/
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;

        for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        } else {
        dropdownContent.style.display = "block";
        }
        });
    }


});


    
}(jQuery));