document.querySelector('.switch__input').addEventListener('change', function () {
  if (this.checked) {
    window.scrollBy({
      top: 1000,
      behavior: 'smooth'
    });
  }
})

// ===================================== MODAL

const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.header__modal-button');

if (modalButton) {
  modalButton.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    document.body.classList.add('body--opened-modal');
  });
}

if (modal) {
  modal.addEventListener('click', function(e) {
    if (e.target === modal || e.target.closest('.modal__cancel')) {
      e.preventDefault();
      document.body.classList.remove('body--opened-modal');
    }
  });
}

// Закрытие по ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && document.body.classList.contains('body--opened-modal')) {
    document.body.classList.remove('body--opened-modal');
  }
});

// ===================================== TEL


const telinputs = document.querySelectorAll('input[type="tel"]')
const im = new Inputmask('+7 (999) 999-99-99')
im.mask(telinputs)


