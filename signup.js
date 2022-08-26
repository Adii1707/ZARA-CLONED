

var radios = document.forms["formA"].elements["PERSONAL_one"];
for(var i = 0, max = radios.length; i < max; i++) {
    radios[1].onclick = function() {
        //alert(this.value);
        document.getElementById("test").style.display = "none";
        document.getElementById("test2").style.display = "block";
    }
}

var radios = document.forms["formA"].elements["PERSONAL_one"];
for(var i = 0, max = radios.length; i < max; i++) {
    radios[0].onclick = function() {
        //alert(this.value);
        document.getElementById("test").style.display = "block";
        document.getElementById("test2").style.display = "none";
    }
}

        document.getElementById("gst").style.display = "none";
        document.getElementById("Cname").style.display = "none";

checkfun=()=>{
    
    var x=document.getElementById("comscreen").checked;
    if(x==true){
        document.getElementById("gst").style.display = "block";
        document.getElementById("Cname").style.display = "block";
    }
    else{
        document.getElementById("gst").style.display = "none";
        document.getElementById("Cname").style.display = "none";
    }
  
}

document.getElementById("form1").addEventListener("submit",function(){
    persform(event)
})


persform=(event)=>{
    event.preventDefault();
    data ={
        type:"personal",
        Email:document.getElementById("email").value,
        Password:document.getElementById("password").value,
        Name:document.getElementById('name').value,

    }
    localStorage.setItem("user",JSON.stringify(data));
    window.location.href="login.html"
}