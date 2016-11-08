import angular = require("angular");
import mainCtrl = require("./demo/main-controller");

module Kikodo {
    interface IKikodoService {
        check(address:string): ng.IPromise<{}>;
    }

    class KikodoService implements IKikodoService {
        static $inject = ["$http"];
        constructor(private $http: ng.IHttpService) {
        }
        check(address: string): ng.IPromise<{}> {
            return this.$http.get("http://api.jirengu.com/weather.php?callback=getWeather");
        }
    }

    let app = angular.module("main", []);
    app.controller("maincontroller", mainCtrl)
        .service("mainservice", KikodoService);
}