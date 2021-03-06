(function () {
    angular.module("Quiz App")
        .controller("Login", Login);

    Login.$inject = ["LoginService", '$timeout'];

    function Login(ls, timeout) {

        timeout(function(){Materialize.updateTextFields()}); 

        this.goRegister = () => {
            window.location.replace("../register/register.html");
        }
        this.userLogin = () => {
            if (this.myForm.$valid) {
                this.fade = true;
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
            } else {
                this.myForm.email.$touched = true;
                this.myForm.password.$touched = true;
            }
        }
    }
})();