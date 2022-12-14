//For Button Events
$(document).ready(function () {
    // Both click & on Events do the Same Thing:
    //-----------------(.click)---------------------
    // $('.btn').click(function() {
    //     alert('Fuck You!')
    // });
    //-------------------(.on)-----------------------
    // $('.btn').on('click', function() {
    //     alert('Fuck You')
    // });
    //-------------(hide/show paragraph)-------------
    $('#btn1').click(function () {
        $('.p1').show();
    });

    $('#btn2').click(function () {
        $('.p1').hide();
    });
    //-------------------------------
    //----------(Button Alert)---------
    $('#btn3').click(function () {
        alert('Here is an Alert!');
    });

    //---------(Toggle/(both Show/hide Together))------
    $('#btn4').click(function () {
        $('.p2').toggle();
    });
    //-------------Double Click(Show/Hide(Toggle))------
    $('#btn5').dblclick(function () {
        $('.p3').toggle();
    });
    //----------------Hover To(Show/Hide(Toggle))-----------
    //-------This "Hover" is just a shortcut for mouseenter/mouseleave :
    //----------It's Better TO Use mouseenter/mouseleave -----------
    //------------------------------------------------------------------
    // $('#btn6').hover(function() {
    //     $('.p4').toggle();
    // });
    $('#btn6').on('mouseenter', function () {
        $('.p4').toggle();
    });

    $('#btn6').on('mouseleave', function () {
        $('.p4').toggle();
    });
    //--------------For Getting And Printing The Mouse Coords----------
    // $(document).on('mousemove', function(e) {
    //     console.log('Coords: Y: ' + e.clientY, 'X: ' + e.clientX)
    // });
    //----------------------------------
    $('#evbtn').click(function () {
        alert('You Are Already in Events!');
    });
});