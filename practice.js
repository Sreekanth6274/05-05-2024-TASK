// MAP METHOD
// The map() method is used for creating a new array from an existing one, 
// applying a function to each one of the elements of the first array.

console.log("**** MAP ***");

let arr = ["surya ","raju","sanjeev","sanjeev" , 1,1,6,8,10,16,15,134,62,7,9,13]

let values = arr.map((ele, index, array1) => {
    if (typeof(ele) === "string" ) {

     return ele;
    }

})
console.log(values)

// FILTER METHOD

let onlyNames = values.filter((value2) => {

    return value2 !== undefined;

})

console.log(onlyNames);
let gdg1 =[1,2,3,4,5,6,7,8,9]

function primeNumber(arr1) {
    for( i = 1 ; arr1 > i; i++){
    if(arr1 % i === 0){
        return false;
    }
}
return arr1 > 1;
}
// let result = arr.filter(gdg1);
// console.log(result);
//2)
const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
  
  const studentGrades = students.filter(student => student.grade >= 90);
  console.log(studentGrades)

  //3) 
  let values5 = [1,5,4,3,2,5,6,3,2,1,3,8,5,8] 
  
  function filterNumbers(arr){
    return arr.filter((ele1,ele2,ele3) => {
        return ele3.indexOf(ele1)  >= ele2;
  });
}
  let duplicateNumbers = filterNumbers(values5)
  console.log(duplicateNumbers);



  // REDUCE METHOD

  let number = [400,300,600,500,200,400,200]
  let totalCount = number.reduce((ele1, ele2,ele3,ele4) => ele1 + 400 );

  console.log(totalCount)

//Includes Method
//The includes() method returns true if an array contains a specified value.
let names = ["bharath","venkatesh","vamsi",82,18, ,6]
 console.log(names.includes("bharath")) // it is "True".

//SPLICE METHOD
//The Splice MEthod is used to Remove and replace the items in an array

let csNames = [ "sree","Bharath","sanjeev", "raju", 12,45]

let removeElements = csNames.splice(0,2 ,"vamsi","Venkat");
console.log(csNames);

//CONCAT METHOD
// The Concat Method is Used to Joining Two Array 
let batch1 = [ "sree","Bharath","sanjeev", "raju", 12,45]
let batch2 = ["surya ","raju","sanjeev","sanjeev" , 1,1,6,8,10,16,15,134,62,7,9,13]

let joinBatch = batch1.concat(batch2);
console.log(joinBatch);

//SORT METHOD
// The sort() method sorts the elements of an array.
//  The sort() method sorts the elements as strings in alphabetical and ascending order. 

let numbers1 =[22,4,3,2,44,73,82,53,34,3,4,8,9,5,6,77,25,13,16]

let sortNumbers = numbers1.sort((a,b) => a-b);

console.log(sortNumbers)

// REVERSE STRING

let name8 = "sreekanth"

let reveseName = name8.split("").reverse().join("")
console.log(reveseName);

//DATES

let today = new Date();
console.log(today);
let year = today.getFullYear();
let month = today.getMonth();
let minutes =today.getMinutes();

console.log(year);
console.log(month);
console.log(minutes);

//CONVERT NUMBER TO STRING
let number8 = 8.164649403
let num = number8.toString();
console.log(typeof(num))

// MATH OPERATIONS
// MAX AND MIN 

 let num1 =  5722;
 let num2 = 7567;

 let result21 = Math.max(num1,num2);
 console.log(result21)
 
 let num3 =25
 //SQUARE

 let result3 =Math.sqrt(num3)
 console.log(result3)

// ROUND ,FLOOR, CEIL

 let num4 = 100.55;
 let num5 =100.49;

 let round = Math.round(num5)
 console.log(round)

let num6 =150.75554
let floor = Math.ceil(num6);
console.log(floor);

//Random Numbers

let randomNumber = Math.random()
let randomNumber1 =Math.floor(randomNumber * 6) + 1;
console.log("RANDOM NUMBER :" , randomNumber1);

//DOT NOTATION
let personInfo = {
    fName : "Sreekanth",
    lName : "peddarapu",
    age : 24,
    favBikes: {
        BMW : "1000cc",
        R15 : " 175cc",
    },
    qualification :" Btech",
}
let personFname = personInfo.fName;
console.log(personFname);
// let age = personInfo.age;
// console.log(age);

