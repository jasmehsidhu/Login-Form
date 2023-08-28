var x=document.getElementsByClassName("name")[0]
var y=document.getElementsByClassName("email")[0]
var z=document.getElementsByClassName("usr")[0]
var p=document.getElementsByClassName("ps")[0]
start.addEventListener("click",()=>{
localStorage.setItem("Name",x.value)
localStorage.setItem("Email",y.value)
localStorage.setItem("Username",z.value)
localStorage.setItem("Password",p.value)
})
