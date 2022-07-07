document.addEventListener("DOMContentLoaded", () => {
    +(function headerSlider() {
        const imagesLinks = [...document.querySelectorAll(".header-slider__visual-slider-link")];
        const tabsLinks = [...document.querySelectorAll(".header-slider__visual-tab-link")];

        const tabs = [...document.querySelectorAll(".header-slider__visual-tab")];
        const images = [...document.querySelectorAll(".header-slider__visual-image")];

        const slider = new Swiper(".header-slider__visual-slider.swiper", {
            loop: true,
            speed: 700,
        });

        setActiveTab(0);

        slider.on("slideChange", () => {
            tabs.forEach((tab, index) => {
                if (index === slider.realIndex) {
                    setActiveTab(index);
                }
            });
        });

        tabs.forEach((tab, index) => {
            tab.addEventListener("mouseenter", () => {
                setActiveTab(index);
                slider.slideToLoop(index);
            });
        });

        imagesLinks.forEach((image, index) => {
            image.addEventListener("click", () => {
                setActiveImage(index);
            });
        });

        tabsLinks.forEach((tab, index) => {
            tab.addEventListener("click", () => {
                setActiveImage(index);
            });
        });

        function setActiveTab(index) {
            tabs.forEach((tab, ndx) => {
                if (index === ndx) {
                    tab.classList.add("active");
                } else {
                    tab.classList.remove("active");
                }
            });
        }

        function setActiveImage(index) {
            images.forEach((image, ndx) => {
                if (index === ndx) {
                    image.classList.add("active");
                } else {
                    image.classList.remove("active");
                }
            });
        }
    })();

    +(function productSlider() {
        const slider = new Swiper(".productSlider__slider .swiper", {
            speed: 700,
            slidesPerView: 4,
            navigation: {
                nextEl: ".productSlider__slider-button-next",
                prevEl: ".productSlider__slider-button-prev",
                disabledClass: "productSlider__slider-button-disabled",
            },
            scrollbar: {
                el: ".productSlider__slider-scrollbar",
                draggable: true,
                dragClass: "productSlider__slider-scrollbar-drag",
            },
        });
    })();

    +(function yandexMapContacts() {
        /*
         * Для поиска координат использую API https://yandex.ru/map-constructor/location-tool/
         */

        ymaps.ready(function () {
            // yamap - ID блока, в котором инициализируется карта
            var myMap = new ymaps.Map(
                    "yamap",
                    {
                        //Берём центр Москвы
                        center: [55.633125387006935, 37.439506224853424],
                        zoom: 12,
                    },
                    {
                        searchControlProvider: "yandex#search",
                    }
                ),
                // Создаём макет содержимого.
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold; border-color: 6px;">$[properties.iconContent]</div>'),
                //Добавляем маркеры офисов указывая их координаты
                myPlacemarkWithContent_1 = new ymaps.Placemark(
                    [55.63361068585124, 37.4388855315842],
                    {
                        hintContent: "Центральный офис WiseWater",
                        balloonContent: 'Москва, Киевское шоссе, Бизнес-парк "Румянцево", корпус А, 1 подъезд, 4 этаж',
                    },
                    {
                        iconLayout: "default#imageWithContent",
                        iconImageHref: "../images/yandex-map-icons/office.png",
                        iconImageSize: [50, 50],
                        iconImageOffset: [-25, -50],
                        iconContentOffset: [15, 15],
                        iconContentLayout: MyIconContentLayout,
                    }
                );
            myPlacemarkWithContent_2 = new ymaps.Placemark(
                [59.852588821295065, 30.309774160049347],
                {
                    hintContent: "Офис Санкт-Петербург",
                    balloonContent: 'Ленинский пр-т, 168. БЦ "Энергия", офис 613',
                },
                {
                    iconLayout: "default#imageWithContent",
                    iconImageHref: "../images/yandex-map-icons/office.png",
                    iconImageSize: [50, 50],
                    iconImageOffset: [-25, -50],
                    iconContentOffset: [15, 15],
                    iconContentLayout: MyIconContentLayout,
                }
            );
            //Добавляем маркеры на карту
            myMap.geoObjects.add(myPlacemarkWithContent_1).add(myPlacemarkWithContent_2);
        });
    })(); // Вызов функции (IIFE)
});
