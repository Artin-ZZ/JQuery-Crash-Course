$(document).ready(function () {
    $('#dombtn').click(function () {
        alert('You Are Already in Dom Manipulation!');
    });

    $('#btn-1').click(function () {
        $('p.para2').toggleClass('tgClass');
    });

    $('p.para1').css('color', 'red');

    $('#myDiv').text('Hello World!');

    // $('#myDiv').html('<h3>Hello World!</h3>');
    // $('ul').append('<li>Append List Item</li>');
    // $('ul').prepend('<li>prepend List Item</li>');

    //------Forces The a Tag To open a new tab--------------
    $('a#arg').attr('target', '_blank');

    //----------Wrap mthod----------------------
    //-------wraps them in their own h1 or whatever tag----------------
    // $('p').wrap('<h1>');
    //----------wrapAll(wraps all p's in one tag)---------------------
    // $('p').wrapAll('<h1>');
    //---------------------------------------------------------

    //---------------Inserting new item into our list------------------------
    $('#newItem').keyup(function (e) {
        var code = e.which;
        if (code == 13) {
            e.preventDefault();
            $('ul').append('<li>' + e.target.value + '</li>');
        }
    });
    //-------------------------------------------------------------------------
    //---------------putting array values in jquery into a new list----------------
    var myArr = ['Artin', 'Fatemeh', 'Arsa', 'Amir', 'Sadaf'];

    $.each(myArr, function (i, val) {
        $('#users').append('<li>' + val + '</li>');
    });
    //--------------------------------------------------------------------------------
    //---------------Creating an Array With Existing List-----------------------------
    // var newArr = $('ul#list li').toArray();
    // console.log(newArr);
    //--------------------------------------------------------------------------------
});