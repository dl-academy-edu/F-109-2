var popupBtn = document.querySelector('.banner-button-js');
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