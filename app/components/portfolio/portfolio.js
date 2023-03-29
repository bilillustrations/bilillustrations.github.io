angular.module('app')
    .component('portfolio', {
        templateUrl: "app/components/portfolio/portfolio.html",
        controller: ['$scope', 'projectsFactory', 'categoriesFactory', function ($scope, projectsFactory, categoriesFactory) {
            $scope.categories = categoriesFactory;
            $scope.projects = projectsFactory;     
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
            { 
                id: 1, categoryId: 2, slug: 'landscapes-yogurt-and-roses', 
                title: 'landscapes-yogurt-and-roses.title', 
                description: 'landscapes-yogurt-and-roses.description', 
                cover: 'cover-ghid.png', 
                order: 1,
                images: []
            },
            { 
                id: 2, categoryId: 2, 
                slug: 'imbratisatoarea', 
                title: 'imbratisatoarea.title', 
                description: 'imbratisatoarea.description', 
                cover: 'cover-photo-imbratisatoarea.png',
                order: 2 
            },
            {
                id: 3, categoryId: 3, slug: 'little-map',
                title: 'little-map.title',
                description: 'little-map.description', cover: 'cover-photo-mica-harta.png', order: 0,
                images: [12, 6, 6, 6, 6, 6, 6, 6, 6]
            },
            { id: 4, categoryId: 2, slug: '8-povestiri-de-vacanta', title: '8-povestiri-de-vacanta.title', description: '8-povestiri-de-vacanta.description', order: 4 },
            { id: 5, categoryId: 3, slug: 'magic-box', title: 'magic-box.title', description: 'magic-box.description', order: 5 },
            { id: 6, categoryId: 2, slug: 'improvesti', title: 'improvesti.title', description: 'improvesti.description', order: 6 },
            { id: 7, categoryId: 2, slug: 'rebel-girls', title: 'rebel-girls.title', description: 'rebel-girls.description', order: 7 },
            { id: 8, categoryId: 3, 
                slug: 'teds-coffee', title: 'teds-coffee.title',
                 description: 'teds-coffee.description', 
                 order: 0,
                 images: [12, 8, 4, 4, 8, 12, 12, 4, 8, 6, 6, 8, 4]
            },
            { 
                id: 12, categoryId: 3, slug: 'teds-test', 
                title: 'teds-coffee.title', 
                description: 'teds-coffee.description', 
                order: 0,
                images: [12, 8, 4, 4, 8, 12, 12, 4, 8, 6, 6, 8, 4]
            },
            { id: 9, categoryId: 2, slug: 'timm-thaler', title: 'timm-thaler.title', description: 'timm-thaler.description', order: 9 },
        ]
    });