const email=document.getElementById("email");
const password=document.getElementById("password");
const button=document.getElementById("login");

const emailACC = "hacktiv8@gmail.com";
const passwordACC = "inpg-batch1";

function checkLogin(){
    if(password.value===passwordACC && email.value===emailACC){
        alert("benar");
    } else{
        window.location.href="https://google.com";
    }
}

button.addEventListener("click",checkLogin);