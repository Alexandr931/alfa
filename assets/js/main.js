function setWidthScrollBar() {
    let div = document.createElement('div');

    div.style.position = 'absolute';
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth;
}

document.addEventListener('DOMContentLoaded', function () {
    // bunner slider
    const bunnerSliderList = document.querySelectorAll('.banner__slider');

    if (bunnerSliderList.length > 0) {
        bunnerSliderList.forEach((elem) => {
            const bunnerSlider = new Swiper(elem, {
                pagination: {
                    el: elem.closest('.slider-container').querySelector('.slider-pagination'),
                    clickable: true,
                },

                loop: true,

                navigation: {
                    prevEl: elem.closest('.slider-container').querySelector('.slider-btn_prev'),
                    nextEl: elem.closest('.slider-container').querySelector('.slider-btn_next'),
                },
            });
        });
    }
    //clinic
    const slider2List = document.querySelectorAll('.slider-2');

    if (slider2List.length > 0) {
        slider2List.forEach((elem) => {
            const slider2 = new Swiper(elem, {
                pagination: {
                    el: elem.closest('.slider-container').querySelector('.slider-pagination'),
                    clickable: true,
                },

                loop: true,

                navigation: {
                    prevEl: elem.closest('.slider-container').querySelector('.slider-btn_prev'),
                    nextEl: elem.closest('.slider-container').querySelector('.slider-btn_next'),
                },
                slidesPerView: 3,
                spaceBetween: 25,
            });
        });
    }
    
    // slider-3
    const slider3List = document.querySelectorAll('.slider-3');

    if (slider3List.length > 0) {
        slider3List.forEach((elem) => {
            const slider3 = new Swiper(elem, {
                pagination: {
                    el: elem.closest('.slider-container').querySelector('.slider-pagination'),
                    clickable: true,
                },

                loop: true,

                navigation: {
                    prevEl: elem.closest('.slider-container').querySelector('.slider-btn_prev'),
                    nextEl: elem.closest('.slider-container').querySelector('.slider-btn_next'),
                },
                slidesPerView: 3,
                spaceBetween: 25,
            });
        });
    }

    // slider-4
    const slider4List = document.querySelectorAll('.slider-4');

    if (slider4List.length > 0) {
        slider4List.forEach((elem) => {
            const slider4 = new Swiper(elem, {
                pagination: {
                    el: elem.closest('.slider-container').querySelector('.slider-pagination'),
                    clickable: true,
                },

                loop: true,

                navigation: {
                    prevEl: elem.closest('.slider-container').querySelector('.slider-btn_prev'),
                    nextEl: elem.closest('.slider-container').querySelector('.slider-btn_next'),
                },
                slidesPerView: 4,
                spaceBetween: 20,
            });
        });
    }
    //our-articles
    const slider5List = document.querySelectorAll('.slider-5');

    if (slider5List.length > 0) {
        slider5List.forEach((elem) => {
            const slider5 = new Swiper(elem, {
                pagination: {
                    el: elem.closest('.slider-container').querySelector('.slider-pagination'),
                    clickable: true,
                },

                loop: true,

                navigation: {
                    prevEl: elem.closest('.slider-container').querySelector('.slider-btn_prev'),
                    nextEl: elem.closest('.slider-container').querySelector('.slider-btn_next'),
                },
                slidesPerView: 3,
                spaceBetween: 25,
            });
        });
    }

    // Popups
    function popupClose(popupActive) {
        const formPopup = popupActive.querySelector('.form');
        if (formPopup) {
            const additional = formPopup.querySelector('.additional__field');
            if (additional) {
                additional.value = "Неизвестная форма"
            }
        }
        popupActive.classList.remove('open');
        document.querySelector('html').classList.remove('lock');
        document.querySelector('html').style.paddingRight = 0;
        document.querySelectorAll('.padding-lock').forEach(function (elem) {
            elem.style.paddingRight = 0;
        });
    }

    const popupOpenBtns = document.querySelectorAll('.popup-btn');
    const popups = document.querySelectorAll('.popup');
    const closePopupBtns = document.querySelectorAll('.close-popup');

    closePopupBtns.forEach(function (el) {
        el.addEventListener('click', function (e) {
            popupClose(e.target.closest('.popup'));
        });
    });

    popupOpenBtns.forEach(function (el) {
        el.addEventListener('click', function (e) {
            const path = e.currentTarget.dataset.path;
            const currentPopup = document.querySelector(`[data-target="${path}"]`);
            const currentForm = currentPopup.querySelector('.form');
            const title = el.dataset?.title || 'Получите консультацию специалиста бесплатно';
            const additional = el.dataset?.additional || '';

            popups.forEach(function (popup) {
                popupClose(popup);
                popup.addEventListener('click', function (e) {
                    if (!e.target.closest('.popup__content')) {
                        popupClose(e.target.closest('.popup'));
                    }
                });
            });

            // menuClose(header);

            if (currentForm) {
                const formTitle = currentForm.querySelector('.form-popup__title')
                const addition = currentForm.querySelector('.additional__field');
                if (addition) {
                    addition.value = additional;
                }
                if (formTitle && !currentForm.classList.contains('form-review')) {
                    formTitle.textContent = title;
                }
            }
            currentPopup.classList.add('open');
            document.querySelector('html').classList.add('lock');
            document.querySelector('html').style.paddingRight = setWidthScrollBar() + 'px';
            document.querySelectorAll('.padding-lock').forEach(function (elem) {
                elem.style.paddingRight = setWidthScrollBar() + 'px';
            });
        });
    });

});