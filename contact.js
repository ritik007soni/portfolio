const inputName = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const sucess = document.querySelector("#sucess");
const errorNotes = document.querySelectorAll(".error");

//validate data
function validateForm(){
    clearMessage();

    let errorFlag = false;

    if(inputName.value.length < 1){
        errorNotes[0].innerText = "Name can not be blank";
        inputName.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNotes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.length < 1){
        errorNotes[2].innerText = "Please enter a message";
        message.classList.add("error-border");
        errorFlag = true;
    }

    //if error not occured
    if(!errorFlag){
        sucess.innerText = "SUCESS!";
    }
}

//clear error or sucess message
function clearMessage(){
    for(let i=0;i<errorNotes.length;i++){
        errorNotes[i].innerText = "";
    }
    inputName.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

//
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}