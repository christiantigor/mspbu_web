'use strict';

angular.module('frontendApp')
  .controller('TransactionCtrl', function ($scope, $log, $filter, ngTableParams) {

    $scope.transactions = [
      {
        'id': 0,
        otime: "2014/2/13 09:32",
        rtime: "-",
        dtime: "2014/2/14 09:32",
        spp: "9340373783045928649",
        orderamount: 9.1,
        product: "Solar",
        status: "Di perjalanan",
      },
      {
        'id': 1,
        otime: "2014/2/13 10:32",
        rtime: "-",
        dtime: "2014/2/14 10:32",
        spp: "9340373783045928678",
        orderamount: 12.1,
        product: "Premium",
        status: "Di perjalanan, terlambat",
      },
      {
        'id': 2,
        otime: "2014/2/10 22:18",
        rtime: "2014/2/11 10:18",
        dtime: "2014/2/11 08:21",
        spp: "9340373783045929234",
        orderamount: 19.1,
        product: "Solar",
        status: "Terkirim, terlambat",
      },
      {
        'id': 3,
        otime: "2014/2/10 19:34",
        rtime: "2014/2/11 10:34",
        dtime: "2014/2/11 08:08",
        spp: "9340373783045923456",
        orderamount: 20.1,
        product: "Pertamax",
        status: "Terkirim, terlambat",
      },
      {
        'id': 4,
        otime: "2014/2/9 05:32",
        rtime: "2014/2/10 12:32",
        dtime: "2014/2/10 14:30",
        spp: "9340373783045921221",
        orderamount: 11.4,
        product: "Pertamax",
        status: "Terkirim, tepat waktu",
      },
      {
        'id': 5,
        otime: "2014/2/7 12:32",
        rtime: "2014/2/8 07:32",
        dtime: "2014/2/8 08:51",
        spp: "9340373783045921923",
        orderamount: 15.8,
        product: "Premium",
        status: "Terkirim, tepat waktu",
      },
      {
        'id': 6,
        otime: "2014/2/7 12:40",
        rtime: "2014/2/8 07:40",
        dtime: "2014/2/8 09:30",
        spp: "9340373783045921091",
        orderamount: 19.1,
        product: "Premium",
        status: "Terkirim, tepat waktu",
      },
      {
        'id': 7,
        otime: "2014/2/2 08:34",
        rtime: "2014/2/3 09:34",
        dtime: "2014/2/3 10:20",
        spp: "9340373783045924592",
        orderamount: 21.1,
        product: "Pertamax",
        status: "Terkirim, tepat waktu",
      },
      {
        'id': 8,
        otime: "2014/1/31 09:32",
        rtime: "2014/2/1 08:32",
        dtime: "2014/2/1 11:30",
        spp: "9340373783045920989",
        orderamount: 19.8,
        product: "Solar",
        status: "Terkirim, tepat waktu",
      },
      {
        'id': 9,
        otime: "2014/1/30 10:32",
        rtime: "2014/1/31 07:21",
        dtime: "2014/1/31 08:40",
        spp: "9340373783045920890",
        orderamount: 22.1,
        product: "Premium",
        status: "Terkirim, tepat waktu",
      },
      {
        'id': 10,
        otime: "2014/1/25 22:18",
        rtime: "2014/1/26 12:22",
        dtime: "2014/1/26 09:11",
        spp: "9340373783045920879",
        orderamount: 26.1,
        product: "Premium",
        status: "Terkirim, terlambat",
      },
      {
        'id': 11,
        otime: "2014/1/22 19:34",
        rtime: "2014/1/23 07:54",
        dtime: "2014/1/23 08:58",
        spp: "9340373783045920678",
        orderamount: 29.1,
        product: "Pertamax",
        status: "Terkirim, tepat waktu",
      }
    ];

    $scope.transactionTable = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        filter: {
            id: ''       // initial filter
        },
        sorting: {
            id: 'asc'     // initial sorting
        }
    }, {
        total: $scope.transactions.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var filteredData = params.filter() ?
                    $filter('filter')($scope.transactions, params.filter()) :
                    $scope.transactions;
            var orderedData = params.sorting() ?
                    $filter('orderBy')(filteredData, params.orderBy()) :
                    $scope.transactions;
            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

  });
