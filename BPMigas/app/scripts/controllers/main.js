'use strict';

angular.module('bpmigasApp')
  .controller('MainCtrl', function ($scope, $location, $http, $templateCache, $filter) {
  
    //go
	$scope.go = function (path) {
        $location.url(path);
    };
	
    //date
    $scope.todayDate = {
        'day':'',
        'date':'',
        'month':'',
        'year':''
    };
	
    $scope.gettingDate = function(){
        var today = new Date();
        
        var weekday = new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat');
        var dy = weekday[today.getDay()];
        
        var dd = today.getDate();
        var month = new Array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');
        var mm = month[today.getMonth()];
        var yyyy = today.getFullYear();
        
        if(dd<10){dd='0'+dd;}
        
        $scope.todayDate.day = dy;
        $scope.todayDate.date = dd;
        $scope.todayDate.month = mm;
        $scope.todayDate.year = yyyy;
        $scope.todayDate.monYear = mm + ' ' + yyyy;
    };
    //end date
	
    //init main
	$scope.initMain = function () {
        $scope.gettingDate();
		$scope.getspbu();
        //$scope.getspbus();
    };
	
	$scope.urlspbu = 'http://118.97.213.177/Service.svc/sppGet';
	
	$scope.getspbu = function () {
		var objtoparams = function (obj){
			var p = [];
			for(var key in obj){
				p.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
			}
			return p.join('&');
		};
		var surat = {sppId : 1};
		console.log(objtoparams(surat));
		
		$http.defaults.useXDomain = true;
		$http({
			method: 'POST',
			url: $scope.urlspbu,
			data: {sppId: 1},
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).
		success(function(data){
			console.log(data);
			return data;
		}).
		error(function(data,status,headers,config){
			return data;
		});
	};
	
    //get spbu data
	//$scope.urlspbus = 'data/getspbus.json';
    $scope.urlspbus = 'http://118.97.213.177/Service.svc/sppGetAll';
	
    $scope.getspbus = function () {
        $http({
            method: 'POST',
            url: $scope.urlspbus,
            data: '',
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}).
        success(function(data) {
            $scope.listspbus(data);
            return data;
        }).
        error(function(data) {
            $scope.getspbus();
            return data;
        });
    };
	
    $scope.spbus = [];
	
    $scope.listspbus = function (spbuList){
        //console.log(spbuList.sppGetAllResult);
		spbuList.sppGetAllResult.forEach(function (s) {
            try{
                $scope.spbus.push({
                    Id: s.Id,
                    address: s.address,
                    buyer: s.buyer,
                    dens_temp: s.dens_temp,
                    name: s.name,
                    police_no: s.police_no,
                    print_date: s.print_date,
                    product: s.product,
                    shipment_no: s.shipment_no,
                    status: s.status,
					username: s.username,
					verification_date: s.verification_date
                });
            }
		    catch(err){
                console.log('error list spbu');
            }
		});
		
		//after spbu data loaded
		//console.log($scope.spbus);
		//$scope.getspbusStatus();
        //$scope.chartspbusStatus();
		//$scope.getbbmDistribution();
		//$scope.chartbbmDistribution();
    };
	
    $scope.spbusStatus = [];
	
    $scope.getspbusStatus = function () {
        $scope.normalspbus = $filter('filter')($scope.spbus, 'Normal');
        var temp = ['Normal', $scope.normalspbus.length];
		$scope.spbusStatus.push(temp);
		
        $scope.suspiciousspbus = $filter('filter')($scope.spbus, 'Suspicious');
        temp = ['Suspicious', $scope.suspiciousspbus.length];
        $scope.spbusStatus.push(temp);
    };
	
    $scope.chartspbusStatus = function () {
        c3.generate({
            bindto: '#chartspbusStatus',
            data: {
                // iris data from R
                columns: $scope.spbusStatus,
                type: 'pie',
                labels: true
            },
            pie: {
                onclick: function (d, i) { console.log(d, i); },
                onmouseover: function (d, i) { console.log(d, i); },
                onmouseout: function (d, i) { console.log(d, i); }
            }
        });
    };
	
    $scope.bbmDistribution = [];
	
	$scope.getbbmDistribution = function () {
        var overallSpp = (_.reduce($scope.spbus, function (memo, num){
            return memo + num.totSpp;
        }, 0));
		console.log(overallSpp);
		
        var suspicious = $filter('filter')($scope.spbus, 'Suspicious');
		var suspiciousSpp = (_.reduce(suspicious, function (memo, num){
            return memo + num.totSpp;
        }, 0));
		var suspiciousStock = (_.reduce(suspicious, function (memo, num){
            return memo + num.stock;
        }, 0));
		
		$scope.estimatedLoss = suspiciousSpp - suspiciousStock;
		$scope.wellDistributed = overallSpp - $scope.estimatedLoss;
		
		var temp = ['Estimated Loss', $scope.estimatedLoss];
		$scope.bbmDistribution.push(temp);
		temp = ['Well Distributed', $scope.wellDistributed];
		$scope.bbmDistribution.push(temp);
	
    };
	
    $scope.chartbbmDistribution = function () {
        c3.generate({
            bindto: '#chartbbmDistribution',
            data: {
                // iris data from R
                columns: $scope.bbmDistribution,
                type: 'pie',
                labels: true
            },
            pie: {
                onclick: function (d, i) { console.log(d, i); },
                onmouseover: function (d, i) { console.log(d, i); },
                onmouseout: function (d, i) { console.log(d, i); }
            }
        });
    };
	
    //add dot
	$scope.addDot = function (nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while(rgx.test(x1)){
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return x1 + x2;
    };
	
  });
