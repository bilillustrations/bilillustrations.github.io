(function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'portfolio-data.json', false);
    xhr.send();
    window.__portfolioData = JSON.parse(xhr.responseText);
})();

var app = angular.module('app', ['pascalprecht.translate'])
    .config(['$translateProvider', function ($translateProvider) {
        var t = window.__portfolioData.translations;
        $translateProvider.translations('en', t.en);
        $translateProvider.translations('ro', t.ro);
        $translateProvider.translations('bg', t.bg);
        $translateProvider.preferredLanguage('en');
        $translateProvider.fallbackLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');
    }])
    .factory('categoriesFactory', function () {
        return window.__portfolioData.categories;
    })
    .factory('projectsFactory', function () {
        return window.__portfolioData.projects;
    })