let redurdom = (data, cont)=> {
    // let cont = document.getElementById("container");
     // cont.innerHTML = null

    data.forEach((el)=> {
        let div = document.createElement("div")
        let image = document.createElement("img");
       
        let Name = document.createElement("p");
        Name.innerText = el.name;
         let Price = document.createElement("p");
        Price.innerText = `Rs-${el.price}`;
        image.src = el.img;
        div.onclick = ()=>{
            detaildata(el);
        }
        div.append(image,Name,Price);
        cont.append(div); 
    })
};

let detaildata = (el)=> {
    let data = el;

    localStorage.setItem("detaildata", JSON.stringify(data));
    window.location.href = "womensD.html";
}

export {redurdom, detaildata};