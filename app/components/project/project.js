angular.module('app')
    .component('project', {
        templateUrl: "app/components/project/project.html",
        controller: ["$scope", "projectsFactory", function ($scope, projectsFactory) {

            $scope.hasError = true;

            var link = window.location.href.toString();
            var initpath = "?";

            if(link.indexOf(initpath) > 0) {
                var path = link.substring(link.indexOf(initpath) + 1);

                debugger;

                for (var i = 0; i < projectsFactory.length; i++) {
                    if (projectsFactory[i].slug == path) {
                        $scope.project = projectsFactory[i];
                        $scope.hasError = false;
                        break;
                    }
                }
            }

            $scope.getClassName = function(p) {
                return "col-sm-"+p;
            }
        }]
    });