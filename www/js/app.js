// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in accueil.html)
// the 2nd parameter is an array of 'requires'
app=angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state("accueil",{
    url:"/accueil",
    templateUrl:"templates/accueil.html"
  });

  $stateProvider.state("recherche",{
    url:"/recherche",
    templateUrl:"templates/recherche.html"
  });

  $stateProvider.state("conseil",{
    url:"/conseil",
    templateUrl:"templates/conseil.html"
  });

  $stateProvider.state("compte",{
    url:"/compte",
    templateUrl:"templates/compte.html"
  });

  $stateProvider.state("aide",{
    url:"/aide",
    templateUrl:"templates/aide.html"
  });

  $stateProvider.state("about",{
    url:"/about",
    templateUrl:"templates/about.html"
  });

  $urlRouterProvider.otherwise("accueil");

});
