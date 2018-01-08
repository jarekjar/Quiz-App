angular.module("Quiz App")
    .config(function($stateProvider){
    const homePage = {
        name: 'Home Page',
        url: 'home/home.html'
    }

    const loginPage = {
        name: 'Login',
        url: 'login/login.html'
    }

    const registerPage = {
        name: 'Register',
        url: 'register/register.html'
    }

    const faqPage = {
        name: 'FAQ Index',
        url: '/faq',
        templateUrl: 'faq/faq.html'
    }

    $stateProvider.state(homePage);
    $stateProvider.state(registerPage);
    $stateProvider.state(loginPage);
    $stateProvider.state(faqPage);
});