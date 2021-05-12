// function doubleIt (num){
//     return num *2 ;
// }

// const result = doubleIt(20);
// console.log(result);


// const doubleIt = function myfun(num){
//     return num * 2;
// }
// const result = doubleIt(22);
// console.log(result);

// es6 arrow function

const doubleIt = num => num *2 ;
const add = (x, y) => x + y ;
const give5 = () => 5;

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y ;
    const result = sum  * diff ;
    return result;
}

const result = add(25, 77);
const result2 = give5();
const result3 = doMath (22, 20);
console.log(result3);