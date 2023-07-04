angular.module('app')
    .component('project', {
        templateUrl: "app/components/project/project.html",
        controller: ["$scope", "projectsFactory", "$translate", "$sce", function ($scope, projectsFactory, $translate, $sce) {
            $scope.hasError = true;
            var link = window.location.href.toString();
            var initpath = "?";
           
            if(link.indexOf(initpath) > 0) {
                var path = link.substring(link.indexOf(initpath) + 1);
    
                for (var i = 0; i < projectsFactory.length; i++) {
                    if (projectsFactory[i].slug == path) {
                        $scope.hasError = false;
                        $scope.project = projectsFactory[i];

                        console.log($translate.use($scope.project.slug + ".description"));
                        $scope.description = $sce.trustAsHtml($translate.use($scope.project.slug + ".description"));

                        break;
                    }
                }
            }
    
            $scope.getClassName = function(p) {
                return "col-sm-"+p;
            }
        }]
    })
