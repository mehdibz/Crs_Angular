(function () {
'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  var count=-1,parts="";
  $scope.menu="";
  $scope.TestMenu= function () {
    calculate($scope.menu);
  };

  function calculate(string) {

    while (string.match(",,")) {
      string = string.replace(/,,/i, ',');
      string = string.replace(/ /i, ',');
    }
    string = string.replace(/^,/, '');
    string = string.replace(/,$/, '');
    parts = string.split(',');
    count=parts.length;

    while(angular.equals(string, "")&(count==1)){
      $scope.result= "Please enter data first";
      count=0;
    }
    while(count>3){
      $scope.result= "Too much!";
      count=0;
    }
    while(count>0){
      $scope.result= "Enjoy!";
      count=0;
    }
  };
}
})();