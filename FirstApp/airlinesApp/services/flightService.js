(function (app) {

 var testData = [{
     id: 1,
     airline: "United",
     flightsNumber: 207,
     startTime: "13:00",
     endTime: "15:00",
     totalDuration: 2,
     price: 203,
   date: "12/1/2017",
     cities: ["ORD", "LAS"],
    approved: false
 },
 {
      id: 2,
         airline: "USA",
         flightsNumber: 246,
    startTime: "12:00",
    endTime: "25:00",
     totalDuration: 5,
        price: 205,
     date: "12/1/2017",
    cities: ["SFO", "LAS"],
   approved: false
  
      }

    ];

    var baseUrl = "/api/flights";

    var flightService = function ($http) {
        var flightFactory = {};
        flightFactory.getFlights = function () {
            //return testData;
            return $http.get(baseUrl);
        };

        flightFactory.selectFlight = function () {
            return true;
        }
        return flightFactory;

    };
    app.factory("flightService", ["$http", flightService]);

}(angular.module("airlineApp")));