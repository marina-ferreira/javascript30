let header = document.querySelector('header'),
    menu = document.querySelector('.menu');

window.addEventListener('scroll', debounce(handleNav));

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
  };
};

function handleNav(e) {
  let hasReachedTop = header.offsetHeight - menu.offsetHeight - window.scrollY < 0;

  if (hasReachedTop) {
    menu.style.top = 0;
    menu.style.position = 'fixed';
  } else {
    menu.style.top = 'auto';
    menu.style.position = 'relative';
  }
}
