$(document).ready(function () {
    $('.menu-burger').click(function (e) { 
        e.preventDefault();
        $('.menu-burger-list').toggleClass('active');
    });
});

