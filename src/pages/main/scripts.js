var popupBtn = document.querySelector('.banner__button_js');
var popup = document.querySelector('.popup-wrapper');
var popupCloseBtn = document.querySelector('.close-btn_js');
var input = popup.querySelector('input');

popupBtn.addEventListener('click', function() {
    popup.classList.add('popup-wrapper_open');
    input.focus();
})

popupCloseBtn.addEventListener('click', function() {
    popup.classList.remove('popup-wrapper_open');
    popupBtn.focus();
})

window.addEventListener('keydown', function(event) {
    // console.log(event.code);
    if(event.code === "Escape") {
        if(popup.classList.contains('popup-wrapper_open')) {
            popup.classList.remove('popup-wrapper_open');
            popupBtn.focus();
        }
    }
})




var mobileMenuOpen = document.querySelector('.header__humburger_js');
var mobileMenu = document.querySelector('.mobile');
var mobileMenuClose = document.querySelector('.mobile__close_js');

mobileMenuOpen.addEventListener('click', function() {
    mobileMenu.classList.add('mobile_open');
})

mobileMenuClose.addEventListener('click', function() {
    mobileMenu.classList.remove('mobile_open');
})