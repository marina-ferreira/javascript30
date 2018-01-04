window.onload = () => {
  let items = document.querySelectorAll('li.item');
  let checkboxes = document.querySelectorAll('input.checkbox');

  let isShiftDown = false;
  let y1, y2;

  let checkBox = (e) => {
    if (!isShiftDown) {
      y1 = e.target.offsetTop;
      return;
    }

    y2 = e.target.offsetTop;

    checkboxes.forEach(checkbox => {
      if (checkbox.offsetTop > y1 && checkbox.offsetTop < y2) {
        checkbox.checked = true;
      }

      if (checkbox.offsetTop < y1 && checkbox.offsetTop > y2) {
        checkbox.checked = true;
      }
    });
  }

  document.addEventListener('keydown', (e) => isShiftDown = e.key === 'Shift');
  document.addEventListener('keyup', (e) => isShiftDown = false);
  checkboxes.forEach(checkbox => checkbox.addEventListener('change', checkBox));
}
