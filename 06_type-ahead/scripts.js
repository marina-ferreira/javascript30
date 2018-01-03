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
  let regex = new RegExp(wordToMatch, 'gi');

  let listItems = matches.map(stateData => {
    let cityName = stateData.city.replace(regex, `<span class="highlight">${wordToMatch}</span>`);
    let stateName = stateData.state.replace(regex, `<span class="highlight">${wordToMatch}</span>`);

    return `
      <li>
        <span>${cityName}, ${stateName}</span>
        <span>${formatNumber(stateData.population)}</span>
      </li>
    `;
  }).join('');

  let list = document.querySelector('ul.search-result');
  list.innerHTML = listItems;
}

function getData() {
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

  fetch(endpoint).then(response => response.json())
                 .then(data => states.push(...data));
}

function formatNumber(cityInfo) {
  let rawNumber = [...cityInfo],
      formattedNumber = '', isLastNumberGroup, separator, numberGroup;

  while (rawNumber.length > 0) {
    numberGroup = rawNumber.splice(-3, 3),
    isLastNumberGroup = rawNumber.length === 0 && rawNumber.length <= 3;

    separator = isLastNumberGroup ? '' : ',';
    formattedNumber = `${separator}${numberGroup.join('')}${formattedNumber}`;
  }

  return formattedNumber;
}
