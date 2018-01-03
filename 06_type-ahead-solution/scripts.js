window.onload = () => {
  getData()

  const searchInput = document.querySelector('.search');
  searchInput.addEventListener('keyup', displayMatches);
}

const cities = [];

function getData() {
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

  fetch(endpoint).then(untypedResponse => untypedResponse.json())
                 .then(data => cities.push(...data));
}

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    let regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  let matchArray = findMatches(this.value, cities);
  let html = matchArray.map(place => {
    return `
      <li>
        <span class="name">${place.city}, ${place.state}</span>
        <span class="population">${place.population}</span>
      </li>
    `;
  }).join('');

  let suggestions = document.querySelector('.suggestions');
  suggestions.innerHTML = html;
}
