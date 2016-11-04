angular.module('assessment').service('mainSrv', function(){
  this.getProducts = function(){
    return $http({
      method: 'GET',
      url: "http://practiceapi.devmounta.in/products",

    }).then(function(response){
      if(response.status === 200){
        console.log(response.data);
        return response.data;
      }
      return "API is busted, time to go home Steve";
    });
  };
  // this.productID = productID;

});
