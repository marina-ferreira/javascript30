const images = document.querySelectorAll('.article section img');
let isImageVisible = false;

function slideImages(e) {
  images.forEach(image => {
    let top = image.getClientRects()[0].top;
    let bottom = image.getClientRects()[0].bottom;

    isImageVisible = top < window.innerHeight;

    let method = isImageVisible ? 'add' : 'remove';
    image.classList[method]('visible');
  });
}

window.addEventListener('scroll', slideImages);
