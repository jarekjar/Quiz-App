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
        faq.sort((a, b) => parseInt(a.displayOrder) - parseInt(b.displayOrder));
        let sortedFaq = {};

        for(let i = 0; i < faq.length; i++) {
            let cat = faq[i].category;
            if (sortedFaq.hasOwnProperty(cat)){
            } else {
                sortedFaq[cat] = [];
            }
            sortedFaq[cat].push(faq[i])
        }
        console.log(sortedFaq);
        return sortedFaq;
    }
}