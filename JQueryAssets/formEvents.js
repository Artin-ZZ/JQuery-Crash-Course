$(document).ready(function() {
    $('#frmevbtn').click(function() {
        alert('You Are Already in Form Events!');
    });

    //------Messing With The Inputs in our Form---------
    $('input').focus(function() {
        $(this).css('background', 'lime');
    });

    $('input').blur(function() {
        $(this).css('background', 'white');
    });

    //------------------------------------------
    //---------For Making a Change in gender section-------
    //----Every time User Selects a Different Type Of gender Brings up an alert.------
    // $('select#gender').change(function() {
    //     alert('Changed!!');
    // });

    //--------for returning the gender's data----
    // $('select#gender').change(function(e) {
    //     alert(e.target.value);
    // });
    //---------For Returning The Form's Data-------
    $('#form').submit(function(e) {
        e.preventDefault();
        var name = $('input#name').val();
        var email = $('input#email').val();
        var gender = $('select#gender').val();
        console.log(name);
        console.log(email);
        console.log(gender);
        console.log('Submitted');
    });
});