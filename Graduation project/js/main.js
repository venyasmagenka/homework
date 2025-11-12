// ===================================== Burger
(function () {
  document.addEventListener("click", burgerInit);
  function burgerInit(e) {
    const body = document.querySelector(".body");
    const target = e.target;
    const burgerIcon = target.closest(".burger-icon");
    if (burgerIcon) {
      if (body.classList.contains("body--opened-menu")) {
        body.classList.remove("body--opened-menu");
      } else {
        body.classList.add("body--opened-menu");
      }
    }
  }
  document.addEventListener("click", linkInit);
  function linkInit(e) {
    const body = document.querySelector(".body");
    const target = e.target;
    const linkIcon = target.closest(".nav__item");
    if (linkIcon && document.documentElement.clientWidth <= 900) {
      if (body.classList.contains("body--opened-menu")) {
        body.classList.remove("body--opened-menu");
      } else {
        body.classList.add("body--opened-menu");
      }
    }
  }
})();

// ===================================== Modal

(function () {
  const btn = document.querySelector('.about__img-button');
  const modal = document.querySelector('.modal');
  const body = document.querySelector('.body');

  btn.addEventListener('click', event => {
    event.preventDefault()
    body.classList.add('body--opened-modal');
  });

  modal.addEventListener('click', event => {
    if (event.target.closest('.modal__cancel') || event.target.classList.contains('modal') && event.target) {
      event.preventDefault()
      body.classList.remove('body--opened-modal');
    }
  });

  document.addEventListener('keydown', event => {
    event.preventDefault()
    if (event.code === 'Escape') {
      body.classList.remove('body--opened-modal');
    }
  });

})();

// ===================================== Tabs

(function () {
  const tabControls = document.querySelector('.tab-controls')
  tabControls.addEventListener('click', ToggleTab)
  function ToggleTab(e) {

    const tabControl = e.target.closest('.tab-control__link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('tab-control__link--active')) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab-control__link--active')
    const activeContent = document.querySelector('.tab-content--show')

    activeContent.classList.remove('tab-content--show')
    tabContent.classList.add('tab-content--show')

    activeControl.classList.remove('tab-control__link--active')
    tabControl.classList.add('tab-control__link--active')
  }
})();

// ===================================== Accordion

(function () {
  const accordionList = document.querySelectorAll('.accordion-list')

  accordionList.forEach(el => {
    el.addEventListener('click', e => {
      const accordionControl = e.target.closest('.accordion-list__control')
      if (!accordionControl) return
      const accordionItem = accordionControl.parentElement
      const accordionContent = accordionControl.nextElementSibling

      const allAccordionItems = el.querySelectorAll('.accordion-list__item')
      const allAccordionContents = el.querySelectorAll('.accordion-list__content')

      allAccordionItems.forEach(item => {
        if (item !== accordionItem) {
          item.classList.remove('accordion-list__item--opened')
        }
      })

      allAccordionContents.forEach(content => {
        if (content !== accordionContent) {
          content.style.maxHeight = null
        }
      })

      accordionItem.classList.toggle('accordion-list__item--opened')

      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
      } else {
        accordionContent.style.maxHeight = null
      }
    })
  })
})();

// ===================================== Slider

(function () {
  const swiper = new Swiper('.gallery__slider', {

    spaceBetween: 15,
    slidesPerView: 1.5,

    pagination: {
      el: '.gallery__pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },

    breakpoints: {
      451: {
        slidesPerView: 2,
      },
      601: {
        slidesPerView: 3,
      },
      801: {
        spaceBetween: 32,
      },
      1101: {
        slidesPerView: 4,
      }
    }

  })

})();
(function () {
  new Swiper('.reviews__slider', {

    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,

    navigation: {
      nextEl: '.reviews__next',
      prevEl: '.reviews__prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    breakpoints: {
      901:{
        slidesPerView: 1.5,
      },
      1201:{
        slidesPerView: 2.1,
      }
    }

  })

})();

// ===================================== Mask for telephone

(function (){
  const telinputs=document.querySelectorAll('input[type="tel"]')
  const im=new Inputmask('+7 (999) 999-99-99')
  im.mask(telinputs)
})();