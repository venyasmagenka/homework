document.querySelector('.switch__input').addEventListener('change', function () {
  if (this.checked) {
    window.scrollBy({
      top: 1000,
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


