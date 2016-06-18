var API_URL = 'https://hacker-news.firebaseio.com/v0/'

function ApiService($http){

  console.log('NO thank you ');
  
    this.getTop = function(){
      console.log('inside apiService');
        return $http.get(API_URL + 'topstories.json')
    }

}

angular
  .module('app')
  .service('apiService', ApiService);
