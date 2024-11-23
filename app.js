//Animation icone menu
let menu = document.getElementById("menu");

menu.onclick = function(){
menu.classList.toggle("openmenu");
}

//Ouverture / Fermeture du Menu
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu(){
if(menuList.style.maxHeight == "0px")
{
  menuList.style.maxHeight = "350px";
}
else{
  menuList.style.maxHeight = "0px";
}
}
