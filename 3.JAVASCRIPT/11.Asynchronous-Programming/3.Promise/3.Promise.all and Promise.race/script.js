//! Promice.all

// create our promise

// const promise1 = Promise.resolve("Promise 1 resolved");
// const promise2 = Promise.resolve("Promise 2 resolved");

// Promise.all([promise1, promise2])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => console.log(err));



//! Promice.race

// create our promise

const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = Promise.reject(new Error('Promise 2 rejected'));

Promise.race([promise1, promise2])
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));

