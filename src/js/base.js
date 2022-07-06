document.addEventListener('DOMContentLoaded', () => {
  +function form() {
    const forms = [...document.querySelectorAll('.form')]
    const labels = [...document.querySelectorAll('.form__label')]
    const phones = [...document.querySelectorAll('.form__phone')]
  
    forms.forEach(form => {
      if (form.querySelector('.form__policy-input')) {
        const submit = form.querySelector('[type="submit"]')
        const policy = form.querySelector('.form__policy-input')

        policy.addEventListener('change', () => {
          if (!policy.checked) {
            submit.classList.add('disabled')
          } else {
            submit.classList.remove('disabled')
          }
        })
      }
    })

    labels.forEach(label => {
      const input = label.querySelector('.form__input')
      input.addEventListener('change', () => {
        if (input.value != '' && input.value.length) {
          label.classList.add('value');
        } else {
          label.classList.remove('value');
        }
      });
    });
  }();

  +function more() {
    if (document.querySelector('[data-more-link]') && 
        document.querySelector('[data-more-content]')) {
      let links = [...document.querySelectorAll('[data-more-link]')];
      let contents = [...document.querySelectorAll('[data-more-content]')];
      
      // если ссылка одна на странице (чтобы не делать циклы)
      if (links.length > 0 && links.length == 1) {
        links = links[0];
        contents = contents[0];
        let inner = contents.querySelector('[data-more-inner]');
        let padding = 20;
        let height = inner.getBoundingClientRect().height + padding + 'px';

        links.addEventListener('click', event => {
          event.preventDefault();
          if (!links.classList.contains('--active')) {
            links.textContent = 'Скрыть';
            links.classList.add('--active');
            contents.style.opacity = 1;
            contents.style.maxHeight = height;
            contents.style.paddingTop = `${padding}px`;
            contents.classList.add('--active');
          } else {
            links.textContent = 'Подробнее...';
            links.classList.remove('--active');
            contents.style.opacity = 0;
            contents.style.maxHeight = 0;
            contents.style.paddingTop = 0;
            contents.classList.remove('--active');
          }
        })
      } else {

      }
    }
  }();
})
