angular.module('app')
    .component('project', {
        templateUrl: "app/components/project/project.html",
        controller: ["$scope", "projectsFactory", function ($scope, projectsFactory) {
            $scope.hasError = true;
            var link = window.location.href.toString();
            var initpath = "?";
    
            $scope.take = 6;
            $scope.limit = 6;
           
            if(link.indexOf(initpath) > 0) {
                var path = link.substring(link.indexOf(initpath) + 1);
    
                for (var i = 0; i < projectsFactory.length; i++) {
                    if (projectsFactory[i].slug == path) {
                        $scope.hasError = false;
                        $scope.project = projectsFactory[i];
                        break;
                    }
                }
            }
    
            // this function fetches a random text and adds it to array
            $scope.more = function () {
                var min = $scope.project.images.length - $scope.limit;
                if(min > $scope.take) {
                    min = $scope.take;
                }
                $scope.limit += min;
            };
    
            $scope.getClassName = function(p) {
                return "col-sm-"+p;
            }
        }]
    });