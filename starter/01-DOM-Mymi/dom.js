/*
Exercices qui accompagnent le tuto en anglais de Christian Heilmann :
« The essentials of DOM scripting in 10 minutes »,
http://icant.co.uk/articles/domessentials/
=> voir traduction française sur transparents (js-cours-DOM.pdf)
*/

/* 1. Cibler l'élément d'id nav */
console.log(document.getElementById('nav'));

/* 2. Récupérer tous les li */
console.log(document.querySelectorAll('li'));

/* 3. Cibler le 4e li */
console.log(document.querySelectorAll('li')[3]);

/* 4. Compter le nombre de li dans la page */
console.log(document.querySelectorAll('li').length);

/* 5. Cibler le premier li pair */
console.log(document.querySelector('li.pair'));

/* 6. Récupérer tous les li de classe impair */
/* a) afficher ce qu'on obtient */
console.log(document.querySelectorAll('li.impair'));

/* b) afficher le 2e li de classe impair */
console.log(document.querySelectorAll('li.impair')[1]);

/* c) afficher chacun des li impair */
console.log(document.querySelectorAll('li.impair'));

/* d) compter le nombre de li de classe impair dans la page */
console.log(document.querySelectorAll('li.impair').length);

/* 7. Cibler le 4e li puis, à partir de là, cibler son frère juste avant lui */
console.log(document.querySelectorAll('li')[3].previousSibling);
console.log(document.querySelector('li:nth-child(4)').previousSibling);

/* 8. Cibler le 4e li puis, à partir de là, cibler le suivant */
console.log(document.querySelectorAll('li')[3].nextSibling);
console.log(document.querySelector('li:nth-child(4)').nextSibling);

/* 9. Cibler le parent du 4e li */
console.log(document.querySelectorAll('li')[3].parentNode);

/* 10. Récupérer tous les enfants de l'ul */
/* a) afficher ce qu'on obtient */
console.log(document.querySelector('ul').childNodes);

/* b) cibler le 1er enfant de l'ul */
console.log(document.querySelector('ul').firstChild);

/* c) cibler le dernier enfant de l'ul */
console.log(document.querySelector('ul').lastChild);

/* c) cibler le 4e enfant de l'ul */
console.log(document.querySelectorAll('li')[3]);

/* 11. Chaînage de méthodes - que retournent les expressions suivantes ? */
/* a) document.getElementById("nav"). getElementsByTagName("li")[3].firstChild */
console.log(document.getElementById("nav").getElementsByTagName("li")[3].firstChild); // retourne le a du 4e li

/* b) document. getElementsByTagName("li")[2].childNodes[3].firstChild */
/* undefined ??? */

/* c) document. getElementsByTagName("li")[2].firstChild.firstChild */
console.log(document.getElementsByTagName("li")[2].firstChild.firstChild); // retourne le texte du a du 3e li


/* 12. Afficher les propriétés (nom du nœud, type de nœud, valeur du nœud) d'un nœud
*/
/* a) du noeud document.getElementById("nav").getElementsByTagName("li")[3].firstChild */
const a = document.getElementById("nav").getElementsByTagName("li")[3].firstChild;
console.log(`nodeName : ${a.nodeName}, nodeType : ${a.nodeType}, nodeValue : ${a.nodeValue}`);

/* b) du noeud document.getElementById("nav").getElementsByTagName("a")[2].firstChild */
const b = document.getElementById("nav").getElementsByTagName("a")[2].firstChild;
console.log(`nodeName : ${b.nodeName}, nodeType : ${b.nodeType}, nodeValue : ${b.nodeValue}`);

/* 13. Changer le texte "Photos" en "Visuals" */
// document.getElementById('nav').querySelectorAll('a')[2].firstChild.nodeValue='Visuals';

/* 14. Modifier les attributs d'un élément */
/* a) Changer la valeur de l'attribut href du lien "Photos" en "photos.php" */
// document.getElementById('nav').querySelectorAll('a')[2].setAttribute('href', 'photos.php');

/* a) Lui ajouter un attribut title avec la valeur "voir mes photos" */
// document.getElementById('nav').querySelectorAll('a')[2].setAttribute('title', 'voir mes photos');

/* 15. Supprimer le dernier li du menu
       (faites-le en utilisant la méthode querySelector pour cible l'ul
        et querySelectorAll pour cibler les li)
*/
// document.querySelector('ul').removeChild(document.querySelectorAll('li')[5]);

/* 16. Ajouter un li à la fin de la liste */
// document.querySelector('ul').appendChild(document.createElement('li'));

/* 17. Ajouter un lien dans le menu. Ce lien doit
	- venir avant "photos",
	- afficher le texte "Bibliographie",
	- pointer vers la page "biblio.html" et
	- afficher au survol la boîte de dialogue avec le texte "consulter ma bibliographie"  */
const newLi = document.createElement('li');
const newLink = document.createElement('a');
const photosLi17 = document.getElementById('li4');
newLink.textContent = 'Bibliographie';
newLink.href = 'biblio.html';
newLink.title = 'consulter ma bibliographie';
newLi.appendChild(newLink);
document.getElementById('nav').insertBefore(newLi, photosLi17);

/* 18. Modifier le lien "Photos" 
	  - changer son libellé en "Visuals" 
	  - ajouter une boîte de dialogue au survol avec le texte "voir la galerie" 
	  - changer la cible du lien en "visuals.html " */
/* const photosLi18 = document.getElementById('li4');
photosLi18.firstChild.firstChild.nodeValue = 'Visuals';
photosLi18.querySelector('a').setAttribute('title', 'voir la galerie');
photosLi18.querySelector('a').setAttribute('href', 'visuals.html'); */

/* 19. Dupliquer le li "Photos" et s'en servir pour ajouter un lien
	   - juste après le lien "Photos"
	   - dont le libellé est "Visuals" 
	   - avec une boîte de dialogue au survol qui affiche le texte "voir la galerie" 
	   - qui pointe vers la page "visuals.html " */
const photosLi19 = document.getElementById('li4');
const duplicate = photosLi19.cloneNode(true);
document.getElementById('nav').insertBefore(duplicate, photosLi19);
photosLi19.firstChild.firstChild.nodeValue = 'Visuals';
photosLi19.querySelector('a').setAttribute('title', 'voir la galerie');
photosLi19.querySelector('a').setAttribute('href', 'visuals.html');

/* 20. Remplacer le dernier lien par le texte (non cliquable) "Contact : monmail@gmail.com"*/
document.getElementById('nav').removeChild(document.getElementById('li6'));
const newContact = document.createElement('li');
newContact.appendChild(document.createTextNode('Contact : monmail@gmail.com'));
document.getElementById('nav').replaceChild(newContact, document.getElementById('nav').lastChild);