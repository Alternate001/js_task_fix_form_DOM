'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  input.placeholder = input.name[0].toLocaleUpperCase() + input.name.slice(1);
  input.parentElement.append(label);
  label.textContent = input.name.toLocaleUpperCase();
});
