const menuIcon = document.getElementById('hambergurs');
const closeMenuIcon = document.getElementById('close_menu');
const menu = document.getElementById('mobile_menu');

// open menu
menuIcon.addEventListener('click', (e) => {
  menu.classList.add('active');
});
// close menu
closeMenuIcon.addEventListener('click', () => {
  menu.classList.remove('active');
});
// close menu whwen user click on link or outside of navbar
menu.addEventListener('click', (e) => {
  let target = e.target;
  if (target.classList.contains('link') || target.id === 'mobile_menu') {
    menu.classList.remove('active');
  }
  return;
});

// close menu on scroll
window.onscroll = () => {
  return menu.classList.remove('active');
};
