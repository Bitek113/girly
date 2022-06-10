
function myFunction(x) {
  x.classList.toggle("change");
}

const mobileNav = document.querySelector('ul');
const burgerIcon = document.querySelector('.menu');

burgerIcon.addEventListener('click', function () {
  mobileNav.classList.toggle('active');
  burgerIcon.classList.toggle('active');

})

const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach((link) => link.addEventListener('click', (e) => {
  const key = e.target.dataset.key;

  
  const section = document.querySelector(`.${key}`).getBoundingClientRect().top + window.pageYOffset - 1;

  // menu.classList.remove('active');
  // burgerBtn.classList.remove('active');

  window.scrollTo({
    top: section,
    behavior: 'smooth'
  });
}));
