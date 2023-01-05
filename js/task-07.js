const rangeInp = document.querySelector("#font-size-control");
const text = document.querySelector('#text')
rangeInp.addEventListener('input', (e) => {
  return (text.style.fontSize = `${rangeInp.value}px`);
});