let lastScroll = 0;
const nav = document.querySelector('nav');
const filterBar = document.querySelector('.filter-bar');
const GAP = 32;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    nav.classList.add('nav-hidden');

    if (filterBar) {
      filterBar.style.top = GAP + "px";
    }
  } else {
    nav.classList.remove('nav-hidden');

    if (filterBar) {
      filterBar.style.top = nav.offsetHeight + GAP + 'px';
    }
  }
  
  lastScroll = currentScroll;
});