'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute','angular-responsive','door3.css'])
    .config(function($routeProvider, responsiveHelperProvider) {
        var device = 'desktop';
		var maincss='/bootstrap/css/bootstrap.min.css';
        var responsiveHelper = responsiveHelperProvider.$get();
        if(responsiveHelper.isMobile()){
            device = 'mobile';
			maincss= '/uikit/css/uikit.min.css';
        }
		 if(responsiveHelper.isTablet()){
            device = 'tablet';
			maincss='/semantic/semantic.min.css';
        }
	
        $routeProvider.when('/view1', {templateUrl: device + '/partial1.html', controller: 'myController',css:[device+maincss,device +'/style.css']});
        $routeProvider.when('/view2', {templateUrl: device + '/partial2.html', controller: 'myController',css:[device+maincss,device +'/style.css']});
        $routeProvider.otherwise({redirectTo: '/view1'});
    });


function myController($scope) {
    $scope.email = 'jlavin@jimlavin.net';
}