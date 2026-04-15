let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {

    nav.classList.add('nav-hidden');
  } else {

    nav.classList.remove('nav-hidden');
  }
  
  lastScroll = currentScroll;
});