//! push() --> Adding element at last index in array
const fruits = ['apple','Banana'];
// console.log('Original fruits', fruits);
const newArrayOfFruits = fruits.push('Kiwi','Mango');
// console.log('Modified fruits', fruits);

//! Using .unshift() to add elements at the beginning of an array
const fruit = ['apple','Banana'];
// console.log('Original fruits', fruit);
const newArrayOfFruit = fruit.unshift('Kiwi','Mango');
// console.log('Modified fruits', fruit);


//! Using .pop() to remove & return element at the last of an array
const animal = ['Cat', 'Dog', 'Elephat'];
// console.log('Original Animal', animal);
const popedAnimal = animal.pop();
// console.log(popedAnimal);
// console.log('After poped Animal', animal);

//! Using .pop() to remove & return element at the beginning of an array
const animals = ['Cat', 'Dog', 'Elephat'];
// console.log('Original Animal', animals);
const shiftedAnimal = animals.shift();
// console.log(shiftedAnimal);
// console.log('After shifted Animal', animals);


//! Array Sze (.length) 
const colors = ['Red','Yellow','Green','Black'];
const arrayLength = colors.length;

// Modifiy the lenght of the array
colors.length = 2;
console.log(colors);