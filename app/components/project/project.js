angular.module('app')
    .component('project', {
        templateUrl: "app/components/project/project.html",
        controller: ["$scope", "projectsFactory", "$filter", function ($scope, projectsFactory, $filter) {
            $scope.hasError = true;
            var link = window.location.href.toString();
            var initpath = "?";
            $scope.sentences = [];
            if(link.indexOf(initpath) > 0) {
                var path = link.substring(link.indexOf(initpath) + 1);
    
                for (var i = 0; i < projectsFactory.length; i++) {
                    if (projectsFactory[i].slug == path) {
                        $scope.hasError = false;
                        $scope.project = projectsFactory[i];

                        var description = $filter("translate")($scope.project.slug + ".description");
                        
                        $scope.sentences = description.split(/[.!?]/);
                        break;
                    }
                }
            }
    
            $scope.getClassName = function(p) {
                return "col-sm-"+p;
            }
        }]
    });
