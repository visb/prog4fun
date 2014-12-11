var app = angular.module('app', []);

var viewed = [];
var count = 2;

app.controller('funnyCode', function($scope) {
  $scope.coming = function() {
    $scope.selected = 'coming';
    $scope.disabled = true;
  };

  $scope.rand = function() {
    $scope.selected = 0;

    if (viewed.length == count)
      return $scope.coming();

    while (count > 1 && viewed.indexOf($scope.selected) > -1)
      $scope.selected = Math.ceil(Math.random() * (count - 1));

    viewed.push($scope.selected);
  };

  $scope.openFacebook = function() {
    window.open('https://www.facebook.com/pages/Prog-4-Fun/1536444759936371');
  };

  $scope.rand();

  console.log($scope.selected);
});
