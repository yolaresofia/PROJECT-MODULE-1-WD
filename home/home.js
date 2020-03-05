var frase = document.getElementById('frase');
var receiver = document.querySelector('.receiver');
var sender = document.querySelector('.sender');
var arrOne = ['asshole', 'awesome', 'bag', 'because', 'bucket', 'bye', 'cool', 'cup', 'diabetes', 'even', 'anyone', 'anything', 'family', 'fascinating', 'flying', 'give', 'holygrail', 'horse', 'idea', 'immensity', 'jinglebells', 'life', 'logs', 'looking', 'maybe', 'me', 'mornin', 'no', 'pink', 'programmer', 'question', 'shit', 'single', 'thanks', 'that', 'this', 'too', 'what', 'zero'];
var arrOnePos = Math.floor(Math.random() * arrOne.length);
var randomPos = arrOne[arrOnePos];
var gato = document.querySelectorAll('.gato');
var conejo = document.querySelectorAll('.conejitos');
var closeButton = document.querySelector('.close-button');
var randomImg = document.querySelector('.img-random');
let finalReceiver, finalSender, arrayOfFrases, lengthArray;
let inp = document.querySelectorAll('input');
var randomImg2 = document.querySelector('.img-random2');
let allConejos = [...conejo];




//var rawFonts = ('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyALN15CEmX5LpdtZyPKYa06Vf63Atm5sXg')

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

function getValues() {
    finalReceiver = receiver.value
    finalSender = sender.value
    arrayOfFrases = [`Fuck you, asshole. -${finalSender}`, `This is Fucking Awesome. -${finalSender}`, `${finalReceiver} back the fuck off. -${finalSender}`, `Happy fucking birthday, ${finalReceiver} -${finalSender}`, `Why? Because Fuck you, that's why. -${sender.value}`, `How about a nice cup of shut the fuck up? -${finalSender}`, `Everyone can go and fuck off. -${finalSender}`];
    lengthArray = arrayOfFrases.length - 1;
}

//random frase
var getFrase = async () => {
    getValues();
    sender.value = '';
    receiver.value = ''
    var getFraseRaw = arrayOfFrases[Math.floor(Math.random() * lengthArray)];
    console.log(getFraseRaw);
    allConejos.forEach(conejo => {
        let testFrase = document.createElement('p');
        testFrase.classList.add('frase-tag-p');
        testFrase.innerText = getFraseRaw;
        conejo.appendChild(testFrase);
        console.log(conejo)
        let randomNum = Math.floor(Math.random() * 6 + 1);
        randomImg.src = `imagenes/fotos-de-tarjetas-0${randomNum}.png`
        randomImg.style.display = 'inline';
        closeButton.style.display = 'inline';
    });
    return getFraseRaw;
};

var gato1 = document.getElementsByClassName('gato1')[0];
gato1.onclick = showImg
function showImg() {
    randomImg2.style.display = 'inline';
    closeButton.style.display = 'inline';
    console.log("click en gato1");
}

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