//BRACKET NOTATION
let personFname1 = personInfo["favBikes"]
console.log(personFname1);
let personFname2 = personInfo["favBikes"].R15;
console.log(personFname2);

//OBJECT DESTRUCTURING 

let {age,fName,favBikes,lName } = personInfo;
console.log(age);
console.log(fName);
console.log(lName);

//OBJECT METHODS

let mobileInfo = {
    model : "iphone",
    price: "100000/- ",
    processor : "A17 chip"
}
 
let mobile = Object.keys(mobileInfo);
console.log(mobile);
let mobile1 = Object.values(mobileInfo);
console.log(mobile1);
let mobile3 = Object.entries(mobileInfo);
console.log(mobile3);

//JSON Method

let myInfo = {

    fName : "sree ",
    lName: "Peddarapu" ,
    favBikes :  "BMW1200"
}

let result8 = JSON.stringify(myInfo)
console.log(result8);

let allElements = JSON.parse(result8)
console.log(allElements)

// Ternary Method

let number1 =30;
let number2 =40;

let lowValue = number1 < number2;

if(lowValue){
  console.log(`The number1 is less than${number1}`);
}else{
  console.log(`The number2 is not less than ${number2}`);
}

let result12 = number1 > number2 ? `${number1}is greater than` : `${number1} is not greater than`;
console.log(result12);

//FUNCTION DECLARATION
function adding()  {
  let number1 = 6;
  let number2 = 20;
  let multiplication = number1 * number2 ;
  
  console.log(multiplication);
}

adding();

//function Expression;
let multiply = function(){
  let number1 = 6;
  let number2 = 12;
  let multiplication = number1 * number2 ;
  
  console.log(multiplication);
}
multiply();

//  ARROW FUNCTION
let multiplication = () => {
  let number1 = 6;
  let number2 = 5;
  let multiplication = number1 * number2 ;
  console.log(multiplication);
}
multiplication();


//INTERVIEW PROGRAMS
//1)REMOVE Duplicate Numbers in filter method

let elements = [1, 2, 3, 2, 5, 6, 8, 6, 3, 5, 1, 2, 8];

function filterConcept(elements) {
    return elements.filter((item ,item2, index ) => {
    return index.indexOf(item) === item2;
    })
}
let removeElements2= filterConcept(elements)
console.log(removeElements2);

//2) Write a JavaScript function to calculate the sum of two numbers.

function sumof(a,b){
    return a+b;
}

let sum = sumof(10,10)
console.log(sum);

//3) Write a JavaScript program to find the maximum number in an array. 
function findMaxNumber(arr) { 
    return Math.min(arr); 
  
  }
  let jdj = findMaxNumber(4,10)
  console.log(jdj);

//2)
  let value1 =[500];
  let value3 = [1000];
  let value2 = Math.max(value1,value3);
  console.log(value2);

  //4) REVERSE A LETTER STRING
function reverseString(str) {
    var splitString = str.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");
    console.log(splitString);
  }
  reverseString("hello");
  

  //REVERSE A STRING LIKE forwards and Back words (PALIDROME)

  function isPalindrome(str) { 

    let reverseItem  = str.split("").reverse().join(""); 
     console.log(reverseItem)
  }
  isPalindrome("Vamsi");


 let result123 = isPalindrome("sreekanth");
 console.log(result123);


 //5) FACTORIAL NUMBER IN JAVASCRIPT
 let factorialValue = document.getElementById("sree");

  function good(number) { 
    if (number === 0 || number === 1) { 
      return 1; 
    } else { 
      return number * good(number - 1); 
    } 
  } 
  let result2 = good(4);
  console.log(result2);
  
//2)

function factorial(value){

if( value === 0 || value === 1 ){
  return 1;
  
} else {
 return value * factorial(value-1);
}
}
let result5 = factorial(5);
console.log(result5)

//6) EVEN AND ODD NUMBERS
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]

function filterEvenNumbers(numbers) { 
    return numbers.filter(num => num % 2 === 0); 
  }
  let evenNum = filterEvenNumbers(numbers)
  console.log(evenNum);

//7) Convert string to array 

  let gdg =  ("vamsi")
let dsg = gdg.split(); // if uu want array to string uu can use (.toString) 
console.log(dsg);



