angular.module('app')
    .controller("appController",["$scope", function($scope) {
        $scope.init = function () {
            debugger;
            window.addEventListener('load', () => {
                setTimeout(() => {
                    let portfolioContainer = document.querySelector('.portfolio-container');
                    if (portfolioContainer) {
                        let portfolioIsotope = new Isotope(portfolioContainer, {
                            itemSelector: '.portfolio-item'
                        });
        
                        let portfolioFilters = [...document.querySelectorAll("#portfolio-filter-category li")];
        
                        on('click', '#portfolio-filter-category li', function (e) {
                            e.preventDefault();
                            portfolioFilters.forEach(function (el) {
                                el.classList.remove('filter-active');
                            });
                            this.classList.add('filter-active');
        
                            portfolioIsotope.arrange({
                                filter: this.getAttribute('data-filter')
                            });
                            portfolioIsotope.on('arrangeComplete', function () {
                                AOS.refresh()
                            });
                        }, true);
                    }
                }, 1500);
            });
        }
    }])
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

            $scope.init = function () {
                window.addEventListener('load', () => {
                    setTimeout(() => {
                        let portfolioContainer = select('.portfolio-container');
                        if (portfolioContainer) {
                            let portfolioIsotope = new Isotope(portfolioContainer, {
                                itemSelector: '.portfolio-item'
                            });
            
                            let portfolioFilters = select('#portfolio-filter-category li', true);
            
                            on('click', '#portfolio-filter-category li', function (e) {
                                e.preventDefault();
                                portfolioFilters.forEach(function (el) {
                                    el.classList.remove('filter-active');
                                });
                                this.classList.add('filter-active');
            
                                portfolioIsotope.arrange({
                                    filter: this.getAttribute('data-filter')
                                });
                                portfolioIsotope.on('arrangeComplete', function () {
                                    AOS.refresh()
                                });
                            }, true);
                        }
                    }, 1500);
                });
            }
        }]
    });