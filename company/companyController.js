(function () {
  angular.module('app')
    .value('companyDetail', function (company) {
      var companies = [
        {
          name: 'Google',
          description: 'To organize worlds information'
        },
        {
          name: 'Apple',
          description: 'Great user experience'
        }
      ];
      companies.push(company);
      return companies;
    })
    .controller('companyCtrl', function (companyDetail) {
      var vm = this;
      vm.companyDetail = companyDetail({ name: 'nginx', description: 'Best web server you can get' });
    })
})();