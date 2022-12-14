$(document).ready(function () {
    $("#animbtn").click(function () {
        alert('You Are Already in Animations!');
    });

    $('#btnfadeout').click(function () {
        $('#box1').fadeOut(2000, function () {
            $('#btnfadeout').text('its Gone');
            $('#btnfadein').text('Button FadeIn');
        });
    });

    $('#btnfadein').click(function () {
        $('#box1').fadeIn(2000, function () {
            $('#btnfadeout').text('Button FadeOut');
            $('#btnfadein').text('Its Here');
        });
    });

    $('#btnfadetog').click(function () {
        $('#box1').fadeToggle();
    });
    //Experimental:-----------------------------
    $('#btnfadeto').click(function () {
        $('#box1').fadeTo("slow", 0.25);
    });
    //------------------------------------------

    $('#Slidedown').click(function () {
        $('#box2').slideDown(2000);
    });

    $('#Slideup').click(function () {
        $('#box2').slideUp(2000);
    });

    $('#slidetog').click(function () {
        $('#box2').slideToggle(2000);
    });

    $('#stop').click(function () {
        $('#box2').stop();
    });
    //-------------------------------------------
    $('#mright').click(function () {
        $('#boxred').animate({
            left: 500
        });
    });

    $('#mleft').click(function () {
        $('#boxred').animate({
            left: 0
        });
    });

    $('#maround').click(function () {
        var box = $('#boxred');

        box.animate({
            left: 300
        });

        box.animate({
            top: 300
        });

        box.animate({
            left: 0,
            top: 300
        });

        box.animate({
            left: 0,
            top: 0
        });
    });
});