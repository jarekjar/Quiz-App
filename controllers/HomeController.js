angular.module("Quiz App")
    .controller("HomeController", HomeController);

HomeController.$inject = ['UserService']

function HomeController(us) {
    const promise = us.getUser();
    promise.then(
        response => {
            this.user = response.data.item.firstName + " " + response.data.item.lastName
            this.welcome = true;
        },
        err => {
            Materialize.toast('No User Logged In', 2000, 'blue', function () {
                window.location.href = "../login/login.html"
            });
        }
    )
    this.logout = () => {
        const promise = us.goLogout();
        promise.then(
            response => {
                Materialize.toast('Succesfully Logged Out!', 2000, 'blue', function () {
                    window.location.href = "../login/login.html"
                });
            },
            err => {
                alert("you have failed me")
                console.log(err);
            }
        )
    }
};