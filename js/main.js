// Detectar si estamos en la página de productos
const isProductsPage = window.location.pathname.includes('productos.html') || window.location.pathname.includes('index.html') || window.location.pathname.includes('enfermeria.html');

if (isProductsPage) {
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
}