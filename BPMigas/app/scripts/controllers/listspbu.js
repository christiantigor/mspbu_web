'use strict';

angular.module('bpmigasApp')
  .controller('ListspbuCtrl', function ($scope, $location, $http, $templateCache, $filter, ngTableParams) {
    
    //go
	$scope.go = function (path) {
        $location.url(path);
    };
	
    //goTo
    $scope.goTo = function (id) {
        $location.url('spbu?id=' + id);
    };
	
    //date
    $scope.todayDate = {
        'day':'',
        'date':'',
        'month':'',
        'year':'',
        'monYear':'',
        'weekth':''
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
		
        var wkth = Math.floor((dd/7)+1);
        
        $scope.todayDate.day = dy;
        $scope.todayDate.date = dd;
        $scope.todayDate.month = mm;
        $scope.todayDate.year = yyyy;
        $scope.todayDate.monYear = mm + ' ' + yyyy;
        $scope.todayDate.weekTh = wkth;
    };
	
	//init listspbu
	$scope.initListspbu = function () {
        $scope.gettingDate();
        $scope.getspbus();
    };
    
	//get spbu data
	$scope.urlspbus = 'data/getspbus.json';
	
    $scope.getspbus = function () {
        $http({
            method: 'GET',
            url: $scope.urlspbus,
            data: '',
            cache: $templateCache}).
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
    var spbusData = [];
	
    $scope.listspbus = function (spbuList){
        spbuList.forEach(function (s) {
            try{
                if(s.status === 'Normal'){
                    s.color = 'green',
                    s.icon = 'check'
                }
				else{
                    s.color = 'red',
                    s.icon = 'exclamation'
                }
                $scope.spbus.push({
                    id: s.id,
                    owner: s.owner,
                    addr: s.addr,
                    phone: s.phone,
                    totSpp: s.totSpp,
                    stock: s.stock,
                    abnrmlDisp: s.abnrmlDisp,
                    status: s.status,
                    lat: s.lat,
                    lng: s.lng,
                    icon: {
                        type: 'awesomeMarker',
                        prefix: 'fa',
                        icon: s.icon,
                        markerColor: s.color
                    },
                    layer: s.status,
                    message: '<h5><right><strong>SPBU ' + s.id +
					'</strong></right></h5><h6><strong>' + s.addr +
					'</strong></h6><h6>SPP - Stock: <strong>' + $scope.addDot(s.totSpp - s.stock) +
					' L</strong></h6><h6>Abnormal output: <strong>' + $scope.addDot(s.abnrmlDisp) +
					' times</strong></h6><h6>Status: <strong><font color="' + s.color +'">' + s.status + '</font></strong></h6>'
                });
				spbusData.push({ //data must be put here to show them on table
                    id: s.id,
                    totSpp: s.totSpp,
                    avgSpp: Math.ceil(s.totSpp/$scope.todayDate.weekTh),
                    stock: s.stock,
                    sppMnStock: (s.totSpp - s.stock),
                    abnrmlDisp: s.abnrmlDisp,
                    status: s.status
                });
            }
		    catch(err){
                console.log('error list spbu');
            }
		});
		
		//after spbu data loaded
        $scope.setspbuTableParams();
    };
	
    //spbu table
	$scope.setspbuTableParams = function () {
		$scope.spbuTableParams = new ngTableParams({
			page: 1,            // show first page
			count: 10,          // count per page
			filter: {
				id: ''       // initial filter
			},
			sorting: {
				id: 'asc'     // initial sorting
			}
		}, {
			total: spbusData.length, // length of data
			getData: function($defer, params) {
				// use build-in angular filter
				var filteredData = params.filter() ?
						$filter('filter')(spbusData, params.filter()) :
						spbusData;
				var orderedData = params.sorting() ?
						$filter('orderBy')(filteredData, params.orderBy()) :
						spbusData;
				params.total(orderedData.length); // set total for recalc pagination
				$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
			}
        });
    };
	
    //status color
    $scope.getStatusColor = function (spbu) {
        if(spbu.status === 'Normal'){
            return 'status-normal';
        }
        else{
            return 'status-suspicious';
        }
    };
	
    //leaflet
    $scope.defaults = {
	    scrollWheelZoom: false
    };
    $scope.center = {
        lat: -6.219404,
        lng: 106.812365,
        zoom: 12
    };
    $scope.layers = {
        baselayers: {
            openStreetMap: {
                name: 'OpenStreetMap',
                type: 'xyz',
                url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            }
        },
        overlays: {
            Normal:{
                type: 'group',
                name: 'Normal',
                visible: true
            },
            Suspicious:{
                type: 'group',
                name: 'Suspicious',
                visible: true
            }
        }
    };
    $scope.toggleLayer = function (status){
        $scope.layers.overlays[status].visible = !$scope.layers.overlays[status].visible;
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
