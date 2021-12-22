function addClearHandler(e) {

  const target = e.currentTarget;

  const clear = target.querySelector('.clear');

  const btns = target.querySelector('.dropdown__btns');

  let toggled = btns.classList.contains('dropdown__btns_space_between');

  let disabled = (clear.style.display !== 'block')

  if (disabled) {
    clear.style.display = 'block';
  };

  !toggled && btns.classList.add('dropdown__btns_space_between');

};

function removeClearHandler(e) {

  const target = e.currentTarget;

  const clear = target.querySelector('.clear');

  const btns = target.querySelector('.dropdown__btns');

  let toggled = btns.classList.contains('dropdown__btns_space_between');

  if (clear.style.display !== 'none') {
    clear.style.display = 'none';
  };

  toggled && btns.classList.remove('dropdown__btns_space_between');

};

export { addClearHandler,removeClearHandler };
