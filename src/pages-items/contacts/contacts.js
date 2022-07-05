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
    //Обрабатываем клик по кнопке
    jQuery(".open-map").click(function () {
        //Забираем координаты из кнопки
        var loc = jQuery(this).attr("data-coord");
        loc = JSON.parse(loc);
        //Увеличиваем карту до нужного размера
        myMap.setZoom(16, { smooth: true, centering: true });
        //Перемещаем карту к нужной метке
        myMap.panTo(loc);
        //Плавная прокрутка до блока с картой
        document.getElementById("yamap-scrolled").scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});
