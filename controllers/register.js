angular.module("Quiz App")
    .controller("Register", Register);

Register.$inject = ["RegisterService"];

function Register(rs){
    this.captureReg = () => {
        const profile = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        };
        rs.post(profile);
    };
};


