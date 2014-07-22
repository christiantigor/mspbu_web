'use strict';

angular.module('bpmigasApp')
  .controller('SpbuCtrl', function ($scope, $location, $http, $templateCache, $filter, ngTableParams) {
  
    //go
	$scope.go = function (path) {
        $location.url(path);
    };
	
    //init spbu
	$scope.initspbu = function () {
        $scope.getspbus();
        $scope.getEvents();
        $scope.getSpps(); //getStock inside getSpps function
        $scope.getDispenser();
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
    $scope.markerSelectedspbu = [];
	
    $scope.listspbus = function (spbuList){
        spbuList.forEach(function (s) {
            try{
                if(s.status === 'Normal'){
                    s.color = 'green'
                }
				else{
                    s.color = 'red'
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
					message: '<h5><right><strong>SPBU ' + s.id +
					'</strong></right></h5><h6><strong>' + s.addr +
					'</strong></h6><h6>SPP - Stock: <strong>' + $scope.addDot(s.totSpp - s.stock) +
					' L</strong></h6><h6>Abnormal output: <strong>' + $scope.addDot(s.abnrmlDisp) +
					' times</strong></h6><h6>Status: <strong><font color="' + s.color +'">' + s.status + '</font></strong></h6>'
                });
            }
		    catch(err){
                console.log('error list spbu');
            }
		});
		
		//after spbu data loaded
        $scope.currentspbu();
    };
	
    $scope.currentspbu = function () {
        var selectedspbu;
        var urlParam;
		
        var spbuParam = $location.url();
		for (var i=0; i<=spbuParam.length; i++) {
            if ( spbuParam[i] === '=' ) {
                urlParam = spbuParam[i+1]+spbuParam[i+2]+spbuParam[i+3];
            }
		}
        
        selectedspbu = _.filter($scope.spbus, function (obj) {
            return obj.id === urlParam;
        });
        $scope.selectedspbu = JSON.parse(JSON.stringify(selectedspbu[0]));
		$scope.markerSelectedspbu.push($scope.selectedspbu);
    };
	
	//get event data
	$scope.urlEvents = 'data/getEvents.json';
	
    $scope.getEvents = function () {
        $http({
            method: 'GET',
            url: $scope.urlEvents,
            data: '',
            cache: $templateCache}).
        success(function(data) {
            $scope.listEvents(data);
            return data;
        }).
        error(function(data) {
            $scope.getEvents();
            return data;
        });
    };
	
    $scope.events = [];
	$scope.eventSources = []; //events must be put here to show them on calendar
	
    $scope.listEvents = function (eventList){
        eventList.forEach(function (e) {
            try{
                $scope.events.push({
                    title: e.title,
                    start: new Date(e.year, e.month, e.day, e.hour, e.minute),
                    allDay: false
                });
            }
		    catch(err){
                console.log('error list event');
            }
		});
		
		//after event data loaded
		$scope.eventSources.push($scope.events);
		
        //these are for learn ngTab
		/* $scope.listEventsData($scope.events);
		$scope.setTableParams();
        $scope.setTableDispParams(); */
    };
	
    //get spp data
	$scope.urlSpps = 'data/getSpps.json';
	
    $scope.getSpps = function () {
        $http({
            method: 'GET',
            url: $scope.urlSpps,
            data: '',
            cache: $templateCache}).
        success(function(data) {
            $scope.listSpps(data);
            return data;
        }).
        error(function(data) {
            $scope.getSpps();
            return data;
        });
    };
	
    $scope.spps = [];
    var sppsData = [];

	$scope.listSpps = function (sppList){
        sppList.forEach(function (s) {
            try{
                $scope.spps.push({
                    id: s.id,
                    shipmentDtTm: s.shipmentDtTm,
                    ritase: s.ritase,
                    amount: s.amount,
                    truckId: s.truckId,
                    depo: s.depo,
                    employee: s.employee,
                    destSpbuId: s.destSpbuId
                });
                sppsData.push({ //data must be put here to show them on table
                    id: s.id,
                    shipmentDtTm: s.shipmentDtTm,
                    ritase: s.ritase,
                    amount: s.amount,
                    truckId: s.truckId,
                    depo: s.depo,
                    employee: s.employee,
                    destSpbuId: s.destSpbuId
                });
            }
		    catch(err){
                console.log('error list spp');
            }
		});
		
		//after spp data loaded
        $scope.setSppTableParams();
        $scope.getStock(); //getStock done after getSpps to make them on same chart
    };
	
    //get stock data
	$scope.urlStock = 'data/getStock.json';
	
    $scope.getStock = function () {
        $http({
            method: 'GET',
            url: $scope.urlStock,
            data: '',
            cache: $templateCache}).
        success(function(data) {
            $scope.listStock(data);
            return data;
        }).
        error(function(data) {
            $scope.getStock();
            return data;
        });
    };
	
    $scope.stock = [];
	
	$scope.listStock = function (stockList){
        stockList.forEach(function (s) {
            try{
                $scope.stock.push({
                    dateTime: s.dateTime,
                    amount: s.amount,
                    spbuId: s.spbuId
                });
            }
		    catch(err){
                console.log('error list stock');
            }
		});

		//after stock data loaded
        $scope.getChartSppStockData();
        $scope.chartSppStock();
    };
	
    //spp table
	$scope.setSppTableParams = function () {
		$scope.sppTableParams = new ngTableParams({
			page: 1,            // show first page
			count: 10,          // count per page
			filter: {
				id: ''       // initial filter
			},
			sorting: {
				id: 'asc'     // initial sorting
			}
		}, {
			total: sppsData.length, // length of data
			getData: function($defer, params) {
				// use build-in angular filter
				var filteredData = params.filter() ?
						$filter('filter')(sppsData, params.filter()) :
						sppsData;
				var orderedData = params.sorting() ?
						$filter('orderBy')(filteredData, params.orderBy()) :
						sppsData;
				params.total(orderedData.length); // set total for recalc pagination
				$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
			}
        });
    };
	
    //chart spp and stock data
    $scope.chartSppStockData = [];
	
    //to show spp and stock in one chart, they must have same timeseries
	//alternative: show spp and stock in defferent chart
    $scope.getChartSppStockData = function () {
        var selectedspbuSppData = $filter('filter')($scope.spps,$scope.selectedspbu.id);
        var selectedspbuStockData = $filter('filter')($scope.stock,$scope.selectedspbu.id);
        
        var dateTemp = [];
        dateTemp.push('date');
        selectedspbuSppData.forEach(function (d) {
            try{
                dateTemp.push(d.shipmentDtTm);
            }
			catch(err){
                console.log('error list dateTemp');
            }
        });
		
        var amountSppTemp = [];
        amountSppTemp.push('SPP SPBU-' + $scope.selectedspbu.id);
		selectedspbuSppData.forEach(function (d) {
            try{
                amountSppTemp.push(d.amount);
            }
			catch(err){
                console.log('error list amountSppTemp');
            }
        });
		
        var amountStockTemp = [];
        amountStockTemp.push('Stock SPBU-' + $scope.selectedspbu.id);
		selectedspbuStockData.forEach(function (d) {
            try{
                amountStockTemp.push(d.amount);
            }
			catch(err){
                console.log('error list amountStockTemp');
            }
        });
		
		$scope.chartSppStockData.push(dateTemp);
		$scope.chartSppStockData.push(amountSppTemp);
        $scope.chartSppStockData.push(amountStockTemp);
		//console.log($scope.chartSppStockData);
    };
	
    $scope.chartSppStock = function () {
        c3.generate({
            bindto: '#chartSppStock',
            data: {
                x: 'date',
                x_format: '%Y%m%d-%H:%M',
                columns: $scope.chartSppStockData
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%d %b %H:%M'
                    }
                },
                y: {
                    label: 'Amount (L)'
                }
            },
            subchart:{
                show: true
            }
        });
    };
	
    //get dispenser data
	$scope.urlDispenser = 'data/getDispenser.json';
	
    $scope.getDispenser = function () {
        $http({
            method: 'GET',
            url: $scope.urlDispenser,
            data: '',
            cache: $templateCache}).
        success(function(data) {
            $scope.listDispenser(data);
            return data;
        }).
        error(function(data) {
            $scope.getDispenser();
            return data;
        });
    };
	
    $scope.dispenser = [];
    var dispensersData = [];
	
	$scope.listDispenser = function (dispenserList){
        dispenserList.forEach(function (s) {
            try{
                $scope.dispenser.push({
                    dateTime: s.dateTime,
                    amount: s.amount,
                    transaction: s.transaction,
                    spbuId: s.spbuId
                });
				dispensersData.push({ //data must be put here to show them on table
                    dateTime: s.dateTime,
                    amount: s.amount,
                    transaction: s.transaction,
                    spbuId: s.spbuId
                });
            }
		    catch(err){
                console.log('error list dispenser');
            }
		});
		
		//after dispenser data loaded
		$scope.setDispenserTableParams();
        $scope.getChartDispenserData();
        $scope.chartDispenser();
    };
	
    //dispenser table
	$scope.setDispenserTableParams = function () {
		$scope.dispenserTableParams = new ngTableParams({
			page: 1,            // show first page
			count: 10,          // count per page
			filter: {
				dateTime: ''       // initial filter
			},
			sorting: {
				dateTime: 'asc'     // initial sorting
			}
		}, {
			total: dispensersData.length, // length of data
			getData: function($defer, params) {
				// use build-in angular filter
				var filteredData = params.filter() ?
						$filter('filter')(dispensersData, params.filter()) :
						dispensersData;
				var orderedData = params.sorting() ?
						$filter('orderBy')(filteredData, params.orderBy()) :
						dispensersData;
				params.total(orderedData.length); // set total for recalc pagination
				$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
			}
        });
    };
	
    //chart dispenser data
    $scope.chartDispenserData = [];
	
    $scope.getChartDispenserData = function () {
        var selectedspbuDispenserData = $filter('filter')($scope.dispenser,$scope.selectedspbu.id);
        
        var dateTemp = [];
        dateTemp.push('date');
        selectedspbuDispenserData.forEach(function (d) {
            try{
                dateTemp.push(d.dateTime);
            }
			catch(err){
                console.log('error list dateTemp');
            }
        });
		
        var amountDispenserTemp = [];
        amountDispenserTemp.push('Amount');
		selectedspbuDispenserData.forEach(function (d) {
            try{
                amountDispenserTemp.push(d.amount);
            }
			catch(err){
                console.log('error list amountDispenserTemp');
            }
        });
		
        var transDispenserTemp = [];
        transDispenserTemp.push('Transaction');
		selectedspbuDispenserData.forEach(function (d) {
            try{
                transDispenserTemp.push(d.transaction);
            }
			catch(err){
                console.log('error list transDispenserTemp');
            }
        });
		
		$scope.chartDispenserData.push(dateTemp);
		$scope.chartDispenserData.push(amountDispenserTemp);
        $scope.chartDispenserData.push(transDispenserTemp);
    };
	
	//chart dispenser
    $scope.chartDispenser = function () {
        c3.generate({
            bindto: '#chartDispenser',
            data: {
                x: 'date',
                x_format: '%Y%m%d-%H:%M',
                columns: $scope.chartDispenserData,
                axes: {
                    Amount: 'y',
                    Transaction: 'y2'
                }
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%d %b %H:%M'
                    }
                },
                y: {
                    label: 'Amount (L)'
                },
                y2: {
                    label: 'Transaction (times)',
                    show:true
                }
            },
            subchart:{
                show: true
            }
        });
    };
	
    //leaflet
    $scope.defaults = {
	    scrollWheelZoom: false
    };
    $scope.center = { //dummy coordinat for first load, shows Monas
        lat: -6.17518,
        lng: 106.827019,
        zoom: 12
    };
	
    //calendar
    $scope.uiConfig = {
      calendar:{
        height: 380,
        editable: true,
        header:{
          left: 'month basicWeek',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };
	
    
	
/* 	//table
    var data = [{title: "Moroni", age: 50},
        {title: "Tiancum", age: 43},
        {title: "Jacob", age: 27},
        {title: "Nephi", age: 29},
        {title: "Enos", age: 34},
        {title: "Tiancum", age: 43},
        {title: "Jacob", age: 27},
        {title: "Nephi", age: 29},
        {title: "Enos", age: 34},
        {title: "Tiancum", age: 43},
        {title: "Jacob", age: 27},
        {title: "Nephi", age: 29},
        {title: "Enos", age: 34},
        {title: "Tiancum", age: 43},
        {title: "Jacob", age: 27},
        {title: "Nephi", age: 29},
        {title: "Enos", age: 34}];
		
    var eventsData = [{title: "Moroni", year: 50},
        {title: "Tiancum", year: 43},
        {title: "Jacob", year: 27}];
    $scope.listEventsData = function (events) {
        events.forEach(function (e) {
            try{
                eventsData.push({
                    title: e.title,
                    year: e.year
                });
            }
		    catch(err){
                console.log('error list event data');
            }
		});
    };
	
    $scope.setTableParams = function () {
		$scope.tableParams = new ngTableParams({
			page: 1,            // show first page
			count: 10,          // count per page
			filter: {
				title: ''       // initial filter
			},
			sorting: {
				year: 'asc'     // initial sorting
			}
		}, {
			total: eventsData.length, // length of data
			getData: function($defer, params) {
				// use build-in angular filter
				var filteredData = params.filter() ?
						$filter('filter')(eventsData, params.filter()) :
						eventsData;
				var orderedData = params.sorting() ?
						$filter('orderBy')(filteredData, params.orderBy()) :
						eventsData;
				params.total(orderedData.length); // set total for recalc pagination
				$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
			}
		});
    };
	
	$scope.setTableDispParams = function () {
		$scope.tableDispParams = new ngTableParams({
			page: 1,            // show first page
			count: 10,          // count per page
			filter: {
				title: ''       // initial filter
			},
			sorting: {
				year: 'asc'     // initial sorting
			}
		}, {
			total: eventsData.length, // length of data
			getData: function($defer, params) {
				// use build-in angular filter
				var filteredData = params.filter() ?
						$filter('filter')(eventsData, params.filter()) :
						eventsData;
				var orderedData = params.sorting() ?
						$filter('orderBy')(filteredData, params.orderBy()) :
						eventsData;
				params.total(orderedData.length); // set total for recalc pagination
				$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
			}
		});
    }; */
	
	
	
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
	
    $scope.$watch('selectedspbu', function() {
	
        //console.log($scope.selectedspbu);
        if($scope.selectedspbu !== undefined){
            $scope.center = {
                lat: $scope.selectedspbu.lat,
                lng: $scope.selectedspbu.lng,
                zoom: 12
            };
        }
    });
	
	
	
  });
