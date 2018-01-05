angular.module("Quiz App")
    .controller("FAQController", FAQController);

FAQController.$inject = ['FAQService', '$timeout']

function FAQController(fs, timeout) {
    
    const promise = fs.getCats();
    promise.then(
        response => {
            this.catList = response.data.items;
            console.log(response.data.items);
            timeout(function(){
                $('select').material_select();
             })
        },
        err => {
            console.log("Error retrieving cats")
        }
    );
};