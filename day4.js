// //using array literals
// let arr = [1,2,3,4,5]; //empty array
// console.log("value of arr is",arr);

// //using constructor function
// let anotherArr = new Array(1,2,3,4,5,6,7,8);
// console.log("value of anotherArr is",anotherArr);
//console.log(arr[3]);

//push,pop,shift,unshift
// let values = ["a","e","i","o","u"];

// //length of the array
// console.log(values.length);
// values[10]=12; //assigning the index 10 to value of 12

// console.log(values[6]);

// values.push(1); //add last
// console.log(values);
// values.pop();  //removes from end
// console.log(values);
// values.shift(); //removes from start
// console.log(values);
// values.unshift("a"); //add first
// console.log(values);

//function to find out how many numeric/string values in an array
// function countString(arr){
//     let count = 0;
//     for (let i=0;i<arr.length;i++){
//         const element = arr[i];
//         if(typeof(element)=="string")count++
//     }                        or "number"
//     return count;
// }
// const result = countString["a","e","i","o","u",1,2,3,4,5,6]
// console.log(result);

// let arr=[1,2,3,4,5,6];

// //some and every are the two functions

// const value1=arr.some(element=>element>2); // => - call back functions
// const value2=arr.every(element=>element>2);
// console.log(value1,value2);   //output is true false