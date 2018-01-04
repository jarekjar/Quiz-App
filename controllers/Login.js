angular.module("Quiz App")
    .controller("Login", Login);

function Login(){
    
    this.goRegister = () => {
        window.location.replace("../register/register.html");
    }

    this.userLogin = () => {
        const profile = {
            userName: this.email,
            password: this.password
        }
    }
}