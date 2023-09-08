let items = document.querySelectorAll('.slider .item');
const inputName = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const sucess = document.querySelector("#sucess");
const errorNotes = document.querySelectorAll(".error");
const myContact = document.getElementById("#myContact");
const contactUs = document.getElementById("#contactUs");

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

    return errorFlag;
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

let active = 1;
function loadShow(){

    let stt = 0;

    items[active].style.transform = `none`;
    items[active].style.zIndex = '1';
    items[active].style.filter = 'none'
    items[active].style.opacity = 1;


    for(var i = active+1; i<items.length; i++){
        stt++;
        items[i].style.transform = `perspective(16px)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(3px)'
        // items[i].style.opacity = stt > 2 ? 0 : 0.5;
    }

    stt = 0;
    for(var i = active-1; i>=0; i--){
        stt++;
        items[i].style.transform = `translateX(${-50*stt}px) perspective(16px)`;
        items[i].style.zIndex = -stt;
        // items[i].style.filter = 'blur(3px)'
        // items[i].style.opacity = stt > 2 ? 0 : 0.5;
    }
}

loadShow();

function changeAlignmnetMyContact(){
    active = active + 1 < items.length ? active+1 : active;
    console.log("Tapped on white");
    loadShow();
}

function changeAlignmnetContactUs(){
    active = active - 1 >= 0 ? active-1 : active;
    console.log("Tapped on red");
    loadShow();
}


//function to send email
function sendEmail(){
    var params = {
        from_name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_goimyqr","template_frndb0f",params)
}