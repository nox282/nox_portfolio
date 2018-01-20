/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
/*$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});*/

//navbar sticks top when scrolled past
$(function() {
    $(window).on('scroll', () => {
        let threshold = $("header").outerHeight(true);
        let navbarSpacerValue = $('.navbar').outerHeight(true);
        if($(window).scrollTop() > threshold && !$('.navbar').hasClass('navbar-fixed-top')) {
            $('.navbar').addClass('navbar-fixed-top');
            $('#before-navbar').css('padding-bottom', `${navbarSpacerValue}px`);
        } else if($(window).scrollTop() < threshold && $('.navbar').hasClass('navbar-fixed-top')) {
            $('.navbar').removeClass('navbar-fixed-top');
            $('#before-navbar').css('padding-bottom', '0px');
        }
    });
});


// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Close menu on click (mobile mode)
// Thanks : https://github.com/twbs/bootstrap/issues/9013#issuecomment-39698247
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
        $(this).collapse('hide');
    }
});