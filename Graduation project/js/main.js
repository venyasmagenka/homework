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
