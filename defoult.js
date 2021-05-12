// function add(num1, num2){
//     if(num2 == undefined){
//         num2 = 5;
//     }
//     return num1 + num2 ;
   
// }

// const total = add(15);
// console.log(total);

//working 2

// function add (num1, num2){
//     num2 = num2 || 5;
//     return num1 + num2 ;
// }

// const total = add(12);
// console.log(total);

//es6 javaScript 

function add( num1, num2 = 23){
    return num1 + num2 ;
}

const total = add(23);
console.log(total);
