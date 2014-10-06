'use strict';

angular.module('frontendApp')
  .controller('SpbuCtrl', function ($scope, $anchorScroll, $log, $filter, ngTableParams) {

    $scope.overview = {
      "totalsupply": 228,
      "avgsupply": 221.3,
      "totaldemand": 201.2,
      "avgdemand": 203.9,
      "processed": "2",
      "inprocess": "1",
      "avgprocessed": "1.8",
    }

    $scope.showComparison = function(id) {    
      $scope.spps[id].isCompared = !$scope.spps[id].isCompared;
    };

    $scope.spbu = [
      {
        'id': 0, 
        'name': 'Taman Melati',
        'owner': 'PT Oplosan Utama',
        'address': 'Jl. Gading Boulevard nomor 12, Kelapa Gading',
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        'city': 'Jakarta',
        latitude : -6.235930307358471,
        longitude : 106.83558403262488,
        'totalspp': 234,
        'avgspp': 3.5,
        'totalmismatch': 22,
        'avgmismatch': 0.4,
        'remainingmismatch': 3,
        'totalpremium': 1320.5,
        'totalpertamax': 1128.9,
        'totalsolar': 982.1,
        'avgpremium': 20.5,
        'avgpertamax': 18.8,
        'avgsolar': 15.6,
        'processed': 19,
        'inprocess': 3,
        'todaymismatch': 1,
      },
    ];

    $scope.map = {
      center: {
        latitude: $scope.spbu[0].latitude,
        longitude: $scope.spbu[0].longitude
      },
      showTraffic: false,
      showBicycling: false,
      showWeather: false,
      zoom: 16,
      fit:true,
      doCluster:true,
      clusterOptions: { title: '', gridSize: 60, ignoreHidden: true, minimumClusterSize: 2, clusterClass: "cluster",
                imageExtension: 'png', imagePath: '../../images/cluster', imageSizes: [72], zoomOnClick: true},
    };

    $scope.transactions = [
      {
        'id': 0,
        otime: "2014/2/13 09:32",
        dtime: "-",
        spp: "9340373783045928649",
        orderamount: 9.1,
        product: "Solar",
        status: "Di perjalanan",
      },
      {
        'id': 1,
        otime: "2014/2/13 10:32",
        dtime: "-",
        spp: "9340373783045928678",
        orderamount: 12.1,
        product: "Premium",
        status: "Di perjalanan, terlambat",
      },
      {
        'id': 2,
        otime: "2014/2/10 22:18",
        dtime: "2014/2/11 08:21",
        spp: "9340373783045929234",
        orderamount: 19.1,
        product: "Solar",
        status: "Terkirim, terlambat",
      },
      {
        'id': 3,
        otime: "2014/2/10 19:34",
        dtime: "2014/2/11 08:08",
        spp: "9340373783045923456",
        orderamount: 20.1,
        product: "Pertamax",
        status: "Terkirim, terlambat",
      },
      {
        'id': 4,
        otime: "2014/2/9 05:32",
        dtime: "2014/2/8 14:30",
        spp: "9340373783045921221",
        orderamount: 11.4,
        product: "Pertamax",
        status: "Terkirim, tepat waktu",
      },
      {
        'id': 5,
        otime: "2014/2/7 12:32",
        dtime: "2014/2/8 08:51",
        spp: "9340373783045921923",
        orderamount: 15.8,
        product: "Premium",
        status: "Terkirim, tepat waktu",
      },
      {
        'id': 6,
        otime: "2014/2/7 12:40",
        dtime: "2014/2/8 07:30",
        spp: "9340373783045921091",
        orderamount: 19.1,
        product: "Premium",
        status: "Terkirim, tepat waktu",
      },
      {
        'id': 7,
        otime: "2014/2/2 08:34",
        dtime: "2014/2/3 07:20",
        spp: "9340373783045924592",
        orderamount: 21.1,
        product: "Pertamax",
        status: "Terkirim, tepat waktu",
      },
      {
        'id': 8,
        otime: "2014/1/31 09:32",
        dtime: "2014/2/1 10:30",
        spp: "9340373783045920989",
        orderamount: 19.8,
        product: "Solar",
        status: "Terkirim, tepat waktu",
      },
      {
        'id': 9,
        otime: "2014/1/30 10:32",
        dtime: "2014/1/31 08:40",
        spp: "9340373783045920890",
        orderamount: 22.1,
        product: "Premium",
        status: "Terkirim, tepat waktu",
      },
      {
        'id': 10,
        otime: "2014/1/25 22:18",
        dtime: "2014/1/26 09:11",
        spp: "9340373783045920879",
        orderamount: 26.1,
        product: "Premium",
        status: "Terkirim, terlambat",
      },
      {
        'id': 11,
        otime: "2014/1/22 19:34",
        dtime: "2014/1/23 08:58",
        spp: "9340373783045920678",
        orderamount: 29.1,
        product: "Pertamax",
        status: "Terkirim, tepat waktu",
      }
    ];

    $scope.spps = [
      {
        'id': 0,
        'imgurl': "",
        time: "2014/2/13 09:32",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B2739LL",
        noshipment: "9340373783045928649",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 9.1,
        'denstemp': "0.883/25",
        'buyer': "PT Lima Sebuntut",
        product: "Solar",
        'mismatch': false,
      },
      {
        'id': 1,
        'imgurl': "",
        time: "2014/2/13 19:21",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B7899DK",
        noshipment: "9340373783045928678",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 5.3,
        'denstemp': "0.891/23",
        'buyer': "PT Lima Sebuntut",
        product: "Premium",
        'mismatch': false,
      },
      {
        'id': 2,
        'imgurl': "",
        time: "2014/2/13 22:41",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B7821PL",
        noshipment: "9340373783045928734",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 11.3,
        'denstemp': "0.834/25",
        'buyer': "PT Lima Sebuntut",
        product: "Premium",
        'mismatch': true,
      },
      {
        'id': 3,
        'imgurl': "",
        time: "2014/2/13 22:41",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B2739LL",
        noshipment: "9340373783045928649",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 12.1,
        'denstemp': "0.823/24",
        'buyer': "PT Lima Sebuntut",
        product: "Pertamax",
        'mismatch': false,
      },
      {
        'id': 4,
        'imgurl': "",
        time: "2014/2/17 08:59",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B2834TH",
        noshipment: "9340373783045928956",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 7.1,
        'denstemp': "0.883/25",
        'buyer': "PT Lima Sebuntut",
        product: "Premium",
        'mismatch': false,
      },
      {
        'id': 5,
        'imgurl': "",
        time: "2014/2/18 13:34",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B3439",
        noshipment: "9340373783045929248",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 18.2,
        'denstemp': "0.846/23",
        'buyer': "PT Lima Sebuntut",
        product: "Pertamax",
        'mismatch': true,
      },
      {
        'id': 6,
        'imgurl': "",
        time: "2014/2/20 09:32",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B2739LL",
        noshipment: "9340373783045928649",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 9.1,
        'denstemp': "0.883/25",
        'buyer': "PT Lima Sebuntut",
        product: "Solar",
        'mismatch': false,
      },
      {
        'id': 7,
        'imgurl': "",
        time: "2014/2/20 19:21",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B7899DK",
        noshipment: "9340373783045928678",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 5.3,
        'denstemp': "0.891/23",
        'buyer': "PT Lima Sebuntut",
        product: "Premium",
        'mismatch': false,
      },
      {
        'id': 8,
        'imgurl': "",
        time: "2014/2/21 22:41",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B7821PL",
        noshipment: "9340373783045928734",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 11.3,
        'denstemp': "0.834/25",
        'buyer': "PT Lima Sebuntut",
        product: "Premium",
        'mismatch': true,
      },
      {
        'id': 9,
        'imgurl': "",
        time: "2014/2/22 22:41",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B2739LL",
        noshipment: "9340373783045928649",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 12.1,
        'denstemp': "0.823/24",
        'buyer': "PT Lima Sebuntut",
        product: "Pertamax",
        'mismatch': false,
      },
      {
        'id': 10,
        'imgurl': "",
        time: "2014/2/22 08:59",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B2834TH",
        noshipment: "9340373783045928956",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 7.1,
        'denstemp': "0.883/25",
        'buyer': "PT Lima Sebuntut",
        product: "Premium",
        'mismatch': false,
      },
      {
        'id': 11,
        'imgurl': "",
        time: "2014/2/25 13:34",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B3439",
        noshipment: "9340373783045929248",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 18.2,
        'denstemp': "0.846/23",
        'buyer': "PT Lima Sebuntut",
        product: "Pertamax",
        'mismatch': true,
      },
      {
        'id': 12,
        'imgurl': "",
        time: "2014/2/25 09:32",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B2739LL",
        noshipment: "9340373783045928649",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 9.1,
        'denstemp': "0.883/25",
        'buyer': "PT Lima Sebuntut",
        product: "Solar",
        'mismatch': false,
      },
      {
        'id': 13,
        'imgurl': "",
        time: "2014/2/27 19:21",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B7899DK",
        noshipment: "9340373783045928678",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 5.3,
        'denstemp': "0.891/23",
        'buyer': "PT Lima Sebuntut",
        product: "Premium",
        'mismatch': false,
      },
      {
        'id': 14,
        'imgurl': "",
        time: "2014/2/27 22:41",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B7821PL",
        noshipment: "9340373783045928734",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 11.3,
        'denstemp': "0.834/25",
        'buyer': "PT Lima Sebuntut",
        product: "Premium",
        'mismatch': true,
      },
      {
        'id': 15,
        'imgurl': "",
        time: "2014/2/27 22:41",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B2739LL",
        noshipment: "9340373783045928649",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 12.1,
        'denstemp': "0.823/24",
        'buyer': "PT Lima Sebuntut",
        product: "Pertamax",
        'mismatch': false,
      },
      {
        'id': 16,
        'imgurl': "",
        time: "2014/2/27 08:59",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B2834TH",
        noshipment: "9340373783045928956",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 7.1,
        'denstemp': "0.883/25",
        'buyer': "PT Lima Sebuntut",
        product: "Premium",
        'mismatch': false,
      },
      {
        'id': 17,
        'imgurl': "",
        time: "2014/2/28 13:34",
        'name': "Alice Norit",
        'address': "Jl. Kebon Kacang KM10 Argamulya Sedayu Sunter Jakarta",
        nopolice: "B3439",
        noshipment: "9340373783045929248",
        'destination': "PT Lima Sebuntut \n SPBU 7390 \n Ds Makmur Sari \n Tangerang Banten",
        orderamount: 18.2,
        'denstemp': "0.846/23",
        'buyer': "PT Lima Sebuntut",
        product: "Pertamax",
        'mismatch': true,
      },
    ];

    $scope.tracks = [
      {
        id: 1,
        spp: "9340373783045929248",
        product: "Premium",
        status: "late",
        latitude : -6.235930307358471,
        longitude : 106.83558403262488,
      },
      {
        id: 2,
        spp: "9340373783045929788",
        product: "Pertamax",
        status: "ontime",
        latitude : -6.295930307358471,
        longitude : 106.12558403262488,
      },
    ],

    $scope.polyline = {
      style: {
        color: 'red',
        weigth: '2px',
        opacity: 0.8
      },
      clickable: 'false',
      draggable: 'false',
      editable: 'false',
      geodesic: 'false',
      visible: 'true',
    };

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

    $scope.sppTable = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        filter: {
            id: ''       // initial filter
        },
        sorting: {
            id: 'asc'     // initial sorting
        }
    }, {
        total: $scope.spps.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var filteredData = params.filter() ?
                    $filter('filter')($scope.spps, params.filter()) :
                    $scope.spps;
            var orderedData = params.sorting() ?
                    $filter('orderBy')(filteredData, params.orderBy()) :
                    $scope.spps;
            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

    $scope.trackTable = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        filter: {
            id: ''       // initial filter
        },
        sorting: {
            id: 'asc'     // initial sorting
        }
    }, {
        total: $scope.tracks.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var filteredData = params.filter() ?
                    $filter('filter')($scope.tracks, params.filter()) :
                    $scope.tracks;
            var orderedData = params.sorting() ?
                    $filter('orderBy')(filteredData, params.orderBy()) :
                    $scope.tracks;
            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

    charts.gauge({  
        container: '#chart-premium',  
        value: 55,
        size: 240,
        label: 'Premium',  
        minorTicks: 5,
        majorTicks: 5,  
        zones: {  
            red: { from: 0, to: 15 },  
            yellow: { from: 15, to: 25 },  
            green: { from: 75, to: 100 }  
        }  
    });
    
    $scope.premium = {
        remain: 40.1,
        lastvolume: 170,
        lastfill: "2014/2/28 13:34",
        nextvolume: 180,
        nextfill: "2014/3/1 14:00",
        refill: 178.1,
        consumption: 143.5,
    };
    
    charts.gauge({  
        container: '#chart-pertamax',  
        value: 95,
        size: 240,
        label: 'Pertamax',  
        minorTicks: 5,
        majorTicks: 5,  
        zones: {
            red: { from: 0, to: 15 },  
            yellow: { from: 15, to: 25 },  
            green: { from: 75, to: 100 }  
        }  
    });

    $scope.pertamax = {
        remain: 100.2,
        lastvolume: 180,
        lastfill: "2014/2/28 15:21",
        nextvolume: 180,
        nextfill: "2014/3/3 12:00",
        refill: 170.7,
        consumption: 153.5,
    };

    charts.gauge({  
        container: '#chart-solar',
        value: 20,
        size: 240,
        label: 'Solar',  
        minorTicks: 5,
        majorTicks: 5,  
        zones: {  
            red: { from: 0, to: 15 },  
            yellow: { from: 15, to: 25 },  
            green: { from: 75, to: 100 }  
        }  
    });

    $scope.solar = {
        remain: 75.7,
        lastvolume: 130,
        lastfill: "2014/2/28 10:11",
        nextvolume: 135,
        nextfill: "2014/3/2 16:30",
        refill: 125.4,
        consumption: 100.2,
    };

    var ratioChart = c3.generate({
        bindto: '#ratio-chart',
        data: {
          columns: [
            ['Demand', 190],
            ['Supply', 120],
          ],
          type : 'pie',
        }
      });

    var bbmChart = c3.generate({
        bindto: '#bbm-chart',
        data: {
          columns: [
            ['Premium', 195],
            ['Pertamax', 154],
            ['Solar', 122],
          ],
          type : 'pie',
        }
      });

    $scope.items = [ 'semua jenis BBM', 'Pertamax', 'Premium', 'Solar' ];

    $scope.fChoice = $scope.items[0];

    var choiceColumns = [[
            ['Demand', 500, 600, 400, 150, 250, 230, 200, 100, 330, 200, 500, 400, 350, 250, 500, 140, 200, 350, 250, 400, 150, 250, 100, 440, 200, 150, 550, 200, 900, 400, 850, 750],
            ['Supply', 130, 100, 140, 200, 200, 100, 400, 150, 150, 50, 200, 100, 400, 150, 250, 100, 140, 200, 150, 50, 30, 250, 100, 140, 200, 150, 50, 200, 100, 400, 150, 250]
          ],
                        [
            ['Demand', 200, 100, 400, 150, 250, 30, 100, 140, 200, 150, 50, 200, 100, 400, 150, 250, 200, 100, 30, 200, 100, 400, 150, 250, 100, 140, 200, 150, 50, 400, 150, 250,],
            ['Supply', 130, 100, 140, 200, 250, 100, 140, 200, 150, 50, 30, 250, 100, 140, 200, 100, 400, 150, 150, 50, 200, 100, 400, 150, 200, 150, 50, 200, 100, 400, 150, 250]
          ],
                         [
            ['Demand', 100, 30, 200, 100, 400, 150, 250, 200, 100, 400, 150, 250, 30, 200, 100, 140, 200, 100, 400, 150, 250, 150, 50, 400, 150, 250, 100, 140, 200, 150, 50, 200],
            ['Supply', 130, 100, 150, 250, 100, 140, 200, 150, 50, 30, 250, 100, 140, 400, 150, 200, 150, 140, 200, 200, 100, 400, 150, 150, 50, 200, 100, 400, 50, 200, 100, 250]
          ],
                         [
            ['Demand', 100, 400, 150, 250, 30, 200, 100, 140, 200, 150, 250, 200, 100, 400, 150, 250, 150, 50, 100, 30, 200, 100, 400, 400, 150, 250, 100, 140, 200, 150, 50, 200],
            ['Supply', 130, 100, 150, 250, 250, 100, 200, 200, 100, 400, 150, 150, 50, 200, 100, 140, 400, 150, 200, 100, 140, 200, 150, 50, 30, 150, 140, 400, 50, 200, 100, 250]
          ]
        ];
   
    $scope.filterGraph = function(filterId) {
        $log.log("filter ", filterId);
        $scope.fChoice = $scope.items[filterId];
        recordchart.load({
          columns: choiceColumns[filterId]
        });
    };    


    var recordchart = c3.generate({
        bindto: '#record-chart',
        data: {
          columns: choiceColumns[0],
          types: {
            Demand: 'bar',
            Supply: 'bar'
          },
          groups: [
            ['Demand', 'Supply']
          ]
        },
        subchart: {
          show: true
        },
        axis: {
          x: {
            type: 'categorized'
          }
        },
        zoom: {
          enabled: true
        }
      });

      var shipmentchart = c3.generate({
        bindto: '#shipment-chart',
        data: {
          columns: [
            ['Pertamax', 30, 200, 100, 400, 150, 250, 100, 140, 200, 150, 50, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250, 100, 140, 200, 150, 50, 200, 100, 400, 150, 250],
            ['Premium', 100, 400, 150, 250, 100, 140, 200, 150, 50, 200, 100, 400, 150, 250, 130, 100, 140, 200, 150, 50, 200, 100, 400, 150, 250, 100, 140, 200, 150, 50, 30, 200],
            ['Solar', 200, 100, 400, 150, 250, 100, 140, 200, 150, 50, 30, 200, 100, 400, 150, 250, 100, 140, 200, 150, 50, 200, 100, 400, 150, 250, 130, 100, 140, 200, 150, 50]
          ],
          types: {
            Pertamax: 'bar',
            Premium: 'bar',
            Solar: 'bar',
          },
          groups: [
            ['Pertamax', 'Premium', 'Solar']
          ]
        },
        subchart: {
          show: true
        },
        axis: {
          x: {
            type: 'categorized'
          }
        },
        zoom: {
          enabled: true
        }
      });

  });
