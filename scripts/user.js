"use strict"

window.onload = () => {
    console.log("I am working here")
    getUser();

}

async function getUser() {
    try {

        let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if (!response.ok) {
            throw new Error("could not fetch resources");
        }


        let data = await response.json();
        let usersTableBody = document.getElementById("usersTableBody");
        usersTableBody.innerHTML = "";

        data.forEach((users) => {
            usersTableBody.innerHTML += `
            ${users.id}
            ${users.name} 
            ${users.username}
            ${users.email}
            ${users.phone}
            ${users.website}
           
           
            `;

        });





    }
    catch (error) {
        console.error(error)

    }
};

