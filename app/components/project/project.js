angular.module('app')
    .component('project', {
        templateUrl: "app/components/project/project.html",
        controller: ["$scope", "projectsFactory", "$translate", function ($scope, projectsFactory, $translate) {
            $scope.hasError = true;
            var link = window.location.href.toString();
            var initpath = "?";
           
            if(link.indexOf(initpath) > 0) {
                var path = link.substring(link.indexOf(initpath) + 1);
    
                for (var i = 0; i < projectsFactory.length; i++) {
                    if (projectsFactory[i].slug == path) {
                        $scope.hasError = false;
                        $scope.project = projectsFactory[i];

                        console.log($translate($scope.project.slug + ".description"));
                        $scope.description = stringToHTML($translate($scope.project.slug + ".description"));
                        break;
                    }
                }
            }
    
            $scope.getClassName = function(p) {
                return "col-sm-"+p;
            }

            var stringToHTML = function (str) {
                var dom = document.createElement('div');
                dom.innerHTML = str;
                console.log(dom);
                return dom;
            };
        }]
    })
    .filter('trusted', ['$sce', function ($sce) {
        return function(url) {
            return $sce.trustAsHtml(url);
        };
    }]);
