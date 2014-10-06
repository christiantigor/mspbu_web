'use strict';

angular.module('frontendApp')
  .controller('StockCtrl', function ($scope, $location, $log, $modal) {

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
        perseverance: 20,
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
        perseverance: 22,
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
        perseverance: 25,
        remain: 75.7,
        lastvolume: 130,
        lastfill: "2014/2/28 10:11",
        nextvolume: 135,
        nextfill: "2014/3/2 16:30",
        refill: 125.4,
        consumption: 100.2,
    };

    $scope.open = function (type) {

      var modalInstance = $modal.open({
        templateUrl: 'orderForm.html',
        controller: orderControl,
        resolve: {
          items: function () {
            return type;
          }
        }
      });     

      modalInstance.result.then(function () {
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.update = function (type) {

      var modalInstance = $modal.open({
        templateUrl: 'updateForm.html',
        controller: updateControl,
        resolve: {
          items: function () {
            return type;
          }
        }
      });     

      modalInstance.result.then(function () {
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

  });

var orderControl = function ($scope, $modalInstance, $log, items) {

  $scope.type = items;

  $scope.dt = new Date();

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = ( $scope.minDate ) ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };

  $scope.dateOptions = {
    'year-format': "'yy'",
    'starting-day': 1
  };

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};

var updateControl = function ($scope, $modalInstance, $log, items) {

  $scope.type = items;

  $scope.dt = new Date();

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = ( $scope.minDate ) ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };

  $scope.dateOptions = {
    'year-format': "'yy'",
    'starting-day': 1
  };

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};
