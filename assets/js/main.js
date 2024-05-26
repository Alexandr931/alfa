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

function menuOpen(menuSelector) {
    menuSelector.classList.toggle('active');
    document.querySelector('html').classList.toggle('lock');
}

function menuClose(menuSelector) {
    menuSelector.classList.remove('active');
    document.querySelector('html').classList.remove('lock');
}

function initPhoneMask() {
    const phoneFields = document.querySelectorAll('input[type="tel"]');
    const maskOptions = {
        mask: '+{7} (000) 000 00-00'
    };

    phoneFields.forEach((phoneField) => {
        IMask(phoneField, maskOptions);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const headerBottom = document.querySelector('.header__bottom');

    // bunner slider
    const bunnerSliderList = document.querySelectorAll('.banner__slider');

    if (bunnerSliderList.length > 0) {
        bunnerSliderList.forEach((elem) => {
            const bunnerSlider = new Swiper(elem, {
                pagination: {
                    el: elem.closest('.slider-container').querySelector('.slider-pagination'),
                    clickable: true,
                },

                navigation: {
                    prevEl: elem.closest('.slider-container').querySelector('.slider-btn_prev'),
                    nextEl: elem.closest('.slider-container').querySelector('.slider-btn_next'),
                },

                spaceBetween: 16,
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

                navigation: {
                    prevEl: elem.closest('.slider-container').querySelector('.slider-btn_prev'),
                    nextEl: elem.closest('.slider-container').querySelector('.slider-btn_next'),
                },
                slidesPerView: 3,
                spaceBetween: 25,
                breakpoints: {
                    0: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                    },
                    575: {
                        slidesPerView: 1.7,
                        spaceBetween: 10,
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1025: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    }
                }
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

                navigation: {
                    prevEl: elem.closest('.slider-container').querySelector('.slider-btn_prev'),
                    nextEl: elem.closest('.slider-container').querySelector('.slider-btn_next'),
                },
                slidesPerView: 4,
                spaceBetween: 20,
                breakpoints: {
                    0: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                    },
                    575: {
                        slidesPerView: 1.7,
                        spaceBetween: 10,
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1025: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                }
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

            menuClose(headerBottom);

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

    // rating
    const ratings = document.querySelectorAll('.rating');
    const articleID = document.querySelector('[name="f_id_article"]');
    let articleIDValue = '';
    if (articleID) {
        articleIDValue = articleID.value;
    }

    if (ratings.length > 0) {
        initRatings();
    }

    function initRatings() {
        let ratingActive, ratingValue, ratingText;

        for (let i = 0; i < ratings.length; i += 1) {
            const rating = ratings[i];
            initRating(rating);
        }
    }

    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();

        if (rating.classList.contains('rating__set')) {
            setRating(rating);
        }
    }

    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
        ratingText = rating.querySelector('.rating__text');
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML.replace(',', '.')) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
        if (ratingText) {
            ratingText.innerHTML = `Рекомендуют ${Math.round(ratingActiveWidth)}%`
        }
    }

    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating__item');

        for (let i = 0; i < ratingItems.length; i += 1) {
            const ratingItem = ratingItems[i];

            ratingItem.addEventListener('mouseenter', (e) => {
                initRatingVars(rating);

                setRatingActiveWidth(ratingItem.value);
            });

            ratingItem.addEventListener('mouseleave', (e) => {
                setRatingActiveWidth();
            });

            ratingItem.addEventListener('click', (e) => {
                ratingItems.forEach((elem) => {
                    elem.style.pointerEvents = 'none';
                });
                initRatingVars(rating);

                ratingValue.innerHTML = i + 1;
                setRatingActiveWidth();
            });
        }
    }

    // nav slider disable
    const paginateLockList = document.querySelectorAll('.swiper-pagination-lock');

    if (paginateLockList.length > 0) {
        paginateLockList.forEach((elem) => {
            elem.closest('.slider-navigation').remove();
        })
    }

    // review full
    const reviewMoreBtnList = document.querySelectorAll('.review__more-btn');
    const reviewFullPopupName = document.querySelector('.review-full-popup__name');
    const reviewFullPopupText = document.querySelector('.review-full-popup__text');

    if (reviewMoreBtnList.length > 0) {
        reviewMoreBtnList.forEach((elem) => {
            elem.addEventListener('click', () => {
                const name = elem.closest('.review').querySelector('.review__name');
                const text = elem.closest('.review').querySelector('.review__text');

                reviewFullPopupName.textContent = name.textContent;
                reviewFullPopupText.textContent = text.textContent;
            });
        })
    }

    // dropdown menu mobile
    const dropdownBtnsList = document.querySelectorAll('.dropdown-open');

    if (dropdownBtnsList.length > 0) {
        dropdownBtnsList.forEach((elem) => {
            elem.addEventListener('click', () => {
                elem.closest('.menu-item').classList.toggle('active');
            })
        })
    }

    // header menu
    const openMenuBtns = document.querySelectorAll('.open-menu');
    const closeMenuBtns = document.querySelectorAll('.close-menu');

    openMenuBtns.forEach(function (openMenuBtn) {
        openMenuBtn.addEventListener('click', function () {
            menuOpen(headerBottom);
        })
    });

    closeMenuBtns.forEach(function (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', function () {
            menuClose(headerBottom);
        })
    });

    // gallery fancybox
    setTimeout(function () {
        Fancybox.bind('[data-fancybox="gallery"]', {
            placeFocusBack: false,
        });
    }, 2000);

    // documents fancybox
    setTimeout(function () {
        Fancybox.bind('[data-fancybox="documents"]', {
            placeFocusBack: false,
        });
    }, 2000);

    initPhoneMask();
});