// let fruits=["apple","mango","orange",1,3,4]
//or constructor method let f=new Array("apple","mango","orange")
// fruits.pop()

// console.log(fruits)
// console.log(fruits[1])
// console.log(fruits.toString())
// console.log(fruits.join('-'))
// let a=fruits.toString()
// console.log(typeof(fruits.toString())) // or typeof(a)
// let b=fruits.join(' ') // convert arr to string
// console.log(b)

let fruit=["apple","mango","banana","grapes"]
console.log(fruit)
// let a=fruits.slice(1,3)
// console.log(a)
// fruit.splice(2,0,"Papaya")        //splice(start, delete_count,add)
// console.log(fruit)

let arr1=[1,2,3,4]
let arr2=["car","bus","bicycle"]
let arr3=["x","y","z"]
console.log(arr1.concat(arr2.concat(arr3))) // or console.log(arr1.concat(arr2,arr3))

console.log(arr1.reverse());

let num=2453658
console.log(Number(num.toString().split('').reverse().join('')));

//Destructuring an array - unpack array elements into obj and variables
const [a,b,c,d]=fruit     // const [a,,c,d]=fruit // didn't destruncture mango
console.log(b);