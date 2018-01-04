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
                this.fade = false;
                console.log(response);
                alert(response.config.data.firstName + ", your user has been created");
                window.location.replace("../login/login.html")
            },
            err => {
                this.fade = false;
                this.errorMessage = err.data.message || err.data.errors[0];
            });
    };
};