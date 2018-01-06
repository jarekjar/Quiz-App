angular.module("Quiz App")
    .controller("FAQIndexController", FAQIndexController);

FAQIndexController.$inject = ['FAQIndexService', 'UserService']

function FAQIndexController(fs, us) {

    const promise = fs.getFAQ();
    promise.then(
        response => {
            this.faqList = fs.sortFaq(response.data.items);
            console.log(response);
        },
        err => {
            console.log("stuff");
        }
    );

    this.goCreate = () => {
        window.location.href = "createfaq.html"
    }

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

    this.editFaq = (faqID, catID) => {
        console.log(faqID, catID)
    }

    this.deleteFaq = (faqID, catID) => {
        console.log(faqID, catID)
    }
};

