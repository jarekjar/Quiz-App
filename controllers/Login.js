(function(){angular.module("Quiz App")
    .controller("Login", Login);

Login.$inject = ["LoginService"];

function Login(ls){
    
    this.goRegister = () => {
        window.location.replace("../register/register.html");
    }
    this.userLogin = () => {
        this.errorMessage = "";
        const profile = {
            email: this.email,
            password: this.password
        };
        const promise = ls.post(profile)
        promise.then(
            response => {
                this.fade = false;
                window.location.href = "../home/home.html";
            },
            err => {
                this.fade = false;
                this.errorMessage = err.data.message
            });
    }
}
})();