// slice 

//  1.i/p: var text='JavaScript is awesome';
//           o/p: "JavaScript"
//Ans:
var text='JavaScript is awesome';

// console.log(text.slice(0,10))  // //output-- "Javascript"

//using split
// console.log(text.split(" ")[0]) 
// ------------------------------------------------------------------------- 
//  5.i/p: var sentence='I Love Learning Javascript';
//           o/p: "Learning"

//Ans:
var sentence='I Love Learning Javascript';
console.log(sentence.slice(7,15))
//using split
// console.log(sentence.split(" ")[2])
// ---------------------------------------------------------------------------------

// 3. Using negative index values
//    i/p: var text='Frontend Development';
//    o/p: "Development"
//Ans:
 var text='Frontend Development';

 console.log(text.slice(-11))  //output -- Development
//  using split
console.log(text.split(" ")[1]) //output -- Development
//  -------------------------------------------------------------------------------------- 
// ------------------------------------------------------------------------------------------

// join method 

// 1.i/p: var fruits=['Apple','Banana','Orange'];
//    o/p: "Apple, Banana, Orange"

//Ans:
var fruits=['Apple','Banana','Orange'];

console.log(fruits.join(", "))  //ouput---"Apple, Banana, Orange"
// -------------------------------------------------------------------------------------------
// 2.i/p: var numbers=[1,2,3,4,5];
//           o/p: "1-2-3-4-5"

//Ans:
var numbers=[1,2,3,4,5];

console.log(numbers.join("-")) //output---" 1-2-3-4-5"

// // ------------------------------------------------------------------------------------------
// 3. i/p: var chars='H','e','l','l','o'd;
//     o/p: "Hello"

//Ans:
 var chars= ['H','e','l','l','o'];
 
 console.log(chars.join(""))

//  -----------------------------------------------------------------------------------
//  ----------------------------------------------------------------------------------
// 7.i/p: var date='2024-10-21';
//     o/p: [ '2024', '10', '21' ]

//Ans:
var date='2024-10-21';

console.log(date.split("-")) //output---[ '2024', '10', '21' ]
// ---------------------------------------------------------------------------------- 
// 8.i/p: var text='I Love JavaScript programming';
//           o/p: [ 'I', 'Love' ]

//Ans:
var text='I Love JavaScript programming';
console.log(text.split(" ",2))                //output--- [ 'I', 'Love' ]
//or
console.log(text.split(" ").splice(0,2))       //output--- [ 'I', 'Love' ]
//or
var x = text.split(" "); 
var y = [x[0], x[1]]; 

console.log(y)                                   //output--- [ 'I', 'Love' ]
// ---------------------------------------------------------------------- 

// 9.i/p: var url="https://www.example.com/path/page.html";
// o/p: [ 'https:', '', 'www.example.com', 'path', 'page.html' ]

//Ans:
var url="https://www.example.com/path/page.html";
console.log(url.split("/"))









