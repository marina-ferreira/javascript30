window.onload = () => {
  let searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('keyup', search);

  getData();
}

const states = [];

function search() {
  let regex = new RegExp(this.value, 'gi');
  let matches = states.filter(stateData => stateData.city.match(regex));
  displayMatches(this.value, matches);
}

function displayMatches(wordToMatch, matches) {
  let list = document.querySelector('ul.search-result'),
      regex = new RegExp(wordToMatch, 'gi');

  if (wordToMatch == '') { return list.innerHTML = ''; }

  let listItems = matches.map(stateData => {
    let cityName = stateData.city.replace(regex, `<span class="highlight">${wordToMatch}</span>`),
        stateName = stateData.state.replace(regex, `<span class="highlight">${wordToMatch}</span>`),
        population = Number(stateData.population).toLocaleString();

    return `
      <li>
        <span>${cityName}, ${stateName}</span>
        <span>${population}</span>
      </li>
    `;
  }).join('');

  list.innerHTML = listItems;
}

function getData() {
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

  fetch(endpoint).then(response => response.json())
                 .then(data => states.push(...data));
}
