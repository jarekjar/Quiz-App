angular.module("Quiz App")
    .controller("FAQIndexController", FAQIndexController);

FAQIndexController.$inject = ['FAQIndexService', 'UserService', 'FAQService', '$timeout']

function FAQIndexController(fs, us, fss, timeout) {
    $('#editMod').modal();
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

    this.editFaq = (faqID, catID, question, answer, order, cat) => {
        console.log(order);
        const promise = fss.getCats();
        promise.then(
            response => {
                this.catList = response.data.items;
                timeout(function () {
                    $('select').material_select();
                    Materialize.updateTextFields(); 
                })       
            },
            err => {
                console.log("Error retrieving cats")
            }
        );
        this.question = question
        this.answer = answer
        this.order = parseInt(order); 
        const faq = {
            id: faqID,
            faqCategoryID: catID,
            question: question,
            answer: answer,
            displayOrder: order
        }
        console.log(faq);
    }

    this.deleteFaq = (faqID, catID) => {
        console.log(faqID, catID)
    }
};