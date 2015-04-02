var myapp = angular.module('myapp', []);

myapp.controller('DataBindingController', function($scope, $timeout) {
	$scope.items = [ {
		image : "1.jpg",
		title : "Beans & Legumes",
		description : ""
	}, {
		image : "2.jpg",
		title : "World's Healthiest Herbs & Spices",
		description : ""
	}, {
		image : "3.jpg",
		title : "Poultry & Meats",
		description : ""
	}, {
		image : "4.jpg",
		title : "Fruits",
		description : ""
	}, {
		image : "5.jpg",
		title : "Criteria for The World's Healthiest Foods",
		description : ""
	}, {
		image : "6.jpg",
		title : "Most Nutrient Dense",
		description : ""
	}, {
		image : "7.jpg",
		title : "Healthiest Foods are Readily Available",
		description : ""
	} ];

});