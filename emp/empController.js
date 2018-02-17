(function userCtrl() {
  angular.module('app')
    .controller('empCtrl', function (empService) {
      var vm = this;
      vm.emps = empService;
    })
})();