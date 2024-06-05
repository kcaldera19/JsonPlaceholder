"use strict"
window.onload = () => {
    console.log("I work")

    let button = document.querySelector("#theButton");
    button.addEventListener('click', (getImage))
    
}


async function getImage(){
    try{
        
        let response = await fetch(`https://randomfox.ca/floof${imageofFox}`)
        if (!response.ok) {
            throw new Error("could not fetch the fox");
        }

        let foxImage = await response.json();
        foxImage =

       
        console.log(todoId);

       

    }
    catch(error){
        console.error(error)

    }
}

;
     