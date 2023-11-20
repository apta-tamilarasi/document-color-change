var colorname=document.getElementById("color");

function colorchange(){
    colorname.style.backgroundColor=colorname.value;
    colorname.style.color="white";
    colorname.style.borderRadius="30px 0px 30px 0px";
    colorname.style.fontFamily="lucida handwriting";
    colorname.style.textAlign="center";
}

var bodycolorname=document.getElementById("bodycolor");

function bodycolorchange(){
    document.body.style.backgroundColor=bodycolorname.value;
    
}