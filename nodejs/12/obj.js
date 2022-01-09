const person = {
  name: "Marcio",
  age: 29,

  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ["Sports", "Cooking"];

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(hobbies.map((hobby) => "Hobby: " + hobby));
// console.log(hobbies);

hobbies.push('Programming');

// const copiedArray = hobbies.slice();
const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => {
  return args;
}

console.log(toArray(1, 2, 3, 4, 5));