angular.module("Quiz App")
    .controller("FAQController", FAQController);

FAQController.$inject = ['FAQService', '$timeout', 'UserService']

function FAQController(fs, timeout, us) {
    
    const promise = fs.getCats();
    promise.then(
        response => {
            this.catList = response.data.items;
            timeout(function () {
                $('select').material_select();
            })
        },
        err => {
            console.log("Error retrieving cats")
        }
    );

    this.postFAQ = () => {
        if (this.myForm.$valid) {
            const faq = {
                "faqCategoryId": this.options.id,
                "question": this.question,
                "answer": this.answer,
                "displayOrder": this.order
            }
            
            const promise = fs.post(faq);
            promise.then(
                response => {
                    console.log("created!")
                    Materialize.toast('FAQ has been added successfully!', 2000, 'blue', function () {
                        window.location.href = "faq.html"
                    });
                },
                err => {
                    console.log("error!")
                    Materialize.toast('FAQ could not be created', 4000, 'blue')
                }
            )
        } else {
            this.myForm.question.$touched = true;
            this.myForm.answer.$touched = true;
            this.myForm.order.$touched = true;
        }
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
};