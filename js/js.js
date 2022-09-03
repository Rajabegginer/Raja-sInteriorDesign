function navon(){
    document.getElementById('navbar').style.display = "block";
    document.getElementById('ham1').style.display = "none";
    document.getElementById('close-menu').style.display = "block";  
    document.getElementById('overlay').style.display = "block";  
}

function navoff(){
    document.getElementById('navbar').style.display = "none";
    document.getElementById('close-menu').style.display = "none";
    document.getElementById('ham1').style.display = "inline";
    document.getElementById('overlay').style.display = "none";
}