const removeBtn = document.querySelector('button[data-action="decrement"]') 
const addBtn = document.querySelector('button[data-action="increment"]') 
const counterValue = document.querySelector("#value");
counterValue.innerHTML = 0;
const handleClickAdd = () => {counterValue.innerHTML = +counterValue.innerHTML + 1}; 
const handleClickRemove = () => {counterValue.innerHTML = counterValue.innerHTML - 1};
removeBtn.addEventListener("click", handleClickRemove)
addBtn.addEventListener("click", handleClickAdd)

