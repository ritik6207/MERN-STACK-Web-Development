//?=======================
//! ==> .toString() 
//?=======================

//! Coverting a Number to a String
const age = 30;
const ageStr = age.toString();

//! Displaying a Price
const price = 19.33;
// const displayPrice = "The price is $ " + price.toString();
const displayPrice = `The price is ${price} `;
// console.log(displayPrice);

//! Using 'toString()' with different Bases
const decimalNum = 20;
const binaryStr = decimalNum.toString(2);
const hexStr = decimalNum.toString(16);
// console.log(hexStr);

//! Working with BigInt
const bigIntNum = BigInt('90071938455556678');
// console.log(bigIntNum.toString());


//?=======================
//! ==> .toFixed() 
//?=======================

//! Formatting Currency
const productPrice = 49.955;
const formatedPrice = productPrice.toFixed(2);
// console.log(formatedPrice);

//! Scientific Data
const piApprox = 3.14149;
const roundedPI = piApprox.toFixed(3);
// console.log(roundedPI);

//! Calcutating Body Mass Index (BMI)
const weightKg = 70;
const heightM = 1.75;
const BMI = (weightKg / (heightM ** 2));
// console.log(BMI.toFixed(4));

//?=======================
//! ==> .toExponential()
//?=======================

//! Scientific Data Representation
const avogadroNumber = 6.02214076e23;
const ScientificNoatation = avogadroNumber.toExponential();
// console.log(ScientificNoatation);

const num = 10;
const exponatedNum = num ** 2;
// console.log(exponatedNum);


//?=======================
//! ==> parseInt()
//?=======================

//!  Converting user input to Integer
const userInput = '42';
const userAge = parseInt(userInput, 10);
// console.log(userAge);

//!  Extracting Price from a Text
const priceText = "Price: 100 USD";
const extractedPrice = parseInt(priceText.replace("Price:","").replace("USD",""),10);
// console.log(extractedPrice);

//!  Converting Binary Data from a Sensor
const sensorData = '1101';
const sensorDataDecimal = parseInt(sensorData, 2);
// console.log(sensorDataDecimal);


//?=======================
//! ==> parseFloat()
//?=======================

//!  Converting Price for an E-Commerece Checkout
const checkout = "$99.99";
const checkoutPriceFloat = parseFloat(checkout.replace("$",""));
// console.log(checkoutPriceFloat);

//!  Extracting Temperature Data from a Weather API
const apiTempData = "Temperature: 23.5°C";
const actualTemData = parseFloat(apiTempData.replace("Temperature:","").replace("°C",""));
// console.log(actualTemData);

//?=======================
//! ==> .isNaN() --> Not a number
//?=======================

//! Calculating Grade Point Average(GPA)
const inputGpa = "3.8";
const parsedGpa = parseFloat(inputGpa);
// if (isNaN(parsedGpa)) {
//     console.log('Invalid GPA input');
// }else{
//     console.log(`Your GPA is ${parsedGpa}`);
// }

//! Calculating Savings After a Transaction
const initialSavings = '1000';
const widthdrawal = 'Hello';
const newSaving = parseFloat(initialSavings) - parseFloat(widthdrawal);
// if(isNaN(newSaving)){
//     console.log('Invalid transaction');
// }else{
//     console.log(`Your new savings amount is ${newSaving}`);
// }

//! Calculating the area of a circle
const radiusInput = '7';
const radius = parseFloat(radiusInput);
const area = Math.PI * Math.pow(radius, 2);
if(isNaN(area)){
    console.log('Invalid radius');
}else{
    console.log(`The area of the circle is ${area.toFixed(3)}`);
}
