(function () {

  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.getName = function () {
    return this.name;
  }

  Animal.prototype.walk = function () {
    return this.name + '  is walking';
  }


  angular.module('app')
    .service('dogService', function () {

      function Dog(name) {
        Animal.call(this, name)
      }

      Dog.prototype = Object.create(Animal.prototype);

      this.dog = new Dog('Bailey');

    })
    .controller('dogCtrl', function (dogService) {
      var vm = this;
      vm.myDog = dogService.dog;
    })
})();