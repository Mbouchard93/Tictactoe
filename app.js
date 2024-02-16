let cases = document.getElementsByClassName('cell'); // recupere le tableau d'éléments html 
let tour = 'X' ;  // attribut le symbole du joueur actuelle 
let restart = document.querySelector('.game--restart')

function Symbole(caseIndex)  {
    if (cases[caseIndex].innerHTML !== ''){  // vérifie si la case est rempli !== n'est pas égale a '' ( vide)  // inner.HTML vérifie le contenue de l'élément cibler ici les clase cases
        return;
    }
cases[caseIndex].innerHTML = tour ; // place le symbole du joueur actuelle dans la case en premier X
tour = (tour === 'X') ? 'O' : 'X';  // opérateur ternaire alternative a else pour changer le tour du joueur
let messageElement = document.getElementById('message');
messageElement.innerHTML = `C'est au tour du joueur ${tour} de jouer`;
if (tour == 'O'){
    messageElement.style.color = 'rgb(238, 105, 105)';
} else {
    messageElement.style.color = 'rgb(97, 100, 148)';    // je change la couleur du text en fonction du joeur jouer 
} // affiche le joueur a qui est le tour de jouer
}



for (let i = 0; i < cases.length; i++) {
    cases[i].addEventListener('click', () => {
        Symbole(i);
    });
}

restart.addEventListener('click', () => {
location.reload();  // recharge la page donc remet toute les case a zéro 
});



/*


let isRequired = true;
let numbers = [22, 32 , 42 ,52 ,32];
let user = {
    names : 'mariane',
    lastName : 'bouchard',
    age : 32,
}

for (const element of numbers) {   // console log tout les élément du tableau numbers
    console.log(element);
    
}

for (let element in user) {    // affiche dans la console les valeur des propriété de l'objet user
    console.log(`${element}: ${user[element]}`)
}


if (numbers[1] === numbers[4]) {   // verifie la valeur de l'index  1 est éagale a celle a l'index 4 si oui on console log egale
    console.log('Egale')
};

if (numbers[1] === user.age) {
    console.log('miracle') ;
} else {
    console.log('Attendu');   // on demande si le tableau de type nombre est égale a la valeur de la propriété age de
                              //l'objet user si elle est égale on console log miracle sinon on console log attendu
}


function concat (string1, string2) {
    return string1 + string2
}

*/