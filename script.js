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

const playVideoBtn = document.querySelector('.video__play-btn')
const video = document.querySelector('.video__media')
const videoControls = document.querySelector('.video__play')
const pauseVideoBtn = document.querySelector('.video__pause-btn')
const portfolioVideo = document.querySelector('.portfolio__video')
playVideoBtn.addEventListener('click', () => {

  if (video.paused) {
    video.play();
    videoControls.classList.add('none');
    pauseVideoBtn.classList.add('none')
  }
  else {
    video.pause();
  }
  
});

video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    videoControls.classList.add('none');
  }
  else {
    video.pause();
    videoControls.classList.remove('none');
    pauseVideoBtn.classList.add('none');
  }
});

portfolioVideo.addEventListener('mouseenter', () => {
  if(videoControls.classList.contains('none'))
  {
    pauseVideoBtn.classList.remove('none');
  }
  else {
    pauseVideoBtn.classList.add('none');
  }
  
})

portfolioVideo.addEventListener('mouseleave', () => {
    pauseVideoBtn.classList.add('none');
})