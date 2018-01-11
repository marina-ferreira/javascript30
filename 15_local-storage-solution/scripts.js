const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(window.localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();

  let text = this.querySelector('[name=item]').value;
  let item = { text, done: false };

  items.push(item);
  populateList(items, itemsList);
  window.localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    let checked = plate.done ? 'checked' : '';

    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${checked} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDona(e) {
  if (!e.target.matches('input')) return;

  let element = e.target,
      index = element.dataset.index;

  items[index].done = !items[index].done;
  window.localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDona);

populateList(items, itemsList);
