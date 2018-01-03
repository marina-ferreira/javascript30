window.onload = () => {
  let searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('keyup', search);

  getData();
}

const states = [];

function search() {
  let regex = new RegExp(this.value, 'gi');
  let matches = states.filter(stateData => stateData.city.match(regex));
  displayMatches(matches);
}

function displayMatches(matches) {
  let listItems = matches.map(stateData => {
    return `
      <li>
        <span>${stateData.city}, ${stateData.state}</span>
        <span>${stateData.population}</span>
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
  let rawNumber = [...cityInfo.population],
      formattedNumber = '', isLastNumberGroup, separator, numberGroup;

  while (rawNumber.length > 0) {
    numberGroup = rawNumber.splice(-3, 3),
    isLastNumberGroup = rawNumber.length === 0 && rawNumber.length <= 3;

    separator = isLastNumberGroup ? '' : ',';
    formattedNumber = `${separator}${numberGroup.join('')}${formattedNumber}`;
  }

  return formattedNumber;
}
