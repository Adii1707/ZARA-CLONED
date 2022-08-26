var addTocartArr = JSON.parse(localStorage.getItem("addtocartData"))
console.log(addTocartArr)
function displayData(addTocartArr){


    addTocartArr.map(function(ele,index){

    //div1
    var cartdiv = document.createElement("div")
    cartdiv.setAttribute("id","cartdiv")

    var cartimg = document.createElement("img")
    cartimg.setAttribute("src",ele.productImg);
    cartimg.style.boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
    cartimg.setAttribute("id","cartimg")

    var cartname = document.createElement("div")
    cartname.setAttribute("id","cartname")
    cartname.innerText=ele.productName;

 var cartdeleteimg = document.createElement("img")
    cartdeleteimg.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcZvVHNvNaW8GTp7nH-HxcUC9g_yets7pVQ&usqp=CAU")   
    cartdeleteimg.addEventListener("click",()=>{
        handleDelete(ele.productName,cartdiv)
    })
    var cartquantitydecreasebtn = document.createElement("button")
    cartquantitydecreasebtn.innerText="-"
    cartquantitydecreasebtn.addEventListener("click",function(){
        decreasefun(ele,index);
    })
    
    var cartquantity = document.createElement("div")
    cartquantity.innerText=ele.cartquantity

    var cartquantityincreasebtn = document.createElement("button")
    cartquantityincreasebtn.innerText="+"
    cartquantityincreasebtn.addEventListener("click",function(){
        increasefun(ele,index);
    })

    var totalpriceforoneproduct = document.createElement("div")
    totalpriceforoneproduct.innerText=cartquantity.innerText*ele.price.slice(3,ele.price.length);
    totalpriceforoneproduct.setAttribute("id","totalpriceforoneproduct")

    cartdiv.append(cartimg,cartname,totalpriceforoneproduct)

    document.querySelector("#showcartproducts").append(cartdiv);
})
}

displayData(addTocartArr);

function increasefun(ele,index){
    ele.cartquantity++;
   let target = addTocartArr.map(el=>el.name == ele.productName?{...el,cartquantity:ele.cartquantity++}:el)
    localStorage.setItem("addtocartData",JSON.stringify(target))
    displayData(target);
    
 var total = target.reduce(function(acc,ele,index){
    return acc+((ele.price.slice(3,ele.price.length))*ele.cartquantity)
    
},0)
    pricedetailsmaindiv1div2.innerText=total;
    pricedetailsmaindiv3div2.innerText=50;
    pricedetailsmaindiv4div2.innerText=pricedetailsmaindiv1div2.innerText-pricedetailsmaindiv3div2.innerText
}
function decreasefun(ele){
    if(ele.cartquantity>=2){
        ele.cartquantity--;
    }
        let target = addTocartArr.map(el=>el.name == ele.productName?{...el,cartquantity:ele.cartquantity++}:el)
        localStorage.setItem("addtocartData",JSON.stringify(target))
        displayData(target);
        
     var total = target.reduce(function(acc,ele,index){
        return acc+((ele.price.slice(3,ele.price.length))*ele.cartquantity)
        
    },0)
        pricedetailsmaindiv1div2.innerText=total;
        pricedetailsmaindiv3div2.innerText=0;
        pricedetailsmaindiv4div2.innerText=pricedetailsmaindiv1div2.innerText-pricedetailsmaindiv3div2.innerText


        

}


 var total = addTocartArr.reduce(function(acc,ele,index){
     return acc+((ele.price.slice(3,ele.price.length))*ele.cartquantity)
     
 },0)

 

function handleDelete(name,cartdiv){
  let cartdata= JSON.parse( localStorage.getItem('addtocartData'))
  
   let filteredArr =  cartdata.filter(el=>el.name!==name)
   localStorage.setItem("addtocartData",JSON.stringify(filteredArr))
   displayData(filteredArr)
   alert("Item deleted from Cart")






function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}