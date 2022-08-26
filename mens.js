
let data = [
    {
     img: "https://static.zara.net/photos///2022/I/0/2/p/5575/440/800/2/w/257/5575440800_6_1_1.jpg?ts=1657539206512",
     img1: "https://static.zara.net/photos///2022/I/0/2/p/5575/440/800/2/w/750/5575440800_2_1_1.jpg?ts=1657721546742",
     img2: "https://static.zara.net/photos///2022/I/0/2/p/5575/440/800/2/w/750/5575440800_2_2_1.jpg?ts=1657721599813",
     img3: "https://static.zara.net/photos///2022/I/0/2/p/5575/440/800/2/w/750/5575440800_2_3_1.jpg?ts=1657721528945",
     price: 2490.00,
     name: "BASIC SLIM FIT JEANS"
    },
    {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
       {
        img: "",
        img1: "",
        img2: "",
        img3: "",
        price: "",
        name: ""
       },
]




let filter = ()=> {
    let value = document.getElementById("filter").value;
    if(value==="below"){
       data = data.filter(el => el.price <=2400);
       //console.log(womensdata)
       redurdom(data);
    }
    else if(value==="above"){
        data = data.filter(el => el.price >=2400);
       redurdom(data);
    }
   
}

import {redurdom, detaildata} from "./rendurdom.js";

let cont = document.getElementById("container");
redurdom(data, cont);


document.getElementById("sort").addEventListener("change", sort1)

function sort1() {
  let value =  document.getElementById("sort").value;
console.log(value)
 if(value==="lth"){
    data.sort((a,b)=> {
      return  a.price-b.price;
    })
    let cont = document.getElementById("container");
    cont.innerHTML = null;
    redurdom(data,cont);
 console.log(data)

 }
 else{
    data.sort((a,b)=> {
       return b.price-a.price;
       // console.log(a.price)
    })
    let cont = document.getElementById("container");
    cont.innerHTML =null;
    redurdom(data,cont);
    console.log(data)

 }

}
