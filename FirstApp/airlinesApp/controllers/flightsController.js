(function (app) {
    var flightsController = function ($scope, flightService, $timeout) {
        this.title = 'Some title';
        this.flights = {};
        var _this = this;
        //this.flightService = flightService;
        var onError = function () {
            alert("error!");
        };

        var onFlights = function (response) {
            _this.flights = response.data;
        };


        var init = function () {
          return flightService.getFlights().then(onFlights, onError);
        };

       this.selectFlight = function (flight) {
            for (var i = 0; i < this.flights.length; i++) {
             this.flights[i].approved = false;
            }

            flight.approved = !flight.approved;

            if (flightService.selectFlight(flight.id)) {
                this.status = (flight.id === 4) ?
                  "You have made a great choice!" : "you have made wrong choice";
                $timeout(function () {
                    this.status = null;
                }, 3000);
            }
        };

        init();
    };



    //flightsController.$inject = ["$scope"];

    app.controller("flightsController", ["$scope", "flightService", "$timeout", flightsController]);

}(angular.module("airlineApp")));

