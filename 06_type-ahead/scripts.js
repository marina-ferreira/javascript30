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

  window.citiesInfo.forEach((cityInfo) => {
    let cityName = cityInfo.city,
        regex = new RegExp(searchValue, 'i'),
        matchResult = cityName.match(regex);

    matchResult && appendResult(cityInfo, matchResult, resultList);
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

function appendResult(cityInfo, matchResult, resultList) {
  let listItem = document.createElement('li'),
      spanList = highlightResult(cityInfo.city, matchResult);

  listItem.appendChild(spanList);

  let populationSpan = document.createElement('span'),
      populationTextNode = document.createTextNode(formatNumber(cityInfo));

  populationSpan.appendChild(populationTextNode);
  listItem.appendChild(populationSpan);
  resultList.appendChild(listItem);
}

function highlightResult(cityName, matchResult) {
  let cityNameContainer = document.createElement('div'),
      noHighlightArray = cityName.split(matchResult[0]),
      listItem = document.createElement('li');

  noHighlightArray.forEach((element, index, array) => {
    let noHighlightText = document.createTextNode(element),
        highlightSpan = document.createElement('span'),
        highlightText = document.createTextNode(matchResult[0]);

    highlightSpan.className = 'highlight';
    highlightSpan.appendChild(highlightText);
    cityNameContainer.appendChild(noHighlightText);

    (index + 1 !== array.length) && cityNameContainer.appendChild(highlightSpan);
  });

  return cityNameContainer;
}
