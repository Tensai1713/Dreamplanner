const menuIcon = document.querySelector('.menu-icon');
      header = document.querySelector('header')
      body = document.querySelector('body')



menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('menu-icon--active');
  header.classList.toggle('header-mobile');
  body.classList.toggle('no-scroll');
} );


const modal = document.querySelector('.modal__wrap')
const btnsModelOpen = document.querySelectorAll('.btn[type="button"]')

btnsModelOpen.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.remove('none');
    body.classList.add('no-scroll');
  });
})

const btnModalExit = document.querySelector('.modal__exit')

btnModalExit.addEventListener('click',() => {
    modal.classList.add('none');
    body.classList.remove('no-scroll');
})