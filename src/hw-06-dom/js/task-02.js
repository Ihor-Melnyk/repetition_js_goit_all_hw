const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const liRefs = ingredients.map((x) => {
  const liRef = document.createElement("li");
  liRef.textContent = x;
  liRef.className = "item";
  return liRef;
});
const ulRef = document.querySelector("ul#ingredients");
ulRef.append(...liRefs);
