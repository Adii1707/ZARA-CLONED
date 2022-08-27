

let data = JSON.parse(localStorage.getItem("detaildata"));
let cartdata = JSON.parse(localStorage.getItem("cart")) || [];

let redurdom = (data)=> {
    let pic = document.getElementById("pic");
    pic.innerHTML = null;
    let detail = document.getElementById("detail");
    detail.innerHTML =null;


        let div = document.createElement("div")
        let image = document.createElement("img");
        let image1 = document.createElement("img");
        let image2 = document.createElement("img");
        let image3 = document.createElement("img");
        image1.src = data.img1;
        image2.src = data.img2;
        image3.src = data.img3;
        
        let p = document.createElement("p");
        p.innerText = "Collared overshirt with long sleeves. Contrast embroidery detail. Front welt pockets. Asymmetric hem. Front fastening with metal snap-buttons."
       
        let Name = document.createElement("h3");
        Name.innerText = data.name;
         let Price = document.createElement("p");
         Price.innerText = `Rs-${data.price}`;
        image.src = data.img;
        let bag = document.createElement("button");
           bag.innerText = "Add To Bag"
           bag.style.backgroundColor = "black"
           bag.style.color = "white";
           bag.onclick = ()=>{
            addtobag(data)
           }


           let div1 = document.createElement("div");
           let line = document.createElement("hr");
           let line1 = document.createElement("hr");

           let p1 = document.createElement("p");
           p1.innerText = "S";
           
           let p2 = document.createElement("p");
           let p3 = document.createElement("p");
           let p4 = document.createElement("p");
           let p5 = document.createElement("p");
           let p6 = document.createElement("p");
           p5.innerText = "CHECK IN-STORE AVAILABILITY";
           p6.innerText = "DELIVERY, EXCHANGES AND RETURNS";
           
           p2.innerText = "M";
           p3.innerText = "L";
           p4.innerText = "XL";

          

        div1.append(line,p1,p2,p3,p4,line1)
        div.append(image,image1,image2,image3);
        detail.append(Name,p,Price,div1,bag,p5,p6)
        pic.append(div);

};
redurdom(data);

let addtobag = (el)=> {

    let cdata = {
        image: el.img,
        Name: el.name,
        Price: el.price
    };
    cartdata.push(cdata);
  localStorage.setItem("cart",JSON.stringify(cartdata));
  alert("product added successfully");
    
    }

    //----------To show userName after Login-------------------------------------
let userData = JSON.parse(localStorage.getItem("user"));
if(userData != null){
    document.getElementById("logInOption").innerText=userData.Name;
}