$(document).ready(function () {
    $('.header__toggle').on('click', function () {
        $('.header__menu').toggleClass('active');
        $('.btn-laranja').toggleClass('active');
        $(this).find('i').toggleClass('fa-x');
    });
});
