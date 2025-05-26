let show=()=>{
    let aa=document.querySelector("#para")
    if(aa.style.display=="none"){
        aa.style.display="block"
        let aa1=document.querySelector("#onn")
        aa1.innerHTML="HIDE"
    }else{
        aa.style.display="none"
        let aa1=document.querySelector("#onn")
        aa1.innerHTML="SHOW"
    }
}