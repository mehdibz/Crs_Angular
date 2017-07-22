(function () {
'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.menu="";
  $scope.Num=0;
  $scope.TestMenu= function () {
    calculate($scope.menu);
  };

  function calculate(string) {
    var count=-1,parts="";

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
      $scope.Num= count;
    }
    while(count>3){
      $scope.result= "Too much!";
      $scope.Num= count;
      count=0;
    }
    while(count>0){
      $scope.result= "Enjoy!";
      $scope.Num= count;
      count=0;
    }
  };
}
})();
