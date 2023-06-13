// 펑션을 써주면 html를 다 읽고 난 뒤에 js를 읽어준다?
$(function () {
    $('.main_slide').slick({

        vertical: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,


    });

    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
        $('h1').toggleClass('on');
    })



})