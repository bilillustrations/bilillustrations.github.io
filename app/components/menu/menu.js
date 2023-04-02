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
                    link: "https://bilillustrations.github.io/#portfolio",
                    label: "MENU.PORTFOLIO",
                    classes: "bi bi-journals"
                },
                {
                    link: "https://bilillustrations.github.io/#about",
                    label: "MENU.ABOUT",
                    classes: "bi bi-file-earmark-person"
                },
                {
                    link: "https://bilillustrations.github.io/#contact",
                    label: "MENU.CONTACT",
                    classes: "bi bi-person-lines-fill"
                }
            ];

            $scope.toggle = function () {
                var hasToggle = document.getElementsByClassName("mobile-nav-toggle");
                if(hasToggle.length > 0) {
                    hasToggle[0].click();
                }
            }
        }]
    });