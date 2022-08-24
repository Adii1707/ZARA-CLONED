document.getElementById("loginform").addEventListener("submit",function(){
    logindata(event)
})
logindata=(event)=>{
    event.preventDefault()
    let login_data = {
        email:document.getElementById("emailID").value,
        password:document.getElementById("pass").value,
    }
    console.log(login_data);
}