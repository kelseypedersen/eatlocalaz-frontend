angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

// Example for 1-Letters, 2-Letter, 3-Results //
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

// Page 1 //
.controller('LettersCtrl', function($scope) {
  $scope.letters = [
    { title: 'A', id: 1 },
    { title: 'B', id: 2 },
    { title: 'C', id: 3 },
    { title: 'D', id: 4 },
    { title: 'E', id: 5 },
    { title: 'F', id: 6 }
  ];
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
});

// Page 2 //
.controller('LetterCtrl', function($scope, $stateParams) {
  $scope.letter = [
    // Need to add all the cuisines for the specific letter here
    // Response will be coming from this repo
    // Include all letters in file and query the object in file
  ]
});

// Page 3 //
.controller('ResultsCtrl', function($scope, $stateParams) {
  $scope.results = [
    // Need to add all the cuisines for the specific letter here
    // Response will be coming from the Yelp Search API for all_categories_list
    // Params passed will the cuisine type
  ]
});

.controller('DetailsCtrl', function($scope, $stateParams) {
  $scope.details = [
    // Add details for one Yelp restaurant here
    // Response will be coming from the Yelp Business API
    // Params passed will be the Yelp ID key
  ]
});




