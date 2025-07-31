

const products = [
  { name: "Apple", category: "fruit" },
  { name: "Carrot", category: "vegetable" },
  { name: "Banana", category: "fruit" },
    { name: "pen", category: "item" },
      { name: "ink-pen", category: "item" },
];

const grouped = products.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  acc[item.category].push(item.name);
  return acc;
}, {});

console.log(grouped);
Output: { fruit: ['Apple', 'Banana'], vegetable: ['Carrot'] }