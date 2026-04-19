angular.module('app')
    .component('portfolio', {
        templateUrl: "app/components/portfolio/portfolio.html",
        controller: ['$scope', 'projectsFactory', 'categoriesFactory', function ($scope, projectsFactory, categoriesFactory) {
            $scope.categories = categoriesFactory;
            $scope.projects = projectsFactory;

            $scope.filter = function (categoryId) {
                window.initCategoryFilters(categoryId);
            };
        }]
    });