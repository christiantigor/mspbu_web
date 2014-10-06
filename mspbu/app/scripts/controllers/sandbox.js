'use strict';

angular.module('frontendApp')
  .controller('SandboxCtrl', function ($scope, $filter, ngTableParams) {
    charts.gauge({  
        container: '#chart_area',  
        value: 50,  
        size: 240,  
        label: 'Memory',  
        minorTicks: 5,  
        majorTicks: 5,  
        zones: {  
            red: { from: 0, to: 5 },  
            yellow: { from: 5, to: 15 },  
            green: { from: 85, to: 100 }  
        }  
    });  
  });
