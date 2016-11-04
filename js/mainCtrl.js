angular.module('assessment').controller('mainCtrl', function($scope, $stateParams, mainSrv){
// mainSrv.getProducts().then(function(response){
//   $scope.products = products;
//   console.log($scope.products);
// });
$scope.getProducts = mainSrv.getProducts;
});
