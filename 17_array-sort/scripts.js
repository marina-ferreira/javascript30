const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
  'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
  'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

const articlesRegex = new RegExp(/\bthe\b|\ban\b|\ba\b/, 'gi'),
      bandList = document.querySelector('.band-list');

let sortedBands = bands.sort((a, b) => {
  let strippedA = a.replace(articlesRegex, ' ').trim(),
      strippedB = b.replace(articlesRegex, ' ').trim();

  if (strippedA < strippedB) return -1;
  if (strippedA > strippedB) return 1;

  return 0;
});

bandList.innerHTML = sortedBands.map(band => {
  return `<li class="band">${band}</li>`;
}).join('');
