document.querySelector('#gallery').addEventListener('click', function(){
    if(event.target.src) { //validerer først på om der findes en src attribute på event target (så der ikke sker noget, hvis man ikke klikker på en thumbnail)
        let newSrc = event.target.src; //ny variabel, der fanger src attributten på det klikkede element
        document.querySelector('#gallerySelected').src = newSrc; //opdaterer src attributten i selected image.
    }
})

