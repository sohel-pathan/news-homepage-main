// select elements
const hambergur = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// toggle menu
hambergur.addEventListener('click', () => {
  hambergur.classList.toggle('active');
  menu.classList.toggle('active');
});

// close menu when user click on closeicon, link and outside of navbar
menu.addEventListener('click', (e) => {
  let target = e.target;
  if (target.classList.contains('link') || target.id === 'menu') {
    hambergur.classList.remove('active');
    menu.classList.remove('active');
  }
});

// close menu on scroll
window.onscroll = () => {
  menu.classList.remove('active');
  hambergur.classList.remove('active');
};
