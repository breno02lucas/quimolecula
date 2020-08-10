$(document).ready(function(){

    $('.menuIcon').click(function(){        
        $('#main-menuRespon').slideToggle("slow");
    });

    var cabHeight = $('#cabMenu').height();
    var windowHeight = $(window).height();

    $('#main-menuRespon').css('height', windowHeight - cabHeight);
    $('#main-menuRespon').css('top', cabHeight);
});