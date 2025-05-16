//sum:
let arr = [3, 7, 4, 9, 1, 7]
let arr2=[2,3,4,5]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
}
console.log("sum of elements of array = "+sum);

//max:
temp=arr[0]
for(let i=1;i<arr.length;i++){
    if(temp<arr[i]){
        temp=arr[i]
    }else{
        continue
    }
}
console.log("max element of array = "+temp);

// count evens and odds
let countE=0,countO=0;
for(let i=0;i<arr.length;i++){
    arr[i]%2==0 ? countE++ : countO++;
}
console.log("No. of evens = "+countE+" and no. of odds = "+countO);

//reverse
// var arr2=new Array(arr.length)
// console.log("Reverse = ");
// for(let i=(arr.length-1);i>=0;i++){
//     for(let j=0;j<arr.length;j++){
//         arr2[j]=arr[i]
//         console.log(arr2[j]);
//     }
// }

//find element
let searchEle=7,b=false
for(let i=0;i<arr.length;i++){
    if(arr[i]==searchEle){
        b=true
        break
    }
}
b ? console.log("Element exists") : console.log("Element doesn't exist")

// merge 2 arrays
let len=(arr.length+arr2.length)
let arr3=new Array()
for(let i=0;i<arr.length;i++){
    arr3.push(arr[i])
}
for(let i=arr.length;i<len;i++){
    arr3.push(arr2[i])
}
console.log(arr3);
