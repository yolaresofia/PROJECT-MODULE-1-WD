let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("repeat-password");

//Formulario y botón

let logInButton = document.getElementById("log-in-button");
let form = document.getElementsByClassName("signup-form")[0];
let formWrapper = document.getElementsByClassName("form-wrapper")[0];
let signUpButton = document.getElementsByClassName("button")[0];


//llamada a la base de datos
let usersDB = JSON.parse(localStorage.getItem('users'))
console.log(usersDB);

signUpButton.addEventListener("click", function(event){
    event.preventDefault(); //para que la pagina cuando apretas el boton no se renderize
    deleteErrors(); //elimina errores
    
    if (checkValidUser()){
        console.log("user registered")
        createUser(userName.value, email.value, password.value)
        let userRegistered = document.createElement('div');
        userRegistered.innerHTML = `<p class="info-text"> Hello ${userName.value}! You can now tell people to fuck off with a card!</p>`
        form.insertBefore(userRegistered, signUpButton);
        signUpButton.remove()
    };
})

function checkValidUser() {
    let signUpValidator = new SignUpValidator (userName.value, email.value, password.value, repeatPassword.value);
    
    let usersDB = JSON.parse(localStorage.getItem("users"));
    let validUser = true;

    if(!signUpValidator.checkUserName()){
        signUpValidator.errorCreator("Insert your ugly fucking name", userName)
        validUser=false
    }
    if(!signUpValidator.checkEmail()){
        signUpValidator.errorCreator("Can't you see it should fucking include a @???", email)
        validUser=false
    }
    if(!signUpValidator.checkPassword()){
        signUpValidator.errorCreator("Your fucking password is wrong", password)
        validUser=false
    }
    if(!signUpValidator.checkRepeatPassword()){
        signUpValidator.errorCreator("Well... could you possibly fucking type like a normal human being?", repeatPassword)
        validUser=false
    }
    if (!signUpValidator.checkEmailInDB(usersDB)){
        signUpValidator.errorCreator("Why would you want to fucking register twice? Stupid bitch.", email)
        validUser=false
    }

    return validUser
}

function deleteErrors (){
    let errors = [...document.getElementsByClassName("error")]
    errors ? errors.forEach(error => error.remove()) : null;
}

function createUser (name, email, password) {
    const newUser = new User (name, email, password)

    if (usersDB){
        usersDB.push(newUser);
    } else {
        usersDB = [newUser]
    }
    localStorage.setItem('users', JSON.stringify(usersDB));
} 
