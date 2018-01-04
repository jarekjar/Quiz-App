angular.module("Quiz App")
    .service("RegisterService", RegisterService);

RegisterService.$inject = ["$http"]

function RegisterService(http){

    this.post = (profile) => {
        http.post('https://pacoima-ypi.azurewebsites.net/api/users/register/employer', profile).then(onSuccess, onError);
    }

    const onSuccess = (data) => {
        console.log("Success!");
    }

    const onError = (data) => {
        console.log("Error!");
        alert(data.statusText);
    }
}