angular
  .module('app', ['ui.router')
  .config(function ($stateProvider){
    $stateProvider
        .state('top', {
            url: '/top',
            templateUrl: 'views/topstories.html',
            controller: 'TopController as top',
            resolve: {
                     stories: function(ApiService){
                       console.log("works?")
                        return ApiService.getTop()
                     }
            }
        })
    })
