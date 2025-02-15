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

const button = document.getElementById('myButton');
const popup = document.getElementById('popup');
const closeButton = document.querySelector('.close'); // On cible l'élément avec la classe 'close'

button.addEventListener('click', () => {
    popup.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
    popup.classList.add('hidden');
});

//Fonction pour ouvrir mon CV
function ouvrirPDF(url) {
  window.open(url, '_blank');
  return false;
}