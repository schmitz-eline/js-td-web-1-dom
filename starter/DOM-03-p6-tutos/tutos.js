// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
DOM - PREPA 6 : « Tutos » : construire une liste de tutos JavaScript
Vous disposez d’un fichier HTML qui contient une nav.
1. Créer un objet tutos qui contient les tutoriels JavaScript suivants :
	- Openclassrooms : Apprenez à coder avec JavaScript : https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript
	- Openclassrooms : Créez des pages web interactives avec JavaScript : https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/
	- Udemy : The Complete JavaScript Course 2019 : Build Real Projects! sur UDEMY : https://www.udemy.com/course/the-complete-javascript-course/
2. Parcourir cet objet pour récupérer ces infos afin d’afficher un menu créé dynamiquement dans la page Web :
	- Le titre du menu (créé dynamiquement avec JS) est « Mes tutos JavaScript »
	- Le libellé du lien est à chaque fois le texte qui précède le lien dans l’objet tutos
	- Pour chaque item, le lien mène vers l’adresse mentionnée dans l'objet tutos
	- Pour chaque lien, prévoyez un title (« Vers le site de … »,
		avec le texte qui précède le lien dans l’énoncé ci-dessus)
AIDE : Utilisez une boucle for/in pour parcourir l'objet tutos
*/

const tutos = {
    "Openclassrooms : Apprenez à coder avec JavaScript": "https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript",
    "Openclassrooms : Créez des pages web interactives avec JavaScript": "https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/",
    "Udemy : The Complete JavaScript Course 2019 : Build Real Projects!": "https://www.udemy.com/course/the-complete-javascript-course/"
};

const h2Element = document.createElement('h2');
h2Element.textContent = 'Mes tutos JavaScript';
document.querySelector('nav').appendChild(h2Element);

const ulElement = document.createElement('ul');
for (const[titre, url] of Object.entries(tutos)) {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    aElement.href = url;
    aElement.textContent = titre;
    aElement.title = `Vers le site de ${titre.split(':')[0]}`;
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
}

document.querySelector('nav').appendChild(ulElement);