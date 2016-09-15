jQuery(document).ready(function ($) {
    /*=================================*/
    /* TOGGLE-MENU                */
    /*=================================*/
    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
        $(".navbar-nav").slideToggle("slow");
    });
    
    /*=================================*/
    /* OWL-CAROUSEL                  */
    /*=================================*/
    $("#owl").owlCarousel({
        margin: 15
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
                , dots: false
                , nav: true
            }
            , 480: {
                items: 2
            }
            , 768: {
                items: 3
            }
        }
    });
    $("#owl2").owlCarousel({
        items: 4
        , margin: 15
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
                , dots: false
                , nav: true
            }
            , 480: {
                items: 2
            }
            , 768: {
                items: 3
            }
            , 992: {
                items: 4
            }
        }
    });
        /*=================================*/
    /* FANCYBOX                  */
    /*=================================*/
    $('.fancybox').fancybox({
        openEffect  : 'elastic'
    });
    /*=================================*/
    /* ISOTOPE FILTER                  */
    /*=================================*/
    function initIsotope() {
        $('.portfolio').each(function () {
            var $container = $(this).find('.portfolio-list');
            var $filter = $(this).find('.portfolio__controls');
            /* Init isotope */
            if ($container.hasClass('portfolio-container')) {
                $container.isotope({
                    itemSelector: '.portfolio-item'
                    , layoutMode: 'fitRows'
                , });
            }
            else {
                $container.isotope({
                    itemSelector: '.portfolio-item'
                    , layoutMode: 'masonry'
                });
            }
            /* Filter */
            $filter.on('click', '.portfolio__control', function () {
                $filter.find('.portfolio__control').removeClass('portfolio__control_active');
                $(this).addClass('portfolio__control_active');
                var filterValue = $(this).attr('data-filter');
                $container.isotope({
                    filter: filterValue
                });
                return false;
            });
        });
    }
    initIsotope();
    /* ИНПУТЫ */
    (function () {
        // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        if (!String.prototype.trim) {
            (function () {
                // Make sure we trim BOM and NBSP
                var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                String.prototype.trim = function () {
                    return this.replace(rtrim, '');
                };
            })();
        }
				[].slice.call(document.querySelectorAll('input.input__field')).forEach(function (inputEl) {
            // in case the input is already filled..
            if (inputEl.value.trim() !== '') {
                classie.add(inputEl.parentNode, 'input--filled');
            }
            // events:
            inputEl.addEventListener('focus', onInputFocus);
            inputEl.addEventListener('blur', onInputBlur);
        });

        function onInputFocus(ev) {
            classie.add(ev.target.parentNode, 'input--filled');
        }

        function onInputBlur(ev) {
            if (ev.target.value.trim() === '') {
                classie.remove(ev.target.parentNode, 'input--filled');
            }
        }
    })();
});