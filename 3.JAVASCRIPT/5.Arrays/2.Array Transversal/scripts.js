//! For loops ------
// Basic for loop to print numbers 1 - 5
for(let i = 1; i <= 5; i++){
    // console.log(i);
}

// Looping through an array to print its elements
const fruits = ['Apple','Banana','Mango'];
for(let i = 0; i < fruits.length; i++){
    // console.log(fruits[i]);
}

// Using 'break' to exit the loop early
for(let i = 0; i <= 10; i++){
    if(i === 5){
        break;
    }
    // console.log(i);
}

// Using 'continue' to skip an iteration
for(let i = 0; i <= 10; i++){
    if(i === 3){
        continue;
    }
    // console.log(i);
}


// Looping in reverse
for(let i = 10; i > 0; i--){
//    console.log(i);
}


//! ForEach loops ------
const numbers = [2, 4, 6, 8, 10, 12]
numbers.forEach(function(elements, index, array){
// console.log('Elements', elements);
// console.log('Index', index);
// console.log('Array', array);
})

//! Using forEach to sum the elements of an array
let sum = 0;
numbers.forEach(function(num){
    sum += num;
})
// console.log('Total Sum of array is:-',sum);

//! Modifying array elements using forEach
const square = [];
numbers.forEach(function(num) {
    square.push(num * num);
})
// console.log(square);


//! Mapping .map() ------
const number = [2, 4, 6, 8, 10, 12];
const newArraySqr = number.map(function(num, inx, Arr){
    //? console.log(num);   , it is only print the array but not stroring data in new array.

     //*for storing the elements we are using return keyWord
     return num * num;
})
//? console.log(newArraySqr);  //here we print the elements of new Array

//!  Using map to convert an array of stirngs to uppercase
const words = ['apple', 'banana', 'mango'];
const convertedWords = words.map(function(word){
    return word.toUpperCase();
})
// console.log(convertedWords);

//! FilteringArray .filter() ------
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumber = array.filter(function(num){
    // Filtering the even number 
    return num % 2 === 0;
})
// console.log(evenNumber);

const gender = ['male', 'female', 'other'];
const maleArray = gender.filter(function(gen){
    return gen === 'male';
})
// console.log(maleArray);

//! Using filter to remove falsy values from an array
const mixedArr = [0, 1, 'apple', "" , null, 'banana'];
const truthyValues = mixedArr.filter(function(values){
    return Boolean(values);
})
// console.log(truthyValues);


//! Reducing .reduce() ------
// Using reduce to sum up all elements in an array
const numb = [1, 2, 3, 4, 5, 6];
const sum1 = numb.reduce(function(acc, ele){
    // Perform our logic
    return acc + ele;
}, 0)
// console.log(sum1);

// Using reduce to find the maximum value in array
const maxNum = numb.reduce(function(acc, ele){
    if (ele > acc) {
        return ele;
    }else{
        return acc;
    }
},0)  //Here 0's is initial values
// console.log(maxNum);

// Using reduce to count the frequency of elements in an array
const fruits1 = ['Apple', 'Mango', 'Apple', 'Banana', 'Apple', 'Mango']
const fruitCount = fruits1.reduce(function(acc, current){
    if(acc[current]){
        acc[current] += 1;
    }else{
        acc[current] = 1;
    }
    return acc;
}, {})
// console.log(fruitCount);





//? -----------------------------
//! Multi-Dimensional Array
//? -----------------------------

// Creating a 2D array
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// Access the elements
// console.log(matrix[2][2]);


// Creating a 3D array
const threeDArray = [
    [
        [1, 2], [3, 4]
    ], 
    [
        [5, 6], [7, 8]
    ]
]

console.log(threeDArray);