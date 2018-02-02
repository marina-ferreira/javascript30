let hero = document.querySelector('.hero');
let text = hero.querySelector('h1');
let walk = 200;

function shadow(e) {
  let { offsetWidth: width, offsetHeight: height } = hero;
  let { pageX: x, pageY: y } = e;

  let xWalk = Math.round((x / width * walk) - (walk / 2));
  let yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
}

hero.addEventListener('mousemove', shadow);
