(function userCtrl() {
  angular.module('app')
    // Try to inject the user and userProvider services  
    .controller('userCtrl', function (userService) {
      var vm = this;
      vm.users = userService;
    })
})();