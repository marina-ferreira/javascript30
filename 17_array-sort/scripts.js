const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
  'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
  'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

const bandList = document.querySelector('.band-list');

function strip(str) {
  return str.replace(/^(a |an |the )/gi, '').trim();
}

let sortedBands = bands.sort((a, b) => strip(a) < strip(b) ? -1 : 1);

bandList.innerHTML = sortedBands.map(band => {
  return `<li class="band">${band}</li>`;
}).join('');
