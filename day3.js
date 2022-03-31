// var a;
// console.log(a);
// a=10;
// console.log(a);

//functions are reuseable block of codes
//to run the block of code inside the function we need to execute the function
// function abc(){
//     //code block for the function
//     console.log("inside abc");
// }
// abc();//function execution or function call

// function add(a,b){
//     console.log(a+b);;
// }
// add(4,5);

//for returning the function we should assign the variable outside the function
// function add(a,b){
//     return a+b;  //return keyword will let u out of the function after execution
// }
// var result = add(4,6);
// console.log(result);
// // or
// console.log(add(4,6));

// function abc(){
//     var a=10;
//     var b=20;
//     console.log(a,b,"iniside abc")
// }
// var x=10;
// console.log(a,b,"inside global")- it throws error as a and b is not defined

// function abc(){
//     var a=10;
//     var b=20;
//     console.log(a,b,"iniside abc")
//     console.log(x);-//it looks for the parents lexical scope as there is no var inside the function so it prints 10
// }
//var x=10;
//abc();

// var x = 10

// var x = 10;
// function a() {
//     var y = 20;
//     function b() {
//     console.log(x, y);
// }
// b();
// }
// a();
