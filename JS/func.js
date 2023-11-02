const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

document.addEventListener('submit', e => {
    e.preventDefault();

    checkInput();
});

function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

// Username validation
    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be blank');
    }
    else if(usernameValue.length < 6 || usernameValue.length > 16){
        setErrorFor(username, 'Username must be atleast 6-16 characters');
    }
    else{
        setSuccessFor(username)
    }

// Email validation
    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    }
    else {
        setSuccessFor(email);
    }

// Password Validation
    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    }
    else if(passwordValue.length < 4 || passwordValue.length > 6){
        setErrorFor(password, 'Password must be atleast 4-6 characters');
    }
    else{
        setSuccessFor(password);
    }

// Password2 Validation
    if(password2Value === ''){
        setErrorFor(password2, 'password cannot not be blank');
    }
    else if(password2Value.includes(passwordValue)){
        setSuccessFor(password2);
    }
    else{
        setErrorFor(password2, 'Password do not match')
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // small.innerText = message;

    formControl.className = "form-control success";
}
