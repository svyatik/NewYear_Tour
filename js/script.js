jQuery(function($) {
    // Init WOW JS for animation
    wow = new WOW({
        mobile: false
    });
    // wow.init();

    // Smooth animation when clicked on anchor link
    $('.select').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });

    $('.graysnow a ').on('click', function() {
        $('.graysnow .tour-container').toggleClass('active');
    });
});
