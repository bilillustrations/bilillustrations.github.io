angular.module('app')
    .component('menu', {
        templateUrl: "app/components/menu/menu.html",
        controller: ['$scope', '$translate', function ($scope, $translate) {
            $scope.menuItems = [
                {
                    link: "#",
                    label: "MENU.HOME",
                    classes: "bx bx-home"
                },
                {
                    link: "#portfolio",
                    label: "MENU.PORTFOLIO",
                    classes: "bx bx-book-content"
                },
                {
                    link: "#about",
                    label: "MENU.ABOUT",
                    classes: "bx bx-user"
                },
                {
                    link: "#contact",
                    label: "MENU.CONTACT",
                    classes: "bx bx-envelope"
                }
            ];
        }]
    });