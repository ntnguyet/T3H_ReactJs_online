// debugger;
// let testSimple = 1;
// let testSimple2 = "2";
// let result  = testSimple + testSimple2;
// console.log(result);
//object
// let user = new Object();
// let user = {};
// typeof user;
//example1
// let user2 = {
//     "50": "nguyet",
//     1: "18",
//     undefined: null,
// }
// for (const key in user2){
//     console.log(key);
// }
//example 2
let sums ={
    n1: 2,
    n2: 3,
    n3: 4,
}
let sum = 0;
for (key in sums){
    sum += sums[key];
}
console.log(sum);
