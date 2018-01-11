let menuList = document.querySelector('.menu-list'),
    form = document.querySelector('.add-items'),
    storage = window.localStorage,
    items = JSON.parse(storage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();

  let text = this.querySelector('[name="add-item"]').value,
      item = { text, done: false };

  items.push(item);
  storage.setItem('items', JSON.stringify(items));
  populateList(items, menuList);
  this.reset();
}

function populateList(plates = [], platesList) {
  menuList.innerHTML = plates.map((plate, i) => {
    let checked = plate.done ? 'checked' : '';

    return `
      <li class="item">
        <input type="checkbox" data-index=${i} id=item${i} ${checked}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;

  let element = e.target,
      index = element.dataset.index;

  items[index].done = !items[index].done;
  storage.setItem('items', JSON.stringify(items));
}

form.addEventListener('submit', addItem);
menuList.addEventListener('click', toggleDone);

populateList(items, menuList);
