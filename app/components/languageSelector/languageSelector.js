angular.module('app')
    .component('languageSelector', {
        templateUrl: "app/components/languageSelector/languageSelector.html",
        controller: ['$scope', '$translate', '$window', function ($scope, $translate, $window) {
            var langKey = "lang";
            $scope.changeLanguage = function (key) {
                $scope.selectedLang = key;
                $window.localStorage.setItem(langKey, $scope.selectedLang);
                $translate.use(key);
            };

            $scope.selectedLang = $translate.preferredLanguage();
            var lang = $window.localStorage.getItem(langKey);
            if (lang != null) {
                $scope.selectedLang = lang;
            } else {
                //check default browser language
                var lang = $window.navigator.language || $window.navigator.userLanguage;
                var availableLanguages = $translate.getAvailableLanguageKeys();
                for (var i = 0; i < availableLanguages.length; i++) {
                    if (lang.includes(availableLanguages[i])) {
                        $scope.selectedLang = availableLanguages[i];
                        break;
                    }
                }
            }
            $scope.changeLanguage($scope.selectedLang);
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