"use strict"
window.onload=()=>{
    console.log("Carpe diem")
    //get the getComment form off the page
    const getCommentForm = document.querySelector("#getCommentToEdit");

    //listen for submit of the getCommentForm and attempt to populate the update form
    getCommentForm.addEventListener("submit", populateUpdateForm);

    //get the updateComment form off the page
    const updateCommentForm = document.querySelector("#updateCommentForm");

    //listen for submit of the getCommentForm and attempt to populate the update form
    updateCommentForm.addEventListener("submit", updateAComment);

}
//method to help get the data for update and fill out the form for the user
const populateUpdateForm = async (event) => {
    event.preventDefault();

    //go get the single comment for the id the user selected
    let comment = await getSingleComment(event.target.commentId.value);

    //fill out the form with the data from the comment we just got from the API
    document.querySelector("#body").value = comment.body;
    document.querySelector("#email").value = comment.email;
    document.querySelector("#name").value = comment.name;
    document.querySelector("#postId").value = comment.postId;
    document.querySelector("#id").value = comment.id;

}
const getSingleComment = async (commentId) => {

    const response = await fetch("https://jsonplaceholder.typicode.com/comments/" + commentId);
    let comment = await response.json();

    return comment;

}
//method/function to create a comment
//CRUD: (C)reate a comment
const createAComment = async (event) => {

    //call preventDefault to keep the page from reloading
    event.preventDefault();

    //generate a new form data object
    let formData = new FormData(event.target);

    //generate a JavaScript Object from the formData object created above
    let formDataAsObject = Object.fromEntries(formData);

    //try catch for error handling
    try {

        //make a fetch (POST) request to create a comment in the API
        let response = await fetch("https://jsonplaceholder.typicode.com/comments",
            {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                //take the data from the form and build the body of the request
                body: JSON.stringify(formDataAsObject)
            }
        );
        //turn the response in to something we can work with
        let newComment = await response.json();

        //put the comments in the console
        console.log(newComment)

    } catch (err) {

        //what the hell happend
        console.log("something went south")

    }

}