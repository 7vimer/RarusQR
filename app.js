const form = document.querySelector('form');
const selects = form.querySelectorAll('select');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // отменяем отправку формы

  let isAnySelectEmpty = false;
  selects.forEach((select) => {
    if (select.value === '') {
      isAnySelectEmpty = true;
    }
  });

  if (isAnySelectEmpty) {
    return;
  }

  const modal = new bootstrap.Modal(document.querySelector('#pushApplication'))
  modal.show()

});