// 02-DOM : PARCOUREZ LE DOM
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/
/*
 DOM - PREPA 3 : « Instruments » : attributs et classes
- Créez une fonction getInfosLiens qui doit afficher :
    - le nombre total de liens dans la page web ;
    - la cible du premier et du dernier lien.
    N.B. Cette fonction doit afficher un résultat correct, quel que soit le nombre de liens présents dans la page.
- Ajoutez un nouvel instrument à la page web, puis vérifiez le nouveau résultat de votre programme.
    <li id="clavecin" class="cordes pincees">
        Le <a href="https://fr.wikipedia.org/wiki/Clavecin">clavecin</a>
    </li>
- Écrivez la fonction possede qui vérifie qu'un élément avec un certain id possède une classe
- Testez grâce à cette foncion 
    - si l'élément d'id "saxophone" possède la classe "bois" (doit afficher true)
    - si l'élément d'id "saxophone" possède la classe "cuivre" (doit afficher false)
    - si l'élément d'id "trompette" possède la classe "cuivre" (doit afficher true)
    - si l'élément d'id "contrebasse" possède la classe "cordes" (doit afficher "Aucun élément ne possède l'id contrebasse")
*/

function getInfosLiens() {
    const liensElements = document.getElementsByTagName('a');
    const nbLiens = liensElements.length;
    console.log(`Il y a ${nbLiens} liens dans la page.`);

    if (nbLiens > 0) {
        console.log('Premier lien : ' + liensElements[0].getAttribute('href'));
        console.log('Dernier lien : ' + liensElements[nbLiens - 1].getAttribute('href'));
    }
}

getInfosLiens();

document.querySelector('ul').insertAdjacentHTML('beforeend', '<li id="clavecin" class="cordes pincees">Le <a href="https://fr.wikipedia.org/wiki/Clavecin">clavecin</a></li>');

getInfosLiens();

function possede(id, classe) {
    const instrument = document.getElementById(id);
    if (instrument !== null) {
        console.log(instrument.classList.contains(classe));
    } else {
        console.log(`Aucun élément ne possède l'id ${id}.`)
    }
}

possede('saxophone', 'bois');
possede('saxophone', 'cuivre');
possede('trompette', 'cuivre');
possede('contrebasse', 'cordes');