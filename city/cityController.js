(function () {
  angular.module('app')
    .factory('cityService', function () {
      return [
        'NewYork',
        'Delhi',
        'Sydney',
        'Dubai',
        'London',
        'Kabul',
        'Capetown',
        'Johannesburg'
      ]
    })
    .controller('cityCtrl', function (cityService) {
      var vm = this;
      vm.cities = cityService;
    })
})();