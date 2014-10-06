'use strict';

angular.module('frontendApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll, $log) {

    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    }

    $scope.gotospbu = function ( path, id ) {
      $location.url( path + "id=" + id );
    };
    
    $scope.map = {
      center: {
        latitude: -6.185930307358471,
        longitude: 106.83558403262488
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

    $scope.overview = {
      "totalsupply": 1728,
      "avgsupply": 291.2,
      "totaldemand": 1528.1,
      "avgdemand": 285.6,
      "processed": "32",
      "inprocess": "20",
      "avgprocessed": "6.8",
      "avginprocess": "4.2",
    }    

    $scope.orders = [
      {
        'no': '9082756478320987',
        'date': 'Hari ini, 11:30',
        'destination': 'Taman Melati',
        'detail': 'Premium, 1200 ltr',
        'status': 'Ok, dalam perjalanan',
      },
      {
        'no': '9082756478322830',
        'date': 'Hari ini, 10:30',
        'destination': 'Taman Melati',
        'detail': 'Pertamax, 1100 ltr',
        'status': 'Ok, dalam perjalanan',
      },
      {
        'no': '9082756478322473',
        'date': 'Hari ini, 07:00',
        'destination': 'Menteng Raya',
        'detail': 'Premium, 1000 ltr',
        'status': 'Terlambat, dalam perjalanan',
      },
      {
        'no': '9082756478322394',
        'date': 'Kemarin, 22:00',
        'destination': 'Senen 12',
        'detail': 'Premium, 900 ltr',
        'status': 'Terlambat, order selesai',
      },
      {
        'no': '9082756478321128',
        'date': '2014/02/11 23:20',
        'destination': 'Menteng 78',
        'detail': 'Solar, 1800 ltr',
        'status': 'Ok, order selesai',
      }
    ];

    $scope.spbu = [
      {
        'id': 0,
        'src': '../images/spbu_1.jpg',
        'name': 'Taman Melati',
        'address': 'Jl. Gading Boulevard nomor 12',
        'city': 'Jakarta',
        latitude : -6.235930307358471,
        longitude : 106.83558403262488,
        'totaldemand': 234,
        'avgdemand': 3.5,
        'todayspp': 15,
        'totalpremium': 1320.5,
        'totalpertamax': 1128.9,
        'totalsolar': 982.1,
        'avgpremium': 20.5,
        'avgpertamax': 18.8,
        'avgsolar': 15.6,
        'stock': "OK",
        'order': "1 terlambat di jalan, 2 dalam perjalanan",
      },
      {
        'id': 1,
        'src': '../images/spbu_2.jpg',
        'name': 'Senen 12',
        'address': 'Jl. Senen Raya nomor 32',
        'city': 'Jakarta',
        latitude : -6.210930307358471,
        longitude : 106.87958403262488,
        'totaldemand': 352,
        'avgdemand': 3.9,
        'todayspp': 18,
        'totalsupply': 42,
        'avgsupply': 0.8,
        'totalpremium': 1820.5,
        'totalpertamax': 1198.4,
        'totalsolar': 999.2,
        'avgpremium': 24.5,
        'avgpertamax': 19.4,
        'avgsolar': 12.5,
        'stock': "Pertamax dan Biogas rendah",
        'order': "1 terlambat di jalan, 2 dalam perjalanan",
      },
      {
        'id': 2,
        'src': '../images/spbu_3.jpg',
        'name': 'Menteng Raya',
        'address': 'Jl. Menteng Raya nomor 7',
        'city': 'Jakarta',
        latitude : -6.223030307358471,
        longitude : 106.87118403262488,
        'totaldemand': 190,
        'avgdemand': 1.8,
        'todayspp': 17,
        'totalsupply': 29,
        'avgsupply': 1.2,
        'totalpremium': 1629.1,
        'totalpertamax': 1289.3,
        'totalsolar': 872.3,
        'avgpremium': 23.9,
        'avgpertamax': 17.8,
        'avgsolar': 10.2,
        'stock': "3 BBM rendah",
        'order': "5 dalam perjalanan",
      },
      {
        'id': 3,
        'src': '../images/spbu_4.jpg',
        'name': 'Kebon Kacang',
        'owner': 'PT Minyak Murni',
        'address': 'Jl. Kebon Kacang Raya nomor 87',
        'city': 'Jakarta',
        latitude : -6.250930307358471,
        longitude : 106.86958403262488,
        'totaldemand': 289,
        'avgdemand': 2.1,
        'todayspp': 12,
        'totalsupply': 56,
        'avgsupply': 1.3,
        'totalpremium': 1824.5,
        'totalpertamax': 1743.4,
        'totalsolar': 839.4,
        'avgpremium': 28.3,
        'avgpertamax': 20.3,
        'avgsolar': 17.3,
        'stock': "OK",
        'order': "1 dalam perjalanan",
      },
      {
        'id': 4,
        'src': '../images/spbu_5.jpg',
        'name': 'Menteng 78',
        'owner': 'PT Kencana Sumber Susu',
        'address': 'Jl. Menteng Dalam nomor 78',
        'city': 'Jakarta',
        latitude : -6.223030307358471,
        longitude : 106.89118403262488,
        'totaldemand': 283,
        'avgdemand': 2.5,
        'todayspp': 20,
        'totalsupply': 18,
        'avgsupply': 0.2,
        'totalpremium': 1342.1,
        'totalpertamax': 1832.3,
        'totalsolar': 734.4,
        'avgpremium': 26.3,
        'avgpertamax': 18.3,
        'avgsolar': 14.5,
        'stock': "Premium rendah",
        'order': "3 terlambat di jalan",
      },
    ];

    _.each($scope.spbu, function (site) {
        site.closeClick = function () {
            site.showWindow = false;
            $scope.$apply();
        };
        site.onClicked = function () {
            site.showWindow = false;
            $scope.$apply();
        };
    });
    
    var demandsupplyChart = c3.generate({
        bindto: '#demandsupply-chart',
        data: {
          columns: [
            ['Demand', 192],
            ['Supply', 213],
          ],
          type : 'pie',
        }
      });

    var bbmChart = c3.generate({
        bindto: '#bbm-chart',
        data: {
          columns: [
            ['Pertamax', 3894],
            ['Premium', 5982],
            ['Solar', 4857],
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
        demandsupplygraph.load({
          columns: choiceColumns[filterId]
        });
    };    


    var demandsupplygraph = c3.generate({
        bindto: '#demandsupply-graph',
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

  });
