angular.module('app')
    .component('portfolio', {
        templateUrl: "app/components/portfolio/portfolio.html",
        controller: ['$scope', '$timeout', 'projectsFactory', 'categoriesFactory', function ($scope, $timeout, projectsFactory, categoriesFactory) {
            $scope.categories = categoriesFactory;
            $scope.projects = projectsFactory;
            $scope.initFilters = false;
            
            $scope.selectedFilter = null;

            $scope.filter = function(categoryId) {
                $scope.selectedFilter = categoryId;

                // if(categoryId == null) {
                //     window.arrangePortfolio("*")
                // } else {
                //     window.arrangePortfolio(".filter-"+categoryId)
                // }

                $timeout(function() {
                    AOS.refresh();
                }, 500);
                
                

                // if(!$scope.initFilters) {
                //     window.initCategoryFilters();
                //     $scope.initFilters = true;
                // }
            }

        }]
    })
    .factory("categoriesFactory", function () {
        return [
            {   id: 1, label: "CATEGORIES.ILLUSTRATIONS" },
            {   id: 2, label: "CATEGORIES.BOOKS" },
            {   id: 3, label: "CATEGORIES.GRAPHICDESIGN" }
        ];
    })
    .factory("projectsFactory", function () {
        return [
            {  id: 1, categoryId: 2, slug: 'landscapes-yogurt-and-roses', order: 10, images: [] },
            { id: 2, categoryId: 2, slug: 'imbratisatoarea',  order: 3 },
            { id: 3, categoryId: 3, slug: 'little-map', order: 0, images: [12, 5, 7, 6, 6, 6, 6, 6, 6] },
            { id: 4, categoryId: 2, slug: '8-povestiri-de-vacanta', order: 4 },
            { id: 5, categoryId: 3, slug: 'magic-box',  order: 5 },
            { id: 6, categoryId: 2, slug: 'improvesti', order: 6 },
            { id: 7, categoryId: 2, slug: 'rebel-girls', order: 7, images: [12, 12, 12, 6, 6, 6, 6]  },
            { id: 8, categoryId: 3, slug: 'teds-coffee', order: 1, images: [12, 8, 4, 4, 8, 12, 12, 4, 8, 6, 6, 8, 4] },
            { id: 9, categoryId: 2, slug: 'timm-thaler', order: 9, images: [6, 6, 4, 8, 8, 4, 4, 8, 8, 4, 4, 4, 4, 6, 6, 8, 4, 6, 6] },
            { id: 10, categoryId: 1, slug: 'inktober', order: 2, images: [6,6,4,4,4,12,6,6,6,6,6,6,4,4,4,4,4,4,12,6,6,6,6,6,6,6,6,6,6,6,6] },
            { id: 10, categoryId: 1, slug: '5-poems', order: 2, images: [6, 6, 12] }
        ]
    });