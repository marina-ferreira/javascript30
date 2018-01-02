window.onload = () => {
  let searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('keyup', search);

  getData();
}

function search() {
  let searchValue = this.value;
  let resultContainer = document.querySelector('.search-result');
  let oldResult = document.querySelector('.result-list')

  if (!searchValue) return;
  if (!window.citiesInfo) return;

  if (oldResult) { oldResult.parentNode.removeChild(oldResult); }

  let resultList = document.createElement('ul');
  resultList.className = 'result-list';

  window.citiesInfo.forEach(cityInfo => {
    let hasFound = cityInfo.city.includes(searchValue);

    if (hasFound) {
      let cityName = document.createTextNode(cityInfo.city);
      let item = document.createElement('li');
      item.appendChild(cityName)
      resultList.appendChild(item);
    }
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
