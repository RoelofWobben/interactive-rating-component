// Zoek de button 

let button = document.querySelector('button'); 

// Zoek alle radio-buttons  

let radio_buttons = document.querySelectorAll('input');

// Zoek het keuzescherm 

let keuze_scherm = document.querySelector('.choice_container');

// Zoek het dank je wel scherm 

let dank_scherm = document.querySelector('.thanks_container'); 

// Zoek het plaats waar de keuze geplaatst moet worden 

let keuze = document.querySelector('.choice')

// maak een event-listener voor de button 

parseResult = () => {
    // zoek de button die gekozen is
    for (const radio_button of radio_buttons) {
        if (radio_button.checked) {
            // Laat het keuze scherm verdwijnen.
            keuze_scherm.classList.add('fade_away');
            // Laat het dank je wel scherm opkomen
            dank_scherm.classList.add('fade_up');
            // Laat de keuze zien op het dank je wel screen
            keuze.innerText = radio_button.value;   
        }
    }
}


button.addEventListener('click', parseResult); 



