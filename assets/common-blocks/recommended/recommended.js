const recommended = [ // array med navnet recommended, der indeholder en række objekter. Hvert object kan indeholde data i form af key value pairs.
    {
        src:            './assets/images/favorit01.jpg',
        name:           'Grilled Burger',
        price:          65,
        rabatProcent:   30,
    }, {
        src:            './assets/images/favorit02.jpg',
        name:           'The Firehouse',
        price:          70,
        rabatProcent:   0,
    }, {
        src:            './assets/images/favorit03.jpg',
        name:           'Grilled Burger',
        price:          90,
        rabatProcent:   0,
    }, {
        src:            './assets/images/favorit04.jpg',
        name:           'Super Vegan',
        price:          70,
        rabatProcent:   0,
    }
]

window.addEventListener('load', (event) => { // event listener, der lytter efter et page load.
    recommended.forEach(createRecommended); //forEach loop, der løber igennem arrayet og udfører funktionen createRecommended for hver
  });

function createRecommended(){
    // 1. create figure element med class attribut 'recommended__figure'
    // 2. create image og figcaption tags med attributter
    // 3. brug data fra objekter i arrayet til at opdatere værdier i de skabte elementer
    // 4. appendChild på parent elementet, for at føre elementer ind i HTML'en

    
}