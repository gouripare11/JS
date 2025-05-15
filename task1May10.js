function rev(){
    var n=Number(prompt("Enter a number: ")) //n=456
    var r=0 //r=0
    while(n>0){
        var nn=n%10 // nn=6,5
        r=r*10+nn //r=6,65
        n=Math.floor(n/10)   // n=45,4 num-(num-last)/10 or use parseInt
    }
    alert("Reverse: "+r)
}
rev()

function sum(){
    var n=Number(prompt("Enter a number: "))
    var nn=n;
    while(n>=10){
        n=Math.floor(n/10)
    }
    nn=nn%10;
    alert("Sum of first and last digit is : "+(n+nn))
}
sum()

function sort(){
    var a=Number(prompt("Enter a number1: "))
    var b=Number(prompt("Enter a number2: "))
    var c=Number(prompt("Enter a number3: "))
    var f,s,t
    if(a<b && a<c){
        f=a
        if(b<c){
            s=b
            t=c
        }
    }else if(b<a && b<c ){
        f=b
        if(a<c){
            s=a
            t=c
        }
    }else if(c<a && c<b){
        f=c
        if(a<b){
            s=a
            t=b
        }
    }
    alert(f+", "+s+", "+t)
}
sort()

function oddeven(){
    for(var a=0;a<=15;a++){
        if(a%2==0){
            console.log(a+" is even")
        }else{
            console.log(a+" is odd")
        }
    }
}
oddeven()

function goodBetterBest(){
    for(var a=0;a<=100;a++){
        if(a%3==0){
            console.log("Good")
        }else{
            console.log(a)
        }
        if(a%5==0){
            console.log("Better")
        }
        if(a%3==0 && a%5==0){
            console.log("Best")
        }
    }
}
goodBetterBest()

function pattern(){
    for(var i=0;i<=5;i++){
        for(var j=0;j<i;j++){
            console.log("*")
        }
        console.log("\n")
    }
}
pattern()

function greetings(){
    let s=Number(prompt("Enter time(0-24 hours) : "))
    if(s>=0 || s<12){
        alert("Good Morning!")
    }else if(s>=12 || s<=16){
        alert("Good afternoon!")
    }else if(s>=16 || s<=21){
        alert("Good evening!")
    }else if(s>=21 || s<=23){
        alert("Good night!")
    }
}
greetings()