angular.module('app')
    .component('contact', {
        templateUrl: "app/components/contact/contact.html",
        controller: ['$scope', function ($scope) {
            $scope.resetForm = function() {
                document.getElementById("entry.993355435").value = "";
                document.getElementById("entry.488430138").value = "";
                document.getElementById("entry.714291970").value = "";
            }
        }]
    });