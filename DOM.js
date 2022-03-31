// function sayHi(){
//     console.log(this); //this refers to window object
// }
// sayHi() or //window.sayHi()

// let sayHiArrow=()=>{
//     console.log(this); //this refers to window object
// }
// sayHiArrow()

// let user={
//     name:'Rahul',
//     sayHiObject(){
//         console.log(this); //this refers to the user object and returns user object completely
//     }
// }
// user.sayHiObject()

//value of "this" is determined at run time.

// let fruitMap = new Map([
//          ['banana', 40],
//          ['kiwi', 150],
//          ['apple', 60]
//      ])
    
//      for (let item of fruitMap) {
//          console.log(item)
//         console.log('key is', item[0], '& ', 'value is', item[1])
//      }
    
//      console.log(fruitMap.values())
//      console.log(fruitMap.keys())
    
//      let valueArray = Array.from(fruitMap.values())
//      let keyArray = Array.from(fruitMap.keys())
    
//      console.log(valueArray)
//      console.log(keyArray)



//-------DOM----document object model
//window is the parent object and document is the part of that window object
//accessing the elements by tagname,classname,idname

//innerText----it returns the text of the element
//innerHTML----it returns the whole element

// const data=document.getElementById("std").innerHTML
// console.log(data);
// const data1=document.getElementById("std").innerText
// console.log(data1);

// const heading=document.getElementsByTagName("h1")
// console.log(heading);
// console.log(heading[0].innerHTML)

// const heading2=document.getElementsByClassName("head")
// console.log(heading2[0].innerText);


// function submit(){
//     let value=document.getElementById("std");
//     value.innerText="mern stack"
//     value.style.color="black"
//     value.style.backgroundColor="aqua"
// }


//creating new elements using Html
// function Submit () { 
//     const userInput = document.getElementById("name");
//     console.log(userInput); //it shows the whole input tag
//     console.log(userInput.value); //whatever we type in the input area that is being executed in the console
//     const todo = document.createElement("h1"); //it creates a new h1 tag 
//     // console.log(todo);  //it returns the new h1 tag with the text
//     todo.innerText = userInput.value;   //it assigns the input value that we type in the input box to innertext of h1 tag
//     todo.setAttribute("class", "todoDiv");  //<h1 class="todoDiv"></h1>
//     document.getElementById("todoData").appendChild(todo); //it appends the child h1 tag to div tag
//     console.log(todo);  //it returns the h1 tag with class name and innertext----<h1 class="todoDiv">----text----</h1>
// }

// adding dynamic html 
// create an empty div tag and give it some id.
// capture the input field value
// create the element that you want to add in html.
// append the element inside the empty div tag.


// function outer(){
//     var num=5;
//     function inner(){
//         console.log(num);
//     }
//     return inner;
// }
// var result=outer();
// result();

// function fun() {
//     var a = 10

//     setTimeout(function () {
//         console.log(a)
//     }, 3000)

//     console.log('Inside fun')   //it prints inside fun nd after delay of 3secs it prints the value of a
// }

// fun()

