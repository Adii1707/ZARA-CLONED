

let data = JSON.parse(localStorage.getItem("detaildata"));

let redurdom = (data)=> {
    let pic = document.getElementById("pic");
    pic.innerHTML = null;
    let detail = document.getElementById("detail");
    detail.innerHTML =null;


        let div = document.createElement("div")
        let image = document.createElement("img");
        let p = document.createElement("p");
        p.innerText = "Collared overshirt with long sleeves. Contrast embroidery detail. Front welt pockets. Asymmetric hem. Front fastening with metal snap-buttons."
       
        let Name = document.createElement("h3");
        Name.innerText = data.name;
         let Price = document.createElement("h3");
         Price.innerText = `Rs-${data.price}`;
        image.src = data.img;
        let bag = document.createElement("button");
           bag.innerText = "Add To Bag"
           bag.style.backgroundColor = "black"
           bag.style.color = "white";
        div.append(image);
        pic.append(div); 
        detail.append(Name,p,Price,bag)

}
redurdom(data);