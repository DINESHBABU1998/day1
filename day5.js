//this is so called anonymous function assigning with the variable f1.
// var f1 = function(){
//     console.log("anonymous function");
// }
// f1();  //it executes anonymous function
//when we try to put f1() above the function it will throw f1 isnt function.

//arrow function
// var f2=() =>{
//     console.log("arrow function");
// }
// f2();

//arrow and anonymous function are not hoisted when we put the f1() above the function definition

//convert this to an arrow function
 // question
//     function add(a, b) {
//     return a + b;
// }
// console.log(add(4,5));

// // answer
// var add=(a,b)=>{
//     return a + b;
// }

// var add = (a,b) => a+b //implicit return:only when the single statement inside the function is return statement

// conversion from:
// var multiplyBy2 = (n){
//     return n*2;
// }
// To:
// var multiplyBy2 = n => n*2 //in case of one parameter,the paranthesis can also be removed

// var x=10;
// function a(){
//     var x=20;
//     function b(){
//         var x=30;
//         console.log(x); //30
//     }
//     b();
//     console.log(x); //20
// }
// console.log(x); //10
// a();

//Arrays
// var arr =[1,2,3];

// var arr = [1,2,'hi','bye',[4,5,6]];
// console.log(arr);
// console.log(arr[4][1]); //output is 5

// console.log(arr.length); //5
// console.log(arr[4].length); //3

//array methods
//push ----- adds elements to the end of the array; secondly it returns the new length of the array.
// let arr = [1,2,3,4];
// console.log(arr);

// arr.push(5) //or (5,6,7) to add multiple items or (5,6,[7,8,9]) it adds 3 elements
// console.log(arr)

//pop ----deletes the last element from the array; secondly it returns the popped element

//shift----deletes the first element from the array;secondly it returns the shifted element

//unshift----adds the element at first in the array;secondly it returns the new length of the array

//practice question:
// let fruits = ['apple', 'banana', 'orange', 'kiwi']

// fruits.pop();       //removes kiwi
// console.log(fruits)  //[apple banana orange]
// console.log(fruits.pop()) //orange---it removes the last element and returns the last element
// console.log(fruits)  //[apple banana]
// console.log(fruits.push('strawberry')) //3---it returns the element length
// console.log(fruits.push('melon')) //4---it returns the element length
// console.log(fruits) //[apple banana strawberry melon]

// console.log(fruits.shift()) // apple

// let result = fruits.unshift('first')
// console.log(fruits) //fruits apple banana orange kiwi
// console.log(result); //5

//-----indexof -returns the first index at which a given element occurs
// let fruits = ['apple', 'banana', 'orange', 'kiwi','banana','jackfruit','cheeku','banana']
// let result = fruits.indexOf('banana');  //index value is 1   //it prints becoz it took the index value as 1 at first
// let result1 = fruits.indexOf('banana',5); //index value is 7  //it will look after the index 5 for banana
//console.log(result);


//-----SLICE-----it slices the elements according to the index value
//slice works with negative index value.(starting from last element as -1 to first element as-8)
// let fruits = ['apple', 'banana', 'orange', 'kiwi','melon','jackfruit','cheeku']
// let result = fruits.slice(1,5) //starting position and ending position but ending index is not included
// console.log(result);   // [banana orange kiwi melon]
// console.log(4); //[melon jackfruit cheeku]
// fruits.slice(-4); //[ kiwi melon jackfruit cheeku]
//             (1,-2)

// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes']

// console.log(fruits.push('strawberry', 'papaya', 'pear')) //total element 10 so it prints that
// console.log(fruits.pop()) //removes the pear at last and prints pear
// console.log(fruits.shift()) //removes apple at first and prints apple
// console.log(fruits.unshift('jackfruit')) //add jackfruit at first and prints the total length of the array
// let result = fruits.slice(0, 3)
// console.log(result)  //jackfruit banana orange

//to print the pattern            //*
// var str="";                      * *
// for(let i=0;i<5;i++){            * * *
//     for(let j=i;j<=i;j++){       * * * *
//       str=str +"*";              * * * * *
//     }
//     console.log(str);
// }
