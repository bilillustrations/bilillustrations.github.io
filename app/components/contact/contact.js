angular.module('app')
    .component('contact', {
        templateUrl: "app/components/contact/contact.html",
        controller: ['$scope', function ($scope) {
            $scope.messageSent = false;
            $scope.resetForm = function() {
                $scope.messageSent = true;
            }
        }]
    });