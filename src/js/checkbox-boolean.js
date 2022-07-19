if (document.querySelector('.checkbox.--boolean')) {

    let items = document.querySelectorAll('.checkbox.--boolean');

    items.forEach(item => {
        let valueTrue, valueFalse;
        let input = item.querySelector('.checkbox__input');
        let texts = [...item.querySelectorAll('.checkbox__text')];

        texts.forEach((text, index) => {
            let value = text.textContent;
            index === 0 ? valueFalse = value : false;
            index === 1 ? valueTrue = value : false;
        });

        item.addEventListener('click', () => {
            let active = '--active';
            !item.classList.contains(active) ?
                setActive(item, input, valueTrue) :
                unsetActive(item, input, valueFalse);
        });
    })


    function setActive(item, input, value) {
        let active = '--active';
        input.value = value;
        item.classList.add(active);
    }

    function unsetActive(item, input, value) {
        let active = '--active';
        input.value = value;
        item.classList.remove(active);
    }

}