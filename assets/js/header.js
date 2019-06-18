function debounce(func, wait = 5, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function updateHeader() {
  const header = document.querySelector('header');
  if (window.scrollY < 50) {
    header.classList.remove('header--scrolled');
    header.classList.add('header');
  } else {
    header.classList.add('header--scrolled');
    header.classList.remove('header');
  }
}

window.addEventListener('scroll', debounce(updateHeader));

const menu = document.querySelector('.menu');
const hamburgerWhite = document.querySelector('.header__hamburger-white');
const hamburgerBlack = document.querySelector('.header__hamburger-black');
const close = document.querySelector('.menu__close');

const openMenu = () => {
  menu.style = null;
};

const closeMenu = () => {
  menu.style.display = 'none';
};

hamburgerWhite.addEventListener('click', openMenu);
hamburgerBlack.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);