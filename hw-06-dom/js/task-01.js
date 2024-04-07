const ulRef = document.querySelector("ul#categories");
const liRef = ulRef.querySelectorAll("li.item");

console.log(`Number of categories: ${ulRef.children.length}`);
liRef.forEach((x) => {
  console.log("Category: ", x.children[0].textContent);
  console.log("Elements: ", x.children[1].childElementCount);
});

//
