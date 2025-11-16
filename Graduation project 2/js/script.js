document.querySelector('.switch__input').addEventListener('change', function(){
  if (this.checked){
    window.scrollBy({
      top:1100,
      behavior: 'smooth'
    });
  }
})