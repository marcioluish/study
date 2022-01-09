// Object destructuring
const person = {
    name: "Marcio",
    age: 29,
  
    greet() {
      console.log("Hi, I am " + this.name);
    },
  };

// const printName = (obj) => {
const printName = ({ name }) => {
    // console.log(obj.name);
    console.log(name);
}

printName(person);
person.greet();

const { name, age } = person;
console.log(name, age);

// Array destructuring
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);