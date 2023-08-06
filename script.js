"use strict mode";
function rgb(){
    return Math.floor(Math.random()*255);
}

let had = document.createElement("div");
had.style.width = "100px";
had.style.height = "100px";
had.style.border = "1px solid black";
had.style.borderRadius = "100%";
had.style.display = "inline-block";
had.style.marginTop = "100px";
document.body.appendChild(had);

let eyes = document.createElement("div");
eyes.style.width = "10px";
eyes.style.height = "10px";
eyes.style.backgroundColor = "black"; 
eyes.style.border = "1px solid grey";
eyes.style.borderRadius = "100%";
eyes.style.margin = "30px 30px";
had.appendChild(eyes);
 
let mouth = document.createElement("div");
mouth.style.width = "20px";
mouth.style.height = "10px";
mouth.style.borderBottom = "2px solid black";
mouth.style.borderBottomRightRadius = "20px";
mouth.style.marginLeft = "12px";
had.appendChild(mouth);

for(let i = 0; i < 12; i++){
    let body = document.createElement("div");
    body.style.width = "100px";
    body.style.height = "100px";
    body.style.border = "1px solid grey";
    body.style.borderRadius = "100%";
    body.style.marginTop = "100px";
    document.body.appendChild(body);
    body.style.display = "inline-block";
    body.addEventListener("mousemove", function(){
        body.style.backgroundColor = "rgb("+rgb()+","+rgb()+","+rgb()+")";
    })
}



