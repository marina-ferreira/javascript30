const images = document.querySelectorAll('.article section img');
let isImageVisible = false;

function debounce(func, wait = 20, immediate = true) {
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

function slideImages(e) {
  images.forEach(image => {
    let halfHeight = image.getClientRects()[0].top + image.height / 2;

    isImageVisible = halfHeight < window.innerHeight && halfHeight > 0;

    let method = isImageVisible ? 'add' : 'remove';
    image.classList[method]('visible');
  });
}

window.addEventListener('scroll', debounce(slideImages, 30));
