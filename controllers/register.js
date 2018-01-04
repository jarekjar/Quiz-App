angular.module("Quiz App")
    .controller("Register", Register);

Register.$inject = ["RegisterService"];

function Register(rs) {
    this.captureReg = () => {
        const profile = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        };
        const promise = rs.post(profile);
        promise.then(
            response => {
                console.log('login worked!')
                console.log(response);
            },
            err => {
                console.log('login failed.')
                console.log(err);
            });
    };

};