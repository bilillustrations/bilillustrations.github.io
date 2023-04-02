angular.module('app')
    // .component('project', {
    //     templateUrl: "app/components/project/project.html",
    //     controller: ["$scope", "projectsFactory", function ($scope, projectsFactory) {

    //         $scope.hasError = true;

    //         var link = window.location.href.toString();
    //         var initpath = "?";

    //         if(link.indexOf(initpath) > 0) {
    //             var path = link.substring(link.indexOf(initpath) + 1);

    //             for (var i = 0; i < projectsFactory.length; i++) {
    //                 if (projectsFactory[i].slug == path) {
    //                     $scope.project = projectsFactory[i];
    //                     $scope.hasError = false;
    //                     break;
    //                 }
    //             }
    //         }

    //         $scope.getClassName = function(p) {
    //             return "col-sm-"+p;
    //         }
    //     }]
    // })
    .controller("projectController", ["$scope", "projectsFactory", function ($scope, projectsFactory) {

        $scope.hasError = true;

        var link = window.location.href.toString();
        var initpath = "?";

        $scope.images = [];
        $scope.project = {
            slug: "",
            images: []
        };
        $scope.take = 6;
        $scope.skip = 0;
       
        if(link.indexOf(initpath) > 0) {
            var path = link.substring(link.indexOf(initpath) + 1);
debugger;
            for (var i = 0; i < projectsFactory.length; i++) {
                if (projectsFactory[i].slug == path) {
                    $scope.hasError = false;

                    $scope.project.slug = projectsFactory[i].slug;
                    $scope.images = projectsFactory[i].images;
                    
                    var min = $scope.images.length;
                    if(min > $scope.take) {
                        min = $scope.take;
                    }

                    for(var j = 0; j < min; j++) {
                        $scope.project.images.push($scope.images[j])
                    }    

                    break;
                }
            }
        }

        // this function fetches a random text and adds it to array
        $scope.more = function () {
            var start = $scope.project.images.length;

            if(start < $scope.images.length) {
                var min = $scope.images.length - start;
                if(min > $scope.take) {
                    min = $scope.take;
                }

                for(var i = start; i < start + min; i++) {
                    $scope.project.images.push($scope.images[i]);
                }
            }
        };

       // $scope.more();



        $scope.getClassName = function(p) {
            return "col-sm-"+p;
        }
    }])
    .directive("whenScrolled", function () {
        return {

            restrict: 'A',
            link: function (scope, elem, attrs) {

                // we get a list of elements of size 1 and need the first element
                raw = document;//elem[0];

                // we load more elements when scrolled past a limit
                elem.bind("scroll", function () {
                    scope.$apply(attrs.whenScrolled);
                    if (raw.scrollTop + raw.offsetHeight + 5 >= raw.scrollHeight) {
                        
                        // we can give any function which loads more elements into the list
                        //scope.$apply(attrs.whenScrolled);
                    }
                });
            }
        }
    });