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

// =====================================

(function () {
  const btn = document.querySelector('.about__img-button');
  const modal = document.querySelector('.modal');
  const body = document.querySelector('.body');

  btn.addEventListener('click', () => {
    body.classList.add('body--opened-modal');
  });
  
  modal.addEventListener('click', event => {
    if (event.target.closest('.modal__cancel') || event.target.classList.contains('modal') && event.target) {
      body.classList.remove('body--opened-modal');
    }
  });

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      body.classList.remove('body--opened-modal');
    }
  });

})();
