angular.module("Quiz App")
    .service("FAQIndexService", FAQIndexService);

FAQIndexService.$inject = ["$http"]

function FAQIndexService(http){
    this.getFAQ = () => {
        return http({
            method: 'GET',
            url: 'https://pacoima-ypi.azurewebsites.net/api/faqs/user',
            withCredentials: true
        });
    };

    this.sortFaq = (faq) => {
        let sortedFaq = {};
        for(let i = 0; i < faq.length; i ++) {
            let cat = faq[i].category;
            if (sortedFaq.hasOwnProperty(cat)){
                console.log(cat)
            } 
            console.log(cat);
        }
        console.log(sortedFaq);
    }
}