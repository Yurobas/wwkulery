if (document.querySelector(".form__slider")) {
    let sliders = [...document.querySelectorAll(".form__slider")];
    if (!sliders) return;
    
    let elems = sliders;
    let openTooltipStack = "";

    elems.forEach((el) => {
        let slider = el.querySelector(".form__slider-body");
        let input = el.querySelector(".form__slider-input");
        let type = slider.dataset.type;

        switch (type) {
            case "sanuzel":
                noUiSlider.create(slider, {
                    start: 1,
                    step: 1,
                    connect: [true, false],
                    range: {
                        min: 1,
                        max: 5,
                    },
                    pips: {
                        mode: "count",
                        values: 5,
                    },
                });
                break;
            case "people":
                noUiSlider.create(slider, {
                    start: 1,
                    step: 1,
                    connect: [true, false],
                    range: {
                        min: 1,
                        max: 5,
                    },
                    pips: {
                        mode: "count",
                        values: 5,
                    },
                });
                break;
            case "performance":
                noUiSlider.create(slider, {
                    start: 0,
                    step: 1,
                    connect: [true, false],
                    tooltips: [true],
                    range: {
                        min: 2,
                        max: 10,
                    },
                    pips: {
                        mode: "count",
                        values: 5,
                    },
                });
                break;
            case "users":
                noUiSlider.create(slider, {
                    start: 0,
                    step: 10,
                    connect: [true, false],
                    range: {
                        min: 20,
                        max: 50,
                    },
                    pips: {
                        mode: "count",
                        values: 4,
                    },
                });
                break;
            case "points":
                noUiSlider.create(slider, {
                    start: 0,
                    step: 1,
                    connect: [true, false],
                    range: {
                        min: 1,
                        max: 5,
                    },
                    pips: {
                        mode: "count",
                        values: 5,
                    },
                });
                break;
            case "cost":
                noUiSlider.create(slider, {
                    start: 5000,
                    step: 1000,
                    connect: [true, false],
                    tooltips: [true],
                    range: {
                        min: [5000],
                        "35%": [10000, 2000],
                        "65%": [20000, 2000],
                        max: [30000],
                    },
                    pips: {
                        mode: "positions",
                        values: [0, 35, 65, 100],
                        stepped: true,
                    },
                });
                break;
        }

        // Проверка для добавления слов "больше", "меньше", "от" и "до" крайним значениям
        let isMax, isMin, to, from, cost;
        el.classList.contains("--max") ? (isMax = true) : false;
        el.classList.contains("--min") ? (isMin = true) : false;
        el.classList.contains("--from") ? (from = true) : false;
        el.classList.contains("--cost") ? (cost = true) : false;
        el.classList.contains("--to") ? (to = true) : false;

        // Кликабельные значения
        let pips = [...slider.querySelectorAll(".noUi-value")];
        let pipsLength = pips.length - 1;
        pips.forEach((pip) => {
            pip.addEventListener("click", clickOnPip);
        });
        function clickOnPip() {
            let value = Number(this.getAttribute("data-value"));
            slider.noUiSlider.set(value);
        }

        // Подсветка текущего значения и синхронизация значений input и slider
        slider.noUiSlider.on("update", function (values, handle) {
            let value = Number(values[handle]);
            let firstValue = slider.noUiSlider.options.range.min;
            let lastValue = slider.noUiSlider.options.range.max;
            pips.forEach((pip, index) => {
                pip.classList.remove("--active");
                let pipValue = Number(pip.dataset.value);
                if (pipValue === value) {
                    pip.classList.add("--active");
                }
            });

            if (value === lastValue && from) {
                input.value = "от " + value;
            } else if (value === lastValue && isMax) {
                input.value = "больше " + value;
            } else if (value === firstValue && isMin) {
                input.value = "меньше " + value;
            } else if (value !== lastValue && to) {
                input.value = "до " + value;
            } else if (cost) {
                input.value = parseInt(value).toLocaleString();
            } else {
                input.value = value;
            }

            // Tooltips
            if (el.querySelector(".noUi-tooltip")) {
                let tooltip = el.querySelector(".noUi-tooltip");
                tooltip.classList.add("--active");
                tooltip.textContent = input.value;

                clearTimeout(openTooltipStack);
                openTooltipStack = setTimeout(() => {
                    tooltip.classList.remove("--active");
                }, 1500);
            }
        });

        // Добавление префикса значениям
        pips.forEach((pip, index) => {
            if (index === pipsLength && from) {
                let text = pip.textContent;
                pip.textContent = "от " + text;
            } else if (index === pipsLength && isMax) {
                let text = pip.textContent;
                pip.textContent = "больше " + text;
            } else if (index === 0 && isMin) {
                let text = pip.textContent;
                pip.textContent = "меньше " + text;
            } else if (index !== pipsLength && to) {
                let text = pip.textContent;
                pip.textContent = "до " + text;
            } else if (cost) {
                let text = pip.textContent;
                pip.textContent = parseInt(text).toLocaleString();
            }
        });
    });
}
