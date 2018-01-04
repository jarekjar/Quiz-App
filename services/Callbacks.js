angular.module("Quiz App")
    .service("Callbacks", Callbacks);

function Callbacks(){
    this.onSuccess = (data) => {
        console.log("Success!");
    }
    this.onError = (data) => {
        console.log("Error!");
        alert(data.statusText);
    }
}