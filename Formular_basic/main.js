const form = document.getElementById('form'); 
const userName = document.getElementById('userName'); 
const email = document.getElementById('email'); 
const password = document.getElementById('password'); 
const passwordVerification = document.getElementById('password2'); 

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    checkInputs();
});

function checkInputs(){
    //funkce trim odstraní bílá místa
     const userNameValue = userName.value.trim();
     const emailValue = email.value.trim();
     const passwordValue = password.value.trim();
     const passwordVerificationValue = passwordVerification.value.trim();

     if(userNameValue === '') {
         setErrorFor(userName, 'You have to put the Username!');
     } else{
         setSuccessFor(userName);
     }

     if(emailValue === '') {
         setErrorFor(email, 'Email can not be empty!');
     } else{
         setSuccessFor(email);
     }

     if(passwordValue === '') {
        setErrorFor(password, 'Set some password!');
    } else{
        setSuccessFor(password);
    }

    if(passwordVerificationValue === '') {
        setErrorFor(passwordVerification, 'Verify your password');
    
    }else if(passwordValue !== passwordVerificationValue) { 
        setErrorFor(passwordVerification, 'Password does not match :(')
    
        } else{
        setSuccessFor(passwordVerification);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
