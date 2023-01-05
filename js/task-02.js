const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const arrEl = ingredients.map((el) => {
  const add = document.createElement("li");
  add.classList.add("item");
  add.textContent = el;
  return add
})

list.append(...arrEl);