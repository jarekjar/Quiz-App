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
            alert("No user logged in");
        }
    )
};