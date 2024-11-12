// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
SOURCE :
- https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3501891-modifiez-la-structure-de-la-page
- https://github.com/oc-courses/javascript-web
*/

/* EXERCICE RÉCAPITULATIF : 
Vous disposez d'un document HTML contenant juste un body
et un titre "Mes jeux". Écrire le code JS qui
- place dans un objet "mesJeux" les 4 jeux suivants avec leur catégorie
	* League of Legends	: jeu de stratégie/action
	* World of Warcraft : MMORPG (jeu de rôle en ligne massivement multijoueur)
	* Call of Duty - Modern Warfare : FPS (jeu de tir)
	* Fifa 2020 : jeu de simulation
- parcourt le tableau avec une boucle pour récupérer ces infos
  et afficher dans le HTML, au chargement de la page, une liste
  d'id "jeux" créée dynamiquement qui reprend les jeux suivis de
  leur catégorie entre parenthèses  
  */

const mesJeux = {
    'League of Legends': 'jeu de stratégie/action',
    'World of Warcraft': 'MMORPG (jeu de rôle en ligne massivement multijoueur)',
    'Call of Duty - Modern Warfare': 'FPS (jeu de tir)',
    'Fifa 2020': 'jeu de simulation'
};

const ulElement = document.createElement('ul');
ulElement.id = 'jeux';

for (const [jeu, categorie] of Object.entries(mesJeux)) {
    const liElement = document.createElement('li');
    liElement.textContent = `${jeu} (${categorie})`;
    ulElement.appendChild(liElement);
}

document.body.appendChild(ulElement);