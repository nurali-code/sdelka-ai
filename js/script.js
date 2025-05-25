// Меню бургер
$('.btn__menu').on('click', function () {
    $(this).toggleClass('active');
    $('.header .nav, body').toggleClass('active');
});

function scrollChatToBottom() {
    const chatBody = document.querySelector('.chat__body');
    if (chatBody) { chatBody.scrollTop = chatBody.scrollHeight; }
}
scrollChatToBottom();


// FAQ аккордеон
$('.faq__heading').on('click', function () {
    const parent = $(this).closest('.faq-item');
    $('.faq__heading').not(this).removeClass('active').next().slideUp(300);
    $('.faq-item').not(parent).removeClass('active');
    $(this).toggleClass('active').next().slideToggle(300);
    parent.toggleClass('active');
});

$('.live__slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    cennterPadding: '0',
    speed: 300,
    slidesToShow: 2,
    asNavFor: '.live__navbar',
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});
$('.live__navbar').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cennterPadding: '0px',
    variableWidth: true,
    asNavFor: '.live__slider',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});
$('.reviews__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    cennterPadding: '14px',
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                variableWidth: false,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 720,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
            }
        },
    ]
});