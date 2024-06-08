const loginForm = document.getElementById('login-form')
const loginButton = document.getElementById('login-form-button')

loginButton.addEventListener("click", function(e){
    e.preventDefault()
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email === 'boom@boom.boom' && password === 'letmein'){
        alert('You have successfully logged in');
    }
    else {
        alert('Wrong credentials, try again')
    }
})