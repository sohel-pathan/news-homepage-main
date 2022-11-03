// select elements
const hambergur = document.getElementById('hambergur_icon');
const menu = document.getElementById('menu');

// toggle menu
hambergur.addEventListener('click', () => {
  menu.classList.toggle('active');

  // toogle between menu icon and close menu icon
  if (hambergur.dataset.image == 'open') {
    hambergur.dataset.image = 'close';
    hambergur.src = './images/icon-menu-close.svg';
  } else {
    hambergur.dataset.image = 'open';
    hambergur.src = './images/icon-menu.svg';
  }
});

// close menu when user click on closeicon, link and outside of navbar
menu.addEventListener('click', (e) => {
  let target = e.target;
  if (target.classList.contains('link') || target.id === 'menu') {
    hambergur.src = './images/icon-menu.svg';
    hambergur.dataset.image = 'open';
    return menu.classList.remove('active');
  }
});

// close menu on scrollY
window.onscroll = () => {
  hambergur.src = './images/icon-menu.svg';
  hambergur.dataset.image = 'open';
  menu.classList.remove('active');
};
