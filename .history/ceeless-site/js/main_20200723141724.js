$('#portfolio-btn').click(function () {
    $('#menu-modal').hide();
});

$('#header-btn').click(function () {
    $('#menu-modal').hide();
});

$('#about-btn').click(function () {
    $('#menu-modal').hide();
});

$('#our-work-btn').click(function () {
    $('#menu-modal').hide();
});

$('#download-btn').click(function () {
    $('#menu-modal').hide();
});

// ON SCROLL CHANGE LOGO
$(function() { var logo = $(".logo-"); $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    
        if (scroll >= 500) {
          if(!logo.hasClass("sml-logo")) {
            logo.hide();
            logo.removeClass('lrg-logo').addClass("sml-logo").fadeIn( "slow");
          }
        } else {
          if(!logo.hasClass("lrg-logo")) {
            logo.hide();
            logo.removeClass("sml-logo").addClass('lrg-logo').fadeIn( "slow");
          }
        }
    
    });
    });