//Write your own code here
//DON'T touch any other files!
//1 select them all
const brs = document.querySelectorAll("br");
console.log(brs);
//2 loop through them
brs.forEach(removeElement);
//3 remove() them
function removeElement(element) {
  element.remove();
}
// give all sections class filled
//1
const sections = document.querySelectorAll("section");
console.log(sections);
//2
sections.forEach(addClass);
//3
function addClass(elm) {
  elm.classList.add("filled");
}
//.classList.add("filled");
// Remove all elements that come before section
sections.forEach(removeElementBefore);

function removeElementBefore(item) {
  item.previousElementSibling.remove();
}
