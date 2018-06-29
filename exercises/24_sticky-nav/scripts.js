let header = document.querySelector('.sticky-nav-header'),
    menu = document.querySelector('.sticky-nav-menu');

window.addEventListener('scroll', debounce(handleNav));

function handleNav(e) {
  let isAtTop = header.offsetHeight - menu.offsetHeight - window.scrollY < 0,
      method = isAtTop ? 'add' : 'remove';

  menu.classList[method]('fixed');
}

function debounce(laFonction, wait = 15, immediate = true) {
  let timeout;

  return function() {
    let context = this, args = arguments;

    let later = function() {
      timeout = null;
      !immediate && laFonction.apply(context, args);
    };

    let callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    callNow && laFonction.apply(context, args);
  }
}
