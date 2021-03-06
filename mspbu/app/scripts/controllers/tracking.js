'use strict';

angular.module('frontendApp')
  .controller('TrackingCtrl', function ($scope, $location, $anchorScroll, $log, $filter, ngTableParams) {

    $scope.map = {
      center: {
        latitude : -6.235930307358471,
        longitude : 106.83558403262488,
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

    $scope.tracks = [
      {
        id: 1,
        spp: "9340373783045929248",
        product: "Premium",
        status: "late",
        latitude : -6.235930307358471,
        longitude : 106.83558403262488,
        path: [
          {
            latitude : -6.235930307358471,
            longitude : 106.83558403262488,
          },
          {
            latitude: -6.245930307358471,
            longitude: 106.83558403262488
          },
          {
            latitude: -6.245930307358471,
            longitude: 106.84558403262488
          },
          {
            latitude: -6.255930307358471,
            longitude: 106.85558403262488
          },
          {
            latitude: -6.265930307358471,
            longitude: 106.87558403262488
          },
          {
            latitude: -6.272930307358471,
            longitude: 106.89158403262488
          },
          {
            latitude: -6.278930307358471,
            longitude: 106.89858403262488
          },
          {
            latitude: -6.288930307358471,
            longitude: 106.91858403262488
          },
          {
            latitude: -6.295930307358471,
            longitude: 106.93258403262488
          },
          {
            latitude: -6.299930307358471,
            longitude: 106.95258403262488
          }
        ]
      },
      {
        id: 2,
        spp: "9340373783045929788",
        product: "Pertamax",
        status: "ontime",
        latitude : -6.255930307358471,
        longitude : 106.92558403262488,
        path: [
          {
            latitude: -6.255930307358471,
            longitude: 106.92558403262488,
          },
          {
            latitude: -6.275930307358471,
            longitude: 106.91558403262488,
          },
          {
            latitude: -6.275930307358471,
            longitude: 106.92558403262488
          },
          {
            latitude: -6.285930307358471,
            longitude: 106.93558403262488
          },
          {
            latitude: -6.295930307358471,
            longitude: 106.94558403262488
          },
          {
            latitude: -6.299930307358471,
            longitude: 106.95258403262488
          }
        ]
      },
    ];

    $scope.polyline = {
      stroke: {
        color: '#e64040',
        weight: 3,
        opacity: 0.7
      },
      clickable: 'false',
      draggable: 'false',
      editable: 'false',
      geodesic: 'false',
      visible: 'true',
    };

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

  });
