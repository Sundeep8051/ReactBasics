//Example object
const data = [
  {
    name: "Tomato",
    cost: 10,
    weight: 5,
  },
  { name: "Carrot", cost: 15, weight: 2 },
  { name: "Onion", cost: 5, weight: 7 },
];

//Transformation function
function getSortedValue(vegetable) {
  return vegetable.cost;
}

const sortOrder = "asc";
const reverseSort = sortOrder === "asc" ? 1 : -1;

//logic to sort the data
data.sort((a, b) => {
  const valueA = getSortedValue(a);
  const valueB = getSortedValue(b);

  if (typeof valueA === "string") {
    return valueA.localeCompare(valueB) * reverseSort;
  } else {
    return (valueA - valueB) * reverseSort;
  }
});
