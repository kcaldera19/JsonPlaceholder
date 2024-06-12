"use strict"
window.onload = () => {
    console.log("Carpe diem")


    //get the updateComment form off the page
    const toForm = document.querySelector("#fetchToDoForm");

    //listen for submit of the getCommentForm and attempt to populate the update form
    toForm.addEventListener("submit", getToDoForm);

    //get the getComment form off the page
    const getToDoUpdated = document.querySelector("#updatedTodoForm");

    //listen for submit of the getCommentForm and attempt to populate the update form
    getToDoUpdated.addEventListener("submit", updatedToDo);
    const cancelButton =document.querySelector("#cancelButton");
    cancelButton.addEventListener("click", cancelEdit)

}
const cancelEdit = ()=>{
    window.location.href="./index.html"
}
//method to help get the data for update and fill out the form for the user
const getToDoForm = async (event) => {
    event.preventDefault();


    //go get the single comment for the id the user selected
    let todo = await gettodo(event.target.toDoId.value);

    //fill out the form with the data from the comment we just got from the API
    document.querySelector("#userId").value = todo.userId;
    document.querySelector("#title").value = todo.title;
    document.querySelector("#completed").value = todo.completed;
    document.querySelector("#id").value = todo.id;

}
const gettodo = async (todoId) => {

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/" + todoId);
    let todo = await response.json();
    console.log(todo);
    return todo;

}
//method/function to create a comment
//CRUD: (C)reate a comment
const updatedToDo = async (event) => {

    //call preventDefault to keep the page from reloading
    event.preventDefault();



    //try catch for error handling
    try {

        //make a fetch (POST) request to create a comment in the API
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/` + event.target.id.value,
            {

                method: "PUT",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                //take the data from the form and build the body of the request
                body: JSON.stringify({
                    userId: event.target.userId.value,
                    title: event.target.title.value,

                    completed: event.target.completed.value,
                })
            });

            let updatedToDo = await response.json();

            //put the comments in the console
            console.log(updatedToDo)


    } catch (err) {

        //what the hell happend
        console.log("something went south")

    }

}