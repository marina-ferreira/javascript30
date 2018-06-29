const  checkboxes = document.querySelectorAll('input.multiple-check-checkbox');

let inBetween = false,
    lastChecked;

let checkBox = (e) => {
  if (e.shiftKey && e.target.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) { checkbox.checked = true; }
    });
  }

  lastChecked = e.target;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', checkBox));
