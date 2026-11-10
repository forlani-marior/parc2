const header = document.querySelector('.site-header');
const menu = document.querySelector('.mobile-nav');

function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 24);
}

window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('pageshow', updateHeader);
updateHeader();

menu.addEventListener('click', event => {
  if (event.target.closest('a')) menu.open = false;
});

menu.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.open) {
    menu.open = false;
    menu.querySelector('summary').focus();
  }
});

