//Array methods
//includes()
// let arr = [1,2,3,4,5]
// console.log(arr.includes(2));   // it prints true becoz it searches for 2

//Indexof()
// let fruits =['banana','orange','apple','banana','kiwi','banana']
// console.log(fruits.lastIndexOf('banana'));  //it prints 5

//findIndex
// let arr =[1,2,3,4,5]
// //returns the index of the first element in the array that satisfies the provided testing function

// //whenever u give a function as an arguement to the function that is known as a callback function
// function cb(){   //callback function---it either returns true or false (i.e)boolean values
//          //conditions
// }
// let result = arr.findIndex(cb);

// function greaterthan4(element){
//     return element > 4;
// }
// let result =arr.findIndex(greaterthan4);
// console.log(result);  // it returns 4 becox it checks all the element one by one and executes the index value until it satisfies


// let arr = [1,2,3,4,5]
// let result = arr.findIndex(element => element > 3);
// console.log(result);  //3


//concat
//let arr1=[a b c]
//let arr2=[d e]
// let arr3 = arr1.concat(arr2);
// console.log(arr3);  // it prints [a b c d e]

//tostring
// const arr = [1,2,'a','b']
// let result = arr.toString();
// console.log(result);  // it prints [1,2,3,a,b]

//join
// let fruits = ['apple','banana','orange']
// let result = fruits.join('-'); //apple-banana-orange
// let result1 = fruits.join(' '); //apple banana orange
// let result1 = fruits.join(''); //applebananaorange
// let result2 = fruits.join();  //apple,banana,orange
// console.log(result);

//some
// let arr = [1,2,3,4,5]
// function isEven (element){  //if element is even or not
//     if(element % 2 === 0){
//         return true;
//     }
//     return false;
// }

//element % 2 === 0  // returns true or false

// function isEven(element){
//     return element % 2 === 0
// }

// let result = arr.some(isEven)
// console.log(result);  //it returns true becoz it checks all the element of the array

// let result =  arr.some(element => element % 2 === 0)
// console.log(result);

//every
// let arr = [2,4,6,8]
// let result = arr.every(element => element % 2 === 0)
// console.log(result);

// let arr = [1,2,3,4,5]

// console.log(arr.some(y => y <2)); //true
// console.log(arr.every(y => y > 5)); //false

//let str = "string"
//console.log(str.length) 

// let fruits = ['apple','orange','banana','pear']
// console.log(fruits.some(item => item.length < 5));  // true

//filter - it returns a new array with the elements that satisfy the given condition
// let arr = [1,2,3,4,5]
// function isGreaterthan3(element){
//     return element > 3
// }
// let resultarray = arr.filter(isGreaterthan3)
// console.log(resultarray);  //[4,5]

//arrow function
// let resultarray = arr.filter(element => element > 3)
// console.log(resultarray);

//filter out odd elements
// 

//Map---returns a new array populated with the results of the callbackfunction
//normal way 
// let arr = [1,2,3,4,5]
// let newarr=[]
// for(let i = 0 ;i < arr.length ; i++){
//   newarr.push(arr[i]*2)
// }
// console.log(newarr) //[2,4,6,8,10]

//using map()
// function double(item){
//     return item * 2
// }
// let newarr = arr.map(double)
// console.log(newarr);  //doubles the array elements

// let newarr = arr.map(item => item * 2)
// console.log(newarr);  //doubles the array elements --arrow function

//que---adds 5 to each element
// let newarr = arr.map(item => item+5)
// console.log(newarr);

//foreach --executes a provided function once for each element in the array
// let arr = [1,2,3,4,5]
// for(let i=0;i<arr.length;i++){
//     console.log (arr[i]*2);
// }

//foreach ---if u dont want new array but want to double the elements of the array
// arr.foreach(item => {
//     console.log(item*2)
// } )

//using foreach calculate the sum of elements in arr
// let sum = 0;
// for(let i = 0; i<arr.length ;i++){
//     sum+=arr[i];
// }
// console.log(sum); //sum of the elements of array

//another method

// let arr = [1,2,3,4,5];
// let sum=0;
// arr.forEach(element => {
//     sum+=element;
// });
// console.log(sum);

// reduce----returns a single value(executing the array in a single value e.g:sum/product of elements)
//accumulator,current,initial value
//reduce takes two arguments 1)callback function
                           //2)initial value
//callback function has 2 arguments --1.accumulator--it accumulates all the elements of the array  2.current it is similar to item/element

// let arr = [1,2,3,4,5];
// let initialvalue=0;
// let result = arr.reduce(function(accumulator,current){
//     accumulator+=current;
//     return accumulator;
// },initialvalue)
// console.log(result);


//practice
// let arr = [1,2,3,4,5];
// let squaredarr = arr.map(item => item * item);
// let evensquares = squaredarr.filter(item => item % 2 === 0);
// let sumofevensquares = evensquares.reduce((acc,curr)=>{
//     acc+=curr;
//     return acc;
// },0)
// console.log(sumofevensquares);

//map filter reduce are so called chainable means we can use one after another
// let sumofevensquares = arr.map(item =>item * item).filter(item => item % 2 === 0).reduce((acc,curr)=>{
//     acc+=curr;
//     return acc;
// },0)
// console.log(sumofevensquares);

//question---filter our salaries greater than 300, double the filtered salaries, find out the total salary

// let arr = [100,200,300,400,500,600];
// let sum = arr.filter(item => item > 300).map(item => item * 2).reduce((acc,curr)=>{
//     acc+=curr;
//     return acc;
// },0)
// console.log(sum);


















