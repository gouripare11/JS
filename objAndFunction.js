//functions

//===============================normal function

// function a(){
//     console.log("Function")
// }a()

// let aba=function(){
//     console.log("Anonymous function");
// }aba()

//===================immediately invoked function expreseeion
// function(){
//     console.log("IIFE");
// }
// ()

//===================arrow function

// let ar=()=>{
//     console.log("Arrow function");
// }
// ar()

// let heree=()=>{
//     alert("First function is running")
// }

// let hereeee=()=>{
//     alert("Second funnction is running")
// }

//===================OBJECT=====================

// let details ={
//     name:"Gouri",
//     age:21,
//     city:"Bhopal",
//     fruits:["Apple","Mango","Banana","Grapes"],
//     welcome: function(){
//         console.log("Welcome")
//     }
// }
// console.log(details.city);  //show or access a key
// details.college="LNCT"      //add a key: value
// console.log(details)       
// details.college="LNCTE"     //overrides the key: value
// delete details.college      //deletes key
// details.age=22              //update value of key
// console.log(details)        //calling whole object
// console.log(details.fruits[3])     //calling element in array in object
// details.welcome();          //calling function in obj

//==================PARAMETERISED FUNCTION==============

// let welc=(myname,age)=>{        //passing values in function are called parameters
//     console.log("Hello "+myname+" your age is "+age);
// }
// welc("Gouri",21)                //passing val at time of funtion call is called argument

// let sum=(a,b)=>{
//     console.log("Sum = "+(a+b));
// }
// sum(3,4)

// let rr=(a,b)=>{
//     return a+b    
// }
// console.log(rr(3,4));

// //or

// let rr2=(a,b)=> a+b
// console.log(rr2(3,4));

//totale marks ans %
let t=(a,b,c)=>{
    let total=a+b+c
    let per=total/3

    return per
}
console.log(t(70,56,89));

let si=(pr,r,t)=>{
    return (pr+r+t)/100
}
console.log(si(7000,2,8));

let add=(a,b,c)=>{
    return a+b+c
}
console.log(add(2,3,4));

let pn=(a)=>{
    return a>0
}
console.log(pn(-34));

let area=(a,b)=>{
    return (a*b)
}
console.log(area(2,4));

let eo=(a)=>{
    if(a%2==0){
        return "Even"
    }else{
        return "Odd"
    }
}
console.log(eo(34));