angular.module('app')
    .component('menu', {
        templateUrl: "app/components/menu/menu.html",
        controller: ['$scope', '$translate', function ($scope, $translate) {
            $scope.menuItems = [
                // {
                //     link: "https://bilillustrations.github.io/",
                //     label: "MENU.HOME",
                //     classes: "bx bx-home"
                // },
                {
                    link: "https://bilillustrations.github.io/",
                    label: "MENU.PORTFOLIO",
                    classes: "bx bx-book-content"
                },
                {
                    link: "https://bilillustrations.github.io/#about",
                    label: "MENU.ABOUT",
                    classes: "bx bx-user"
                },
                {
                    link: "https://bilillustrations.github.io/#contact",
                    label: "MENU.CONTACT",
                    classes: "bx bx-envelope"
                }
            ];
        }]
    });