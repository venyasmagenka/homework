
// ===================================== Burger

const burgerIcon = document.querySelector('.burger-icon');
const body = document.body;

burgerIcon.addEventListener('click', function (event) {
  event.stopPropagation();
  body.classList.toggle('body--opened-menu');
});

document.addEventListener('click', function (event) {
  const isClickInsideMenu = event.target.closest('.header__tel');
  const isClickOnBurger = event.target.closest('.burger-icon');

  if (!isClickInsideMenu && !isClickOnBurger) {
    body.classList.remove('body--opened-menu');
  }
});

// ===================================== SWITCHER

document.querySelector('.switch__input').addEventListener('change', function () {
  if (this.checked) {
    window.scrollBy({
      top: 900,
      behavior: 'smooth'
    });
  }
})

// ===================================== MODAL

const modal = document.querySelector('.modal')
const modalButton = document.querySelector('.header__modal-button')

modalButton.addEventListener('click', openModal)
modal.addEventListener('click', closeModal)

function openModal(e) {
  e.preventDefault()
  document.body.classList.toggle('body--opened-modal')
}

function closeModal(e) {
  e.preventDefault()

  const target = e.target

  if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
    document.body.classList.remove('body--opened-modal')
  }

}


// ===================================== TEL


const telinputs = document.querySelectorAll('input[type="tel"]')
const im = new Inputmask('+7 (999) 999-99-99')
im.mask(telinputs)

// ===================================== Accordion

const accordionList = document.querySelectorAll('.accordion-list')

accordionList.forEach(el => {
  el.addEventListener('click', e => {
    const accordionControl = e.target.closest('.accordion-list__control')
    if (!accordionControl) return
    e.preventDefault()

    const accordionItem = accordionControl.parentElement
    const accordionContent = accordionControl.nextElementSibling

    if (!accordionItem || !accordionContent) return

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

// ===================================== Swiper

const swiper = new Swiper('.ad__slider', {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.ad__next',
    prevEl: '.ad__prev',
  },

  breakpoints: {
    600: {
      slidesPerView: 1.4,
      spaceBetween: 10
    },
    710: {
      slidesPerView: 1.7,
    },
    900: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 2.4,
    },
    1100: {
      slidesPerView: 2.7,
    },
    1250: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
  }

});

new Swiper('.vacancies__slider', {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.vacancies__next',
    prevEl: '.vacancies__prev',
  },

  breakpoints: {
    600: {
      slidesPerView: 1.4,
      spaceBetween: 10
    },
    710: {
      slidesPerView: 1.7,
    },
    900: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 2.4,
    },
    1100: {
      slidesPerView: 2.7,
    },
    1250: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
  }
});

// ===================================== Footer__up

const element = document.querySelector('.header__modal');
const stopHeight = 5835;
const topHeight = 138;
let isStopped = false;

window.addEventListener('scroll', function () {
  if (window.innerWidth < 1550) {
    return;
  }

  const scrollY = window.pageYOffset;

  if (scrollY >= stopHeight && !isStopped) {
    element.style.position = 'absolute';
    element.style.top = stopHeight + topHeight + 'px';
    isStopped = true;
  } else if (scrollY < stopHeight && isStopped) {
    element.style.position = 'fixed';
    element.style.top = '120px';
    isStopped = false;
  }
});




