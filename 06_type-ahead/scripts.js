window.onload = () => {
  let searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('keyup', search);

  let cities = getData();
}

function search(m) {

}

function getData() {
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = search;

  httpRequest.open("GET", endpoint, false);
  httpRequest.send();
  return httpRequest.responseText;
}
