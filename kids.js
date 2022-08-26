
let data = [
    {
     img: "https://static.zara.net/photos///2022/I/0/3/p/6987/703/800/303/w/750/6987703800_1_1_1.jpg?ts=1660743132808",
     img1: "https://static.zara.net/photos///2022/I/0/3/p/6987/703/800/2/w/750/6987703800_6_1_1.jpg?ts=1659970476862",
     img2: "https://static.zara.net/photos///2022/I/0/3/p/6987/703/800/2/w/750/6987703800_6_2_1.jpg?ts=1659970476878",
     img3: "https://static.zara.net/photos///2022/I/0/3/p/6987/703/800/2/w/750/6987703800_6_3_1.jpg?ts=1659970482616",
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
