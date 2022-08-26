document.getElementById("loginform").addEventListener("submit",function(){
    logindata(event)
})
logindata=(event)=>{
    event.preventDefault()
 
        email=document.getElementById("emailID").value;
        password=document.getElementById("pass").value;
    
    
    lsdata = JSON.parse(localStorage.getItem("user"));
    console.log(lsdata)
    if(email ==lsdata.Email && password==lsdata.Password){
        alert("success")
        localStorage.setItem("UserName",lsdata.Name)
        window.location.href= "homePage.html"
    }
    else{
        alert("fail")
    }
}


gosignup=()=>{
    window.location.href="signup.html"
}

let userData = JSON.parse(localStorage.getItem("user"));
if(userData != null){
    document.getElementById("logInOption").innerText=userData.Name;
}
