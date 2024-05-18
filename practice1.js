//Remove Duplicate Number

let values = [1,2,3,21,1,23,,2,3,1,7,7,8,5,5,8,6]

function adding(arr) {
    return arr.filter((ele1,ele2,ele3) => {
    return ele3.indexOf(ele1) === ele2;
    })
}

let result = adding(values)
console.log(result);

//FUnction Calucate in sum

function sumof(a,b){
return(a+b);
}
let sum1= sumof(10,10);
console.log(sum1);

//.Reverse String

let name1 = "surya"

function reverseString(str){
  return str.split("").reverse();
}
let jdk = reverseString(name1)

console.log(jdk)

 //max and minium
 let a = 10;
 let b= 20;
 let res = Math.max(a,b);
 console.log(res)

//FACTORIAL NUMBERS
 
function factorial(fact){
    if(fact === 0 || fact === 1){
        return 1;
    } else{
        return fact *factorial(fact -1);
    }
}
let res1 = factorial(4)
console.log(res1);

//EVEN AND ODD NUMBERS

let numbers= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

function evenNum(odd){
  return odd.filter( num => num % 2 !== 0);
}

let res3 = evenNum(numbers)
console.log(res3);

//MAP

let names =["sree","Surya","venkat","vamsi"]
let  sjh = names.map((ele4,ele5,ele6) => {
    if(typeof(ele4) === "string");
    return ele4;
})
console.log(sjh);

let num = [100,200,300,400]
let re = num.reduce((ele1,ele2,ele3,ele4)  => ele1 + 100 );

console.log(re)

//SORT
 let numb = [4,6,52,1,3,56,7,9,8]

 let re1 = numb.sort((a,b) => a-b )
 console.log(re1);
 
 //RANDOM NUMBERS
 let numbe = Math.random()
 let numbe1 = Math.ceil(numbe * 6)
 console.log(numbe1);

 //OBject
 let info = {
   fName : "sreeknth",
   lName : "peddarapu"
}

let hss = Object.keys(info)
console.log(hss);
let hss1 = Object.values(info)
console.log(hss1);
let hss3 = Object.entries(info)
console.log(hss3);