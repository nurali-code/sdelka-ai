// Меню бургер
document.querySelector('.btn__menu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header .nav').classList.toggle('active');
    document.querySelector('.header').classList.toggle('active');
});

// function _clear(el, props) {
//     props.forEach(p => el.style.removeProperty(p));
// }

// function slideUp(el, d = 400) {
//     el.style.height = el.offsetHeight + 'px';
//     el.style.transition = `height ${d}ms, margin ${d}ms, padding ${d}ms`;
//     el.style.overflow = 'hidden';
//     el.offsetHeight;
//     ['height', 'padding-top', 'padding-bottom', 'margin-top', 'margin-bottom']
//         .forEach(p => (el.style[p] = 0));
//     setTimeout(() => {
//         el.style.display = 'none';
//         _clear(el, ['height', 'padding-top', 'padding-bottom', 'margin-top', 'margin-bottom', 'overflow', 'transition']);
//     }, d);
// }

// function slideDown(el, d = 400) {
//     el.style.display = '';
//     let display = getComputedStyle(el).display;
//     if (display === 'none') display = 'block';
//     el.style.display = display;
//     const h = el.offsetHeight;
//     el.style.overflow = 'hidden';
//     ['height', 'padding-top', 'padding-bottom', 'margin-top', 'margin-bottom']
//         .forEach(p => (el.style[p] = 0));
//     el.offsetHeight;
//     el.style.transition = `height ${d}ms, margin ${d}ms, padding ${d}ms`;
//     el.style.height = h + 'px';
//     setTimeout(() => {
//         _clear(el, ['height', 'overflow', 'transition']);
//     }, d);
// }

// function slideToggle(el, d = 400) {
//     getComputedStyle(el).display === 'none'
//         ? slideDown(el, d)
//         : slideUp(el, d);
// }

// FAQ аккордеон
$('.faq__heading').on('click', function () {
    const parent = $(this).closest('.faq-item');
    $('.faq__heading').not(this).removeClass('active').next().slideUp(300);
    $('.faq-item').not(parent).removeClass('active');
    $(this).toggleClass('active').next().slideToggle(300);
    parent.toggleClass('active');
});

$('.capability__list').slick({
    dots: true,
    arrows: false,
    infinite: false,
    cennterPadding: '15px',
    speed: 300,
    variableWidth: true,
    slidesToShow: 1,
    rows: 6,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 1100,
            settings: "unslick"
        },
    ]
});