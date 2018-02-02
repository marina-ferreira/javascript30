const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
  'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
  'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

const bandsList = document.querySelector('#bands');

function strip(str) {
  return str.replace(/^(a |an |the )/i, '').trim();
}

let sortedBands = bands.sort((a, b) => strip(a) < strip(b) ? -1 : 1);
bandsList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
