(function(){
  'use strict';

  angular.module('NameCalculator',[])
  .controller('NameCalculatorController',function($scope){

    $scope.name="";
    $scope.length=0;

    $scope.displayNumeric= function(){

      var total=calculateNumericForString($scope.name);
      $scope.length=total;


    };

function calculateNumericForString(string){
var totalStringValue=0;
  for(var i=0;i<string.length;i++){
    totalStringValue +=string.charCodeAt(i);
  }
  return totalStringValue;
}


  });
})();
