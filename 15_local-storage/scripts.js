let addItemButton = document.querySelector('button[name="add-item"]'),
    itemNameInput = document.querySelector('input[name="add-item"]'),
    item = document.querySelector('.item'),
    storage = window.localStorage;

function addItem(e) {
  storage.setItem(storage.length, itemNameInput.value);

  buildItem(itemNameInput.value);
  itemNameInput.value = '';
  itemNameInput.focus();
}

function buildList() {
  Object.keys(storage).forEach(key => buildItem(storage[key]));
}

function buildItem(itemName) {
  let newItem = item.cloneNode(true);
  newItem.querySelector('.item-name').textContent = itemName;

  item.parentElement.append(newItem);
}

window.onload = () => buildList();
addItemButton.addEventListener('click', addItem);
