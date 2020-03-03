var frase = document.getElementById('frase');
var receiver = document.querySelector('.receiver').value;
var arrOne = ['asshole', 'awesome', 'bag', 'because', 'bucket', 'bye', 'cool', 'cup', 'diabetes', 'even', 'anyone', 'anything', 'family', 'fascinating', 'flying', 'give', 'holygrail', 'horse', 'idea', 'immensity', 'jinglebells', 'life', 'logs', 'looking', 'maybe', 'me', 'mornin', 'no', 'pink', 'programmer', 'question', 'shit', 'single', 'thanks', 'that', 'this', 'too', 'what', 'zero'];
var arrOnePos = Math.floor(Math.random() * arrOne.length);
var sender = document.querySelector('.sender').value;
var randomPos = arrOne[arrOnePos]
var gato = document.querySelectorAll('.gato');
var conejo = document.querySelector('.conejitos');
var closeButton = document.querySelector('.close-button');
var randomImg = document.querySelector('.img-random');
var arrayOfFrases = [`Fuck you, asshole. -${sender}`, `This is Fucking Awesome. -${sender}`, `${receiver} back the fuck off. -${sender}`, `Happy fucking birthday, ${receiver} -${sender}`, `Why? Because Fuck you, that's why. -${sender}`, `How about a nice cup of shut the fuck up? -${sender}`, `Everyone can go and fuck off. -${sender}`];
var lengthArray = arrayOfFrases.length - 1;



// //MUY IMPORTANTE FUNCION REAL LPM
// var getFrase = async () => {
//     console.log('gato clickado');
//     var response1 = await fetch(`https://www.foaas.com/${randomPos}/${sender.value}`, {
//         headers: {
//             Accept: 'application/json'
//         }
//     });
//     var getFraseRaw = await response1.json();
//     console.log(getFraseRaw);
//     let testFrase = document.createElement('p');
//     testFrase.classList.add('frase-tag-p');
//     testFrase.innerText = getFraseRaw;
//     conejo.appendChild(testFrase);
//     let randomNum = Math.floor(Math.random() * 6 + 1);
//     console.log(randomNum);
//     randomImg.src = `imagenes/fotos-de-tarjetas-0${randomNum}.png`
//     randomImg.style.display = 'inline';
//     closeButton.style.display = 'inline';
//     console.log(getFraseRaw.message + ' ' + getFraseRaw.subtitle);
// };



//random frase
var getFrase = async () => {
    var getFraseRaw = arrayOfFrases[Math.floor(Math.random() * lengthArray)];
    console.log(getFraseRaw);
    let testFrase = document.createElement('p');
    testFrase.classList.add('frase-tag-p');
    testFrase.innerText = getFraseRaw;
    conejo.appendChild(testFrase);
    let randomNum = Math.floor(Math.random() * 6 + 1);
    console.log(randomNum);
    randomImg.src = `imagenes/fotos-de-tarjetas-0${randomNum}.png`
    randomImg.style.display = 'inline';
    closeButton.style.display = 'inline';
    return getFraseRaw;
};




//onclick me da la frase
[...gato].forEach(function (element) {
    element.addEventListener('click', getFrase, false);
});

var allp = document.getElementsByTagName("p");

//por default estan hidden
function hideElements() {
    randomImg.style.display = 'none';
    closeButton.style.display = 'none';
    for (i = 0; i < allp.length; i++) {
        allp[i].style.display = 'none';
    }
}

closeButton.addEventListener('click', hideElements);