'use strict';

/**
 * @ngdoc function
 * @name mspbuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mspbuApp
 */
angular.module('mspbuApp')
  .controller('MainCtrl', function ($scope, $http, Restangular) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	//restangular
	$scope.restNg = function () {
		var baseAccounts = Restangular.all('http://118.97.213.177/Service.svc/sppGetAll');
		var test = baseAccounts.post();
		//var test = Restangular.allUrl('googlers', 'http://www.google.com/').getList();
		console.log('response', test);
	};
	
	//get spbu data
	$scope.urlspbus = 'http://118.97.213.177/Service.svc/sppGetAll';
	
	$scope.getspbus = function () {
	    var transform = function(data){
			return $.param(data);
		}
		$http({
			method: 'POST',
			url: $scope.urlspbus,
			data: '',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			transformRequest: transform
		}).
		success(function(data, status, header, config){
			console.log('success', data);
			return data;
		}).
		error(function(data, status, header, config){
			console.log('data', data);
			console.log('status', status);
			console.log('header', header);
			console.log('config', config);
			return data;
		});
	};
	$scope.getspbus2 = function () {
		$http.post("http://118.97.213.177/Service.svc/sppGetAll",
		$.param(''),
		{
			headers:
			{
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			}
		}
		).success(
			function(data) {
				//do stuff with response
				console.log('suc',data)
			}
		);
	};
	
	
  });
