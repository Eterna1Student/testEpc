const burgerBtn = document.querySelector('#burgerBtn');
const burgerMenu = document.querySelector('#burger');
const burgerList = document.querySelector('.burger__list');
const body = document.querySelector('body');
const burgerClose = document.querySelector('#burger__close');
const burgerLink = document.querySelectorAll('#burgerLink');

function toggleBurgerMenu() {
  burgerMenu.classList.toggle('burger__active');
  burgerList.classList.toggle('burger__list_active');
  
  if (burgerMenu.classList.contains('burger__active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
}

burgerBtn.addEventListener('click', toggleBurgerMenu);
burgerClose.addEventListener('click', toggleBurgerMenu);

burgerLink.forEach(el => {
  el.addEventListener('click', toggleBurgerMenu);
});




document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeBtn = document.querySelector('.close');
    
    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
});




