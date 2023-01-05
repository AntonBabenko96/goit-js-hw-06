const numberLink = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberLink.length}`)
const listEl = document.querySelectorAll('#categories>li');
listEl.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}, 
Numbers: ${el.lastElementChild.children.length}`);
});