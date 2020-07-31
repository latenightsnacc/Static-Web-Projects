$('#side-nav').toggle(
    function() {
        $('#main').css('left', '0')
    }, function() {
        $('#main').css('left', '200px')
    }
)