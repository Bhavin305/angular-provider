(function () {

  var app = angular.module('app', []);

  app.provider('empService', function () {
    this.$get = function () {
      return [
        { 'empId': 1, name: 'John', lastName: 'Martin' },
        { 'empId': 2, name: 'Sam', lastName: 'Morgan' },
        { 'empId': 3, name: 'Joe', lastName: 'Root' }
      ]
    };
  });

  app.provider('user', function () {
    this.$get = function () {
      return [
        { 'name': 'Roger' },
        { 'name': 'Nadal' },
        { 'name': 'Andy' }
      ]
    };
  });


  app.config(function ($provide, userProvider) {
    $provide.provider('userService', function () {
      this.$get = function () {
        let users = [
          { 'name': 'Bhavin' },
          { 'name': 'Harth' },
          { 'name': 'Ravi' }
        ];

        users = users.concat(userProvider.$get());
        return users;
      };
    });
  })

})();