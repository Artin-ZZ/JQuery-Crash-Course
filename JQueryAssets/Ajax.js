$(document).ready(function () {
    $('#ajbtn').click(function () {
        alert('You Are Already In Ajax!')
    });

    //------------- Load Method------------------------
    // $('#test').load('./test.html', function (responseTxt, statusTxt, xhr) {
    //     if (statusTxt == "success") {
    //         alert('It Went Fine.');
    //     } else if (statusTxt == "error") {
    //         alert('Error: ' + xhr.statusTxt);
    //     }
    // });
    //-------------- Get Method (Same As Load But Different Way Of Doing It) ------------
    $.get('./test.html', function (data) {
        $('#test').html(data);
    });
    //------------------------ Used To Get Json File Data And Show it ------------------------
    // $.getJSON('users.json', function (data) {
    //     $.each(data, function (i, user) {
    //         $('ul#mlist').append('<li>' + user.FirstName + " " + user.LastName + '</li>');
    //     });
    // });
    // $.getJSON('users.json', function (data) {
    //     $.each(data, function (i, email) {
    //         $('ul#elist').append('<li>' + email.Email + '</li>');
    //     });
    // });

    //------------------ ajax Method type(GET): Returns data from a sepc source --------------------
    // $.ajax({
    //     type: "GET",
    //     url: "https://jsonplaceholder.typicode.com/posts",
    //     dataType: "json"
    // }).done(function (data) {
    //     console.log(data);
    //     $.map(data, function (post, i) {
    //         $('#test').append('<h2>' + post.title + '</h2><p>' + post.body + '</p>');
    //     });
    // });
    //------------------ ajax Method type(POST): Submits data To a sepc source -----------------------
    //------------------ Post Method Using Ajax ------------------------------------------------------
    $('#postform').submit(function (e) {
        e.preventDefault();

        var title = $('#title').val();
        var body = $('#body').val();
        var url = $(this).attr('action');

        $.post(url, { title: title, body: body }).done(function (data) {
            console.log('Post Saved!');
            console.log(data);
        });
    });
});