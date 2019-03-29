"use strict";

let users = [];
function validateForm(){
    let username = document.forms["userForm"]["username"].value;
    console.log(username);
    if(username == ""){
        alert("Input is empty");
    } else {
        
    }

    users.push(username);
    console.log(users);

    
    return false;
}