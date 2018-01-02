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

  window.citiesInfo.forEach((cityInfo, index) => {
    let cityName = cityInfo.city.toLowerCase();
    let matchResult = cityName.match(searchValue); // Chicago -- ag

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
  let listItem,
      cityNameContainer = document.createElement('div');

  if (matchResult) {
    listItem = highlightResult(matchResult)
  } else {
    listItem = document.createElement('li');
    let cityName = document.createTextNode(`${cityInfo.city}, ${cityInfo.state}`);
    listItem.appendChild(cityName);
  }

  popElement = document.createElement('span'),
  populationNumber = formatNumber(cityInfo),
  popElementText = document.createTextNode(populationNumber);

  popElement.appendChild(popElementText);
  listItem.appendChild(popElement);
  resultList.appendChild(listItem);
}

function highlightResult(matchResult) {
  let noHighlightArray = matchResult.input.split(matchResult[0]); // ["ab", "efab", "f"]
  let cityNameContainer = document.createElement('div');
  let listItem = document.createElement('li');

  noHighlightArray.forEach((element, index, array) => {
    let noHighlightSpan = document.createElement('span');
    noHighlightText = document.createTextNode(element);
    noHighlightSpan.appendChild(noHighlightText);

    cityNameContainer.appendChild(noHighlightSpan);

    if (index + 1 !== array.length) {
      let highlightSpan = document.createElement('span');
      let highlightText = document.createTextNode(matchResult[0]);
      highlightSpan.className = 'highlight';
      highlightSpan.appendChild(highlightText);
      noHighlightSpan.after(highlightSpan);
    } else {
      listItem.appendChild(cityNameContainer);
    }
  });

  return listItem;
}
