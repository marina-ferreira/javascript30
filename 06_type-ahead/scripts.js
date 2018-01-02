window.onload = () => {
  let searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('keyup', search);

  getData();
}

function search() {
  let searchValue = this.value,
      resultContainer = document.querySelector('.search-result'),
      oldResult = document.querySelector('.result-list');

  oldResult && oldResult.parentNode.removeChild(oldResult);

  if (!searchValue || !window.citiesInfo) return;

  let resultList = document.createElement('ul');
  resultList.className = 'result-list';

  window.citiesInfo.forEach(cityInfo => {
    let hasFound = cityInfo.city.includes(searchValue);

    hasFound && appendResult(cityInfo, resultList);
  });

  resultContainer.appendChild(resultList);
}

function getData() {
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = search;

  httpRequest.open("GET", endpoint, false);
  httpRequest.send();
  window.citiesInfo = JSON.parse(httpRequest.responseText);
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

function appendResult(cityInfo, resultList) {
  let listItem = document.createElement('li'),
      cityName = document.createTextNode(`${cityInfo.city}, ${cityInfo.state}`),
      popElement = document.createElement('span'),
      populationNumber = formatNumber(cityInfo),
      popElementText = document.createTextNode(populationNumber);

  listItem.appendChild(cityName);
  popElement.appendChild(popElementText);
  listItem.appendChild(popElement);
  resultList.appendChild(listItem);
}
