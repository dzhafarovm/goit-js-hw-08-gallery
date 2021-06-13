const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulEL = document.querySelector('#ingredients');
const newArr = ingredients.map(el => {
  const li = document.createElement('li');
  li.textContent = el;
  return li;
});

ulEL.append(...newArr);

console.log(ulEL);