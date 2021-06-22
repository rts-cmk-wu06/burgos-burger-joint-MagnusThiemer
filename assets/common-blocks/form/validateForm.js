function validateForm(){
    //tællevariabel. Skal være nul før valideringen fuldføres
    let antalFejl = ""; 

    // <p> tag til fejlmeddelelse, findes i markuppen
    let fejlbesked = document.querySelector('#formFejlbesked');
    fejlbesked.style.visibility = "hidden";
    fejlbesked.innerHTML = "fejlbesked";

    // input-value variabler, der skal valideres på
    let navn = document.querySelector('#form__navn').value;
    let email = document.querySelector('#form__email').value;

    // ----- navn validering ----- //
    if (!navn) //tjekker om input feltet til navn er tomt
    {	
        antalFejl += 1;
        fejlbesked.innerHTML = "Udfyld navn";
        fejlbesked.style.visibility = "visible";
        return false;
    }
    else {
        let regexpbogstaver = /^[a-zA-Z ]+$/;  //tjekker - hvis der er skrevet noget - om det så indeholder ugyldige tegn
        if(!regexpbogstaver.test(navn))
        {
            antalFejl += 1;
            fejlbesked.innerHTML = "Navn må kun indeholde bogstaver";
            fejlbesked.style.visibility = "visible";
            return false;
        }
    }

    // ----- email validering ----- //
    if (!email) {
        antalFejl += 1;
        fejlbesked.innerHTML = "Udfyld email";
        fejlbesked.style.visibility = "visible";
        return false;;
    }
    else {
        let regexpmail = /^[A-Za-zÆØÅæøå0-9_.]+[@]{1}[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        if(!regexpmail.test(email)) {
            fejlbesked.innerHTML = "Ugyldig email";
            fejlbesked.style.visibility = "visible";
            return false;;
        }
    }

    // ----- form validering endelig ----- // 
    if (antalFejl === 0) { // hvis nul fejl, return true
        return true;

    } else { // hvis fejl, vis fejlmeddelelser

    }

}