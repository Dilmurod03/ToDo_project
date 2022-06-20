//FIND:

const dollars = [10, 200, 300, 260, 320]

// console.log(dollars.find(dollar => dollar >= 250));

const animals = [
  {
    id: 0,
    name: "Bobik",
    type: "dog"
  },

  {
    id: 1,
    name: "Simba",
    type: "lion"
  },

  {
    id: 2,
    name: "Nemo",
    type: "fish"
  }
]

// console.log(animals.find(animal => animal.name === "Nemo"));

//FINDINDEX:
// console.log(animals.findIndex(animal => animal.type === "fish"));

//OPTIONAL CHAINING:
let user = {
  address: {
    street: "Yunusobod"
  }
}; // a user without "address" property


// console.log(user.address?.street);
