angular.module("Quiz App")
    .controller("Register", Register);

Register.$inject = ["RegisterService"];

function Register(rs) {
    this.captureReg = () => {
        this.errorMessage = "";
        const profile = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        };
        const promise = rs.post(profile);
        promise.then(
            response => {
                $window.location.html = "../login/login.html";
            },
            err => {
                this.errorMessage = err.data.message || err.data.errors[0];
            });
    };
};