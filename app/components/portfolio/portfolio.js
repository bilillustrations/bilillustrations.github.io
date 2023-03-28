angular.module('app')
    .component('portfolio', {
        templateUrl: "app/components/portfolio/portfolio.html",
        controller: ['$scope', 'projectsFactory', 'categoriesFactory', function ($scope, projectsFactory, categoriesFactory) {
            $scope.categories = categoriesFactory;
            $scope.projects = projectsFactory;        

            $scope.filter = function(categoryId) {
                let portfolioContainer = document.querySelector('.portfolio-container');
                if (portfolioContainer) {
                    let portfolioIsotope = new Isotope(portfolioContainer, {
                        itemSelector: '.portfolio-item'
                    });

                    let portfolioFilters = [...document.querySelectorAll('#portfolio-filter-category li')];
                    portfolioFilters.forEach(function (el) {
                        el.classList.remove('filter-active');
                    });

                    var e = document.getElementById('category-'+categoryId);
                    e.classList.add('filter-active');

                    portfolioIsotope.arrange({
                        filter: e.getAttribute('data-filter')
                    });
                    portfolioIsotope.on('arrangeComplete', function () {
                        AOS.refresh()
                    });
                }
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
            { id: 1, categoryId: 2, slug: 'landscapes-yogurt-and-roses', title: 'landscapes-yogurt-and-roses.title', description: 'landscapes-yogurt-and-roses.description', cover: 'cover-ghid.png', order: 1 },
            { id: 2, categoryId: 2, slug: 'imbratisatoarea', title: 'imbratisatoarea.title', description: 'imbratisatoarea.description', cover: 'cover-photo-imbratisatoarea.png', order: 2 },
            {
                id: 3, categoryId: 3, slug: 'little-map',
                title: 'little-map.title',
                pageTitle: 'little-map.page-title',
                description: 'little-map.description', cover: 'cover-photo-mica-harta.png', order: 0,
                images: [
                    { path: "1.png", size: "12" },
                    { path: "2.png", size: "6" },
                    { path: "3.png", size: "6" },
                    { path: "4.png", size: "6" },
                    { path: "5.png", size: "6" },
                    { path: "6.png", size: "6" },
                    { path: "7.png", size: "6" },
                    { path: "8.png", size: "6" },
                    { path: "9.png", size: "6" }   
                ]
            },
            { id: 4, categoryId: 2, slug: '8-povestiri-de-vacanta', title: '8-povestiri-de-vacanta.title', description: '8-povestiri-de-vacanta.description', cover: '8-povestiri-de-vacanta-cover.png', order: 4 },
            { id: 5, categoryId: 3, slug: 'magic-box', title: 'magic-box.title', description: 'magic-box.description', cover: 'cover-magic box.png', order: 5 },
            { id: 6, categoryId: 2, slug: 'improvesti', title: 'improvesti.title', description: 'improvesti.description', cover: 'improvesti-cover.png', order: 6 },
            { id: 7, categoryId: 2, slug: 'rebel-girls', title: 'rebel-girls.title', description: 'rebel-girls.description', cover: 'cover-inktober.png', order: 7 },
            { id: 8, categoryId: 3, slug: 'teds-coffee', title: 'teds-coffee.title', description: 'teds-coffee.description', cover: 'cover-teds-coffee3.png', order: 0,
                images: [
                    { path: "1.png", size: "12" },
                    { path: "2.png", size: "8" },
                    { path: "3.png", size: "4" },
                    { path: "4.png", size: "4" },
                    { path: "5.png", size: "8" },
                    { path: "6.png", size: "12" },
                    { path: "7.png", size: "12" },
                    { path: "8.png", size: "4" },
                    { path: "9.png", size: "8" },
                    { path: "10.png", size: "6" },
                    { path: "11.png", size: "6" },
                    { path: "12.png", size: "8" },
                    { path: "13.png", size: "4" }    
                ]
            },
            { id: 9, categoryId: 2, slug: 'timm-thaler', title: 'timm-thaler.title', description: 'timm-thaler.description', cover: 'timm-thaler-cover.png', order: 9 },
        ]
    });