const name = "Marcio";
let age = 28;
const hasHobbies = true;

// name = "Luis";
age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
};

const add = (a, b) => a + b;
const addOne = (a) => a + 1;

console.log(add(1, 2));
console.log(addOne(1));

console.log(summarizeUser(name, age, hasHobbies));
