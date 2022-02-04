document.addEventListener('DOMContentLoaded', () => {
  +function headerSlider() {
    const imagesLinks = [...document.querySelectorAll('.header__visual-slider-link')]
    const tabsLinks = [...document.querySelectorAll('.header__visual-tab-link')]

    const tabs = [...document.querySelectorAll('.header__visual-tab')]
    const images = [...document.querySelectorAll('.header__visual-image')]

    const slider = new Swiper('.header__visual-slider.swiper', {
      loop: true,
      speed: 700
    })

    setActiveTab(0)

    slider.on('slideChange', () => {
      tabs.forEach((tab, index) => {
        if (index === slider.realIndex) {
          setActiveTab(index)
        }
      });
    });

    tabs.forEach((tab, index) => {
      tab.addEventListener('mouseenter', () => {
        setActiveTab(index)
        slider.slideToLoop(index)
      })
    })

    imagesLinks.forEach((image, index) => {
      image.addEventListener('click', () => {
        setActiveImage(index)
      })
    })

    tabsLinks.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        setActiveImage(index)
      })
    })

    function setActiveTab(index) {
      tabs.forEach((tab, ndx) => {
        if (index === ndx) {
          tab.classList.add('active')
        } else {
          tab.classList.remove('active')
        }
      })
    }

    function setActiveImage(index) {
      images.forEach((image, ndx) => {
        if (index === ndx) {
          image.classList.add('active')
        } else {
          image.classList.remove('active')
        }
      })
    }
  }();

  +function productSlider() {
    const slider = new Swiper('.productSlider__slider .swiper', {
      speed: 700,
      slidesPerView: 4,
      navigation: {
        nextEl: '.productSlider__slider-button-next',
        prevEl: '.productSlider__slider-button-prev',
        disabledClass: 'productSlider__slider-button-disabled'
      },
      scrollbar: {
        el: '.productSlider__slider-scrollbar',
        draggable: true,
        dragClass: 'productSlider__slider-scrollbar-drag'
      }
    })
  }();
})
