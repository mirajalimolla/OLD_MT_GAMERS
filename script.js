// Set header scrolling effect to change background and position
$(function header() {
    $(window).on("scroll", function() {
        if($(window).scrollTop()) {
            $("#header").addClass("change_header");
        } else{
            $("#header").removeClass("change_header");
        }
    });
});

// Create typing Effect
let effect = new Typed('.typing', {
    strings: ['Youtuber', 'Gamer', 'Content Creator', 'Live Steamer'],
    typeSpeed: 100,
    backSpeed:50,
    loop:true
});