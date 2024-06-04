"use strict"
window.onload = () => {
    console.log("I work")

    let button = document.querySelector("#theButton");
    button.addEventListener('click', (fetchdata))
    
}


async function fetchdata(){
    try{
        let getdata = document.getElementById("todoId").value;
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${getdata}`)
        if (!response.ok) {
            throw new Error("could not fetch resources");
        }

        let data = await response.json();

        let todoId = data.userId;
        console.log(todoId);

        let result = document.getElementById("results");
        result.innerHTML=`<p>
        userID: ${data.userId} <p>
        Title:${data.title}<p>
        Completed:${data.completed}`

    }
    catch(error){
        console.error(error)

    }
}

;
     

