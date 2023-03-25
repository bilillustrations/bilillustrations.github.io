angular.module('app')
    .component('portfolio', {
        templateUrl: "app/components/portfolio/portfolio.html",
        controller: ['$scope', '$translate', '$window', function ($scope, $translate, $window) {
            $scope.categories = [
                {
                    id: 1,
                    label: "CATEGORIES.ILLUSTRATIONS"
                },
                {
                    id: 2,
                    label: "CATEGORIES.BOOKS"
                },
                {
                    id: 3,
                    label: "CATEGORIES.GRAPHICDESIGN"
                }
            ];

            $scope.projects = [
                {
                    id: 1,
                    categoryId: 2,
                    slug: 'landscapes-yogurt-and-roses',
                    title: 'landscapes-yogurt-and-roses.title',
                    cover: 'cover-photo-mica-harta.png',
                    order: 1,
                },
                {
                    id: 2,
                    categoryId: 2,
                    slug: 'imbratisatoarea',
                    title: 'imbratisatoarea.title',
                    cover: 'cover-photo-imbratisatoarea.png',
                    order: 2,
                },
                {
                    id: 3,
                    categoryId: 3,
                    slug: 'little-map',
                    title: 'little-map.title',
                    cover: 'cover-ghid.png',
                    order: 3,
                },
                {
                    id: 4,
                    categoryId: 2,
                    slug: '8-povestiri-de-vacanta',
                    title: '8-povestiri-de-vacanta.title',
                    cover: '8-povestiri-de-vacanta-cover.png',
                    order: 4,
                },
                {
                    id: 5,
                    categoryId: 3,
                    slug: 'magic-box',
                    title: 'magic-box.title',
                    cover: 'cover-magic box.png',
                    order: 5,
                },
                {
                    id: 6,
                    categoryId: 2,
                    slug: 'improvesti',
                    title: 'improvesti.title',
                    cover: 'improvesti-cover.png',
                    order: 6,
                },
                {
                    id: 7,
                    categoryId: 2,
                    slug: 'rebel-girls',
                    title: 'rebel-girls.title',
                    cover: 'cover-inktober.png',
                    order: 7,
                },
                {
                    id: 8,
                    categoryId: 3,
                    slug: 'teds-coffee',
                    title: 'teds-coffee.title',
                    cover: 'cover-teds-coffee3.png',
                    order: 8,
                },
                {
                    id: 9,
                    categoryId: 2,
                    slug: 'timm-thaler',
                    title: 'timm-thaler.title',
                    cover: 'timm-thaler-cover.png',
                    order: 9,
                }
            ]

        }]
    });