angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

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
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })

    //Example for 1-Letters, 2-Letter, 3-Results //
//.controller('PlaylistsCtrl', function($scope) {
//  $scope.playlists = [
//    { title: 'Reggae', id: 1 },
//    { title: 'Chill', id: 2 },
//    { title: 'Dubstep', id: 3 },
//    { title: 'Indie', id: 4 },
//    { title: 'Rap', id: 5 },
//    { title: 'Cowbell', id: 6 }
//  ];
//})

// Page 1 //
    .controller('LettersCtrl', function ($scope) {
        $scope.letters = [
            {title: 'A', id: 1},
            {title: 'B', id: 2},
            {title: 'C', id: 3},
            {title: 'D', id: 4},
            {title: 'E', id: 5},
            {title: 'F', id: 6},
            {title: 'G', id: 7},
            {title: 'H', id: 8},
            {title: 'I', id: 9},
            {title: 'J', id: 10},
            {title: 'K', id: 11},
            {title: 'L', id: 12},
            {title: 'M', id: 13},
            {title: 'N', id: 14},
            {title: 'O', id: 15},
            {title: 'P', id: 16},
            {title: 'Q', id: 17},
            {title: 'R', id: 18},
            {title: 'S', id: 19},
            {title: 'T', id: 20},
            {title: 'U', id: 21},
            {title: 'V', id: 22},
            {title: 'W', id: 23},
            {title: 'X', id: 24},
            {title: 'Y', id: 25},
            {title: 'Z', id: 26}
        ]
    })

    .controller('PlaylistCtrl', function ($scope, $stateParams) {
    })


    .controller('LetterCtrl', function ($scope, $stateParams) {
        $scope.header = $stateParams.letter;

        $scope.letter = function () {

            var categories = {
                A: ["Afghan", "African", "American (New)", "American (Traditional)", "Arabian", "Argentine", "Armenian", "Asian Fusion", "Australian", "Austrian"],
                B: ["Bangladeshi", "Barbeque", "Basque", "Belgian", "Brasseries", "Brazilian", "Breakfast & Brunch", "British", "Buffets", "Burgers", "Burmese"],
                C: ["Cafes", "Cafeteria", "Cajun/Creole", "Calabrian", "Cambodian", "Cantonese", "Caribbean", "Catalan", "Cheesesteaks", "Chicken Shop", "Chicken Wings", "Chinese", "Colombian", "Comfort Food", "Creperies", "Cuban", "Czech"],
                D: ["Delis", "Dim Sum", "Diners", "Dominican"],
                E: ["Egyptian", "Ethiopian"],
                F: ["Falafel", "Fast Food", "Filipino", "Fish & Chips", "Fondue", "Food Court", "Food Stands", "French"],
                G: ["Gastropubs", "German", "Gluten-Free", "Greek"],
                H: ["Haitian", "Halal", "Hawaiian", "Himalayan/Nepalese", "Hot Dogs", "Hot Pot", "Hungarian"],
                I: ["Iberian", "Indian", "Indonesian", "Irish", "Italian"],
                J: ["Japanese"],
                K: ["Korean", "Kosher"],
                L: ["Laotian", "Latin American", "Lebanese", "Live/Raw Food"],
                M: ["Malaysian", "Mediterranean", "Mexican", "Middle Eastern", "Modern European", "Mongolian", "Moroccan"],
                N: [],
                O: [],
                P: ["Pakistani", "Persian/Iranian", "Peruvian", "Pizza", "Polish", "Portuguese", "Poutineries", "Puerto Rican"],
                Q: [],
                R: ["Ramen", "Russian"],
                S: ["Salad", "Salvadoran", "Sandwiches", "Sardinian", "Scandinavian", "Scottish", "Seafood", "Senegalese", "Shanghainese", "Singaporean", "Slovakian", "Soul Food", "Soup", "South African", "Southern", "Spanish", "Sri Lankan", "Steakhouses", "Supper Clubs", "Sushi Bars", "Syrian", "Szechuan"],
                T: ["Taiwanese", "Tapas Bars", "Tapas/Small Plates", "Teppanyaki", "Tex-Mex", "Thai", "Trinidadian", "Turkish", "Tuscan"],
                U: ["Ukrainian", "Uzbek"],
                V: ["Vegan", "Vegetarian", "Venezuelan", "Vietnamese"],
                W: [],
                X: [],
                Y: [],
                Z: [],
            };

            var letter = $stateParams.letter;

            $scope.results = categories[letter];

            return $scope.results;
        };

        $scope.results = $scope.letter();

    })

    // Page 3 //
    .controller('ResultsCtrl', function ($scope, $stateParams, $http, Data) {
        $scope.Data = Data;

        //console.log("this is the hello" + $stateParams.cuisine);

        var input_cuisine = $stateParams.cuisine;

        var input_cuisine = input_cuisine.replace(/ /g, "_");

        $http({
            method: 'GET',
            url: 'http://eat-local-a-z.herokuapp.com/api/' + input_cuisine + '/37/104',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            data: {cuisine: 'cuisine'}
        }).success(function (response) {
            console.log(response);
            $scope.response = response;

            $scope.yelp_id = response.id;

        }).error(function (err) {
            // handle error
        });

        $scope.clickEvent = function (restaurant) {
            console.log(restaurant);
            $scope.Data.display_phone = restaurant.id;
            $scope.Data.name = restaurant.name;
            $scope.Data.rating = restaurant.rating;
            $scope.Data.location = restaurant.location;
            $scope.Data.rating_img_url_small = restaurant.rating_img_url_small;
            $scope.Data.image_url = restaurant.image_url;
            $scope.Data.display_phone = restaurant.display_phone;
            $scope.Data.snippet_text = restaurant.snippet_text;
        };
    })


    .controller('DetailsCtrl', function ($scope, $stateParams, Data) {
        $scope.Data = Data;


        console.log(Data.location);

        console.log(Data);
        var address = Data.location.display_address[0] || "";

        address = address.replace(/ /g, "+");

        $scope.map = "https://www.google.com/maps/place/" + address + ",+San+Francisco,+CA";

        console.log($scope.map);


    })

    .factory('Data', function () {
        return {
            order: '',
            id: '',
            rating: '',
            location: '',
            rating_img_url_small: '',
            image_url: '',
            snippet_text: '',
            display_phone: ''
        }
    });






