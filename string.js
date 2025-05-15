function str(){
    let text1="This is String one one"
    let text2="This is String two"
    console.log(text1.length)
    console.log(text1.slice(1,6))
    console.log(text1.concat(text2))
    console.log(text1.substring(2,6))
    console.log(text1.toUpperCase())
    console.log(text2.toLowerCase())
    console.log(text1.trim())
    console.log(text1.charAt(5))
    console.log(text2.charCodeAt(7))
    console.log(text1.indexOf('s'))

    console.log(text1.replace('String','not a Stringggggg'))
    console.log(text1.replace(/one/g,'strings'))            //g means global

    let text3="This is String one OnE"
    console.log(text1.replace(/one/gi,'///'))            //gi means case-insensitive

    console.log(text1.replaceAll('one','threee'))

    let text4="A,new,String, ";
    console.log(text4.split(","))     //to convert into array
}
str()