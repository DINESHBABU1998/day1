//for loop
//we can declare the initialization outside for loop but we have to use semicolon inside for loop.
//we can declare the inc/dec outside the loop but only after the console.log statement
// let i=0;
// for(;i<=10;){
//     console.log("value of i is",i);
//     i++;
// }

// for (let i=0; i<=10; i++){
//     console.log("value of i is",i);
// }

//while loop
//condition should be given properly
//inc/dec should be given after the connsolelog statement
// let i = 0;
// while(i<=10){
//     console.log("value of i is",i);
//     i++;
// }
// console.log("outside loop");

//do-while loop
// let i=0;
// do{
//     console.log("value of i is",i);
//     i++; 
// }while(i<=10)

//nested loop
// for (let i=0; i<5; i++){
//     for(let j=0; j<2;j++){
//         console.log("value of i is:",i ,"value of j is:",j);
//     }
// }

//function
//basic
// function add(){-(function definition)
//     console.log(a+b);
// }
// add();-function declaration

//function with parameters(a,b)
//function arguments(10,20 / 20,20/etc): the values which we pass to a variable
//function parameters(a,b):the value which the function to do the operation

// function addtwonumbers(a,b){
//     console.log(a+b);
// }
// addtwonumbers(10,20);
// addtwonumbers(20,20);
// addtwonumbers(30,20);
// addtwonumbers(40,20);

//function with return statement
// function addnumbers(x,y){
//     return x*y;  // any code written after return is not accessible
// }
//const result=addnumbers(12,2);
//console.log("result");

//functions which exist only in JS
// const add= function(){
//     console.log("value")
// }
// add();

//arrow function
// const a=() =>{   //=>denotes the function

// }
// a();