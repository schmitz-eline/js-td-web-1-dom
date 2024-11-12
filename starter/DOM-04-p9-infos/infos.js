// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 9 : « Infos » : informations sur un élément
Récupérez la largeur et la hauteur de la section d'id "contenu"
et affichez les deux informations dans une liste
(un item pour la largeur et un item pour la hauteur)
que vous insérez dans la section d'id "infos" après le titre
*/

const styleElement = getComputedStyle(document.getElementById('contenu'));
const ulElement = document.createElement('ul');
const largeurElement = document.createElement('li');
largeurElement.textContent = `Largeur : ${styleElement.width}`;
const hauteurElement = document.createElement('li');
hauteurElement.textContent = `Hauteur : ${styleElement.height}`;
ulElement.appendChild(largeurElement);
ulElement.appendChild(hauteurElement);
document.getElementById('infos').appendChild(document.createTextNode("Informations sur l'élément :"));
document.getElementById('infos').appendChild(ulElement);