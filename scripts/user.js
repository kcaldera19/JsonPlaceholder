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
            <tr>

                <td>${users.id}</td>
                <td>${users.name}</td> 
                <td>${users.username}</td>
                <td>${users.email}</td>
                <td>${users.phone}</td>
                <td>${users.website}</td>
           </tr>
           
            `;

        });

    }
    catch (error) {
        console.error(error)

    }
};

