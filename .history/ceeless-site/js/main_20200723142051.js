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
var scroll = $(window).scrollTop();
if (scroll >= 500) {
    $(".logo-web").hide();
}
