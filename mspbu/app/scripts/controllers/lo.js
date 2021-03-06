'use strict';

angular.module('frontendApp')
  .controller('LoCtrl', function ($scope, $log, $filter, ngTableParams) {

    $scope.sisalo = {
      premium: 60,
      pertamax: 45,
      solar: 40,
    }

    var loChart = c3.generate({
        bindto: '#lo-chart',
        data: {
          columns: [
            ['Premium', $scope.sisalo.premium],
            ['Pertamax', $scope.sisalo.pertamax],
            ['Solar', $scope.sisalo.solar],
          ],
          type : 'pie',
        }
      });

    $scope.lo = [
      {
        'id': 0,
        time: "2014/2/14 13:39",
        bbm: "Premium",
        orderamount: 100,
        status: "Tersedia",
      },
      {
        'id': 1,
        time: "2014/2/13 13:38",
        bbm: "Solar",
        orderamount: 80,
        status: "Tersedia",
      },
      {
        'id': 2,
        time: "2014/2/11 14:41",
        bbm: "Pertamax",
        orderamount: 85,
        status: "Tersedia",
      },
      {
        'id': 3,
        time: "2014/2/7 11:32",
        bbm: "Solar",
        orderamount: 80,
        status: "Terpakai",
      },
      {
        'id': 4,
        time: "2014/2/5 13:51",
        bbm: "Pertamax",
        orderamount: 100,
        status: "Terpakai",
      },
      {
        'id': 5,
        time: "2014/2/1 09:32",
        bbm: "Premium",
        orderamount: 75,
        status: "Terpakai",
      },
    ];

    $scope.loTable = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        filter: {
            id: ''       // initial filter
        },
        sorting: {
            id: 'asc'     // initial sorting
        }
    }, {
        total: $scope.lo.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var filteredData = params.filter() ?
                    $filter('filter')($scope.lo, params.filter()) :
                    $scope.lo;
            var orderedData = params.sorting() ?
                    $filter('orderBy')(filteredData, params.orderBy()) :
                    $scope.lo;
            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

  });
