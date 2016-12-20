// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in accueil.html)
// the 2nd parameter is an array of 'requires'
app = angular.module('starter', ['ionic','ngCordova'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state("accueil", {
    url: "/accueil",
    templateUrl: "templates/accueil.html",
    controller: "accueilCtrl"
  });

  $stateProvider.state("recherche", {
    url: "/recherche",
    templateUrl: "templates/recherche.html"
  });

  $stateProvider.state("conseil", {
    url: "/conseil",
    templateUrl: "templates/conseil.html"
  });

  $stateProvider.state("compte", {
    url: "/compte",
    templateUrl: "templates/compte.html"
  });

  $stateProvider.state("aide", {
    url: "/aide",
    templateUrl: "templates/aide.html"
  });

  $stateProvider.state("about", {
    url: "/about",
    templateUrl: "templates/about.html"
  });

  $urlRouterProvider.otherwise("accueil");
});

app.controller('accueilCtrl', function ($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};
  var latLng;
  $cordovaGeolocation.getCurrentPosition(options).then(function (position) {
    latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    buildMap(latLng);

  }, function (error) {
    console.log("Could not get your current location");
    latLng = new google.maps.LatLng(12.367114,-1.515120);
    buildMap(latLng);
  });

  function buildMap(latLng) {
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

      map.setCenter(latLng);
      // var myLocation = new google.maps.Marker({
      //   position: latLng,
      //   map: map,
      //   title: "My Location"
      // });
    $scope.map = map;
  }


  $scope.getInput = function (pharmadata) {
    console.log("INPUT ==> " + pharmadata);
    if (pharmadata) {
      alert("Vous avez entré [" + pharmadata + "].\nEn cours de developpement\nMerci");
    } else {
      alert("Renseigner le formulaire avant d'envoyer la demande");
    }
  }

  $scope.showSearcBar = function () {
    if ($scope.shouldShow == true) {
      $scope.shouldShow = false;
    } else {
      $scope.shouldShow = true;
    }
  }

  /*
   $scope.showFilterBar = function () {
   filterBar = $ionicFilterBar.show({
   cancelText: "<i class='ion-ios-close-outline'></i>",
   items: $scope.values,
   update: function (filteredItems, filterText) {
   if (filterText) {
   $scope.fetchEnter(filterText);
   }
   $scope.values = filteredItems
   }
   });
   }

   $scope.fetchEnter = function(searchText) {
   console.log("INPUT ==> "+searchText);
   }

   $scope.doRefresh = function () {
   $scope.values = window.Values;
   $scope.$broadcast('scroll.refreshComplete');
   }
   */

})
