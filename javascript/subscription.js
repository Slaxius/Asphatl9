document.addEventListener('DOMContentLoaded', () =>{
    let menubar = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    
    menubar.onclick = () =>{
        navbar.classList.toggle('active');
    
        if (navbar.classList.contains('active')) {
            menubar.src = '/asset/icon/close.png';
        } else {
            menubar.src = '/asset/icon/menu.png';
        }
    }
});

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    let roleSelected = document.querySelector('input[name="role"]:checked');
    if(!roleSelected){
        document.getElementById('roleError').innerText = "Role must be selected.";
        isValid = false;
    } 
    else{
        document.getElementById('roleError').innerText = "";
    }

    let username = document.getElementById('username').value;
    if(!username.length){
        document.getElementById('usernameError').innerText = "Username must be filled.";
        isValid = false;
    }
    else if (username.length < 5){
        document.getElementById('usernameError').innerText = "Username must be at least 5 characters.";
        isValid = false;
    }
    else{
        document.getElementById('usernameError').innerText = "";
    }

    let date = document.getElementById('date').value;
    if(!date){
        document.getElementById('dateError').innerText = "Date of Birth is required.";
        isValid = false;
    }
    else{
        document.getElementById('dateError').innerText = "";
    }

    let email = document.getElementById('email').value;
    if(!email.length){
        document.getElementById('emailError').innerText = "Email must be filled.";
        isValid = false;
    }
    else if(!email.endsWith('@gmail.com')){
        document.getElementById('emailError').innerText = "Email format must end with '@gmail.com'.";
        isValid = false;
    }
    else{
        document.getElementById('emailError').innerText = "";
    }

    let genderSelected = document.getElementById('gender').value;
    if(genderSelected === ""){
        document.getElementById('genderError').innerText = "Gender must be selected.";
        isValid = false;
    }
    else{
        document.getElementById('genderError').innerText = "";
    }

    let agreeTnc = document.getElementById('terms').checked;
    if(!agreeTnc){
        document.getElementById('termsError').innerText = "You must agree to the Terms and Conditions.";
        isValid = false;
    }
    else{
        document.getElementById('termsError').innerText = "";
    }

    if(isValid){
        document.getElementById('popup').style.display = "flex";
    }
});

document.querySelector('.close-btn').onclick = function(){
    document.getElementById('popup').style.display = "none";
}

window.onclick = function(event){
    if(event.target == document.getElementById('popup')){
        document.getElementById('popup').style.display = "none";
    }
}

