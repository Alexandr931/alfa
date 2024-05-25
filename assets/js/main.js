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
    const ourarticlessliderList = document.querySelectorAll('.our-articles__slider');

    if (ourarticlessliderList.length > 0) {
        ourarticlessliderList.forEach((elem) => {
            const ourarticlesslider = new Swiper(elem, {
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

    //related-services__slider
    const relatedservicessliderList = document.querySelectorAll('.related-services__slider');

    if (relatedservicessliderList.length > 0) {
        relatedservicessliderList.forEach((elem) => {
            const relatedservicesslider = new Swiper(elem, {
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
                spaceBetween: 25,
            });
        });
    }
    //rehabilitation-centers__slider
    const rehabilitationcenterssliderList = document.querySelectorAll('.rehabilitation-centers__slider');

    if (relatedservicessliderList.length > 0) {
        rehabilitationcenterssliderList.forEach((elem) => {
            const rehabilitationcentersslider = new Swiper(elem, {
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

    // accordion
    const ACCORDION_LIST = 'data-accordion-list'
    const ACCORDION_BUTTON = 'data-accordion-button'
    const ACCORDION_ARROW = 'data-accordion-arrow'
    const ACCORDION_CONTENT = 'data-accordion-content'
    const SECTION_OPENED = 'active'
    const ICON_ROTATED = 'rotated'

    class Accordion {
        static apply(accordionNode) {
            if (!accordionNode) {
                return
            }

            const acc = new Accordion()
            acc.accordion = accordionNode
            accordionNode.onclick = acc.onClick.bind(acc)
        }

        handleClick(button) {
            const innerSection = button.closest('.accor').querySelector('.accor-full');
            const isOpened = innerSection.classList.contains(SECTION_OPENED)

            if (isOpened) {
                this.close(innerSection)
                return
            }
            this.open(innerSection)
        }

        open(section) {
            const accordion = section.querySelector(`[${ACCORDION_CONTENT}`).closest('.accor');
            const accordionContent = section.querySelector(`[${ACCORDION_CONTENT}`)
            const accordionList = accordionContent.querySelector(`[${ACCORDION_LIST}`)
            const innerSectionHeight = accordionContent.clientHeight
            let countOfScrollHeight = 0;
            const allElementContentData = section.querySelectorAll(`[${ACCORDION_CONTENT}`)
            accordion.classList.add(SECTION_OPENED)
            section.classList.add(SECTION_OPENED)
            this.rotateIconFor(section.previousElementSibling)

            for (const item of allElementContentData) {
                countOfScrollHeight = countOfScrollHeight + item.scrollHeight;
            }

            if (accordionContent.contains(accordionList)) {
                section.style.maxHeight = `${innerSectionHeight + countOfScrollHeight}px`
                return
            }
            section.style.maxHeight = `${innerSectionHeight}px`
        }

        close(section) {
            const accordion = section.querySelector(`[${ACCORDION_CONTENT}`).closest('.accor');
            section.style.maxHeight = 0
            accordion.classList.remove(SECTION_OPENED)
            section.classList.remove(SECTION_OPENED)
            this.rotateIconFor(section.previousElementSibling)
        }

        rotateIconFor(button) {
            const rotatedIconClass = ICON_ROTATED
            const arrowElement = button.dataset.hasOwnProperty('accordionArrow') ?
                button :
                button.querySelector(`[${ACCORDION_ARROW}]`)

            if (!arrowElement) {
                return
            }

            const isOpened = arrowElement.classList.contains(rotatedIconClass)
            if (!isOpened) {
                arrowElement.classList.add(rotatedIconClass)
                return
            }
            arrowElement.classList.remove(rotatedIconClass)
        }

        onClick(event) {
            let button = event.target.closest(`[${ACCORDION_BUTTON}]`)
            if (button && button.dataset.accordionButton !== undefined) {
                this.handleClick(button)
            }
        }
    }

    const accorWrapperList = document.querySelectorAll('.accor-wrapper');

    if (accorWrapperList.length > 0) {
        accorWrapperList.forEach(function (elem) {
            Accordion.apply(elem);
        });
    }
});