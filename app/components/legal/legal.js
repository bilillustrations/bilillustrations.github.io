angular.module('app')
    .component('legal', {
        templateUrl: "app/components/legal/legal.html",
        controller: ['$scope', '$window', function ($scope, $window) {
            var legalKey = "legalBilillustrations";

            $scope.readLegal = function () {
                $window.localStorage.setItem(legalKey, true);
                $scope.displayLegal = false;
            };

            var legal = $window.localStorage.getItem(legalKey);

            if (legal != "true") {
                $scope.displayLegal = true;
            } else {
                $scope.displayLegal = false;
            }
        }]
    })
    .factory('languageService', ['$rootScope', function ($rootScope) {

        var service = {
            lang: '',

            SaveState: function () {
                sessionStorage.userService = angular.toJson(service.model);
            },

            RestoreState: function () {
                service.model = angular.fromJson(sessionStorage.userService);
            }
        }

        $rootScope.$on("savestate", service.SaveState);
        $rootScope.$on("restorestate", service.RestoreState);

        return service;
    }]);