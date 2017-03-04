"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var app_settings_1 = require('./../app.settings');
var core_1 = require('@angular/core');
var FacebookService = (function () {
    function FacebookService() {
        FB.init({
            appId: app_settings_1.AppSettings.FB_APP_ID,
            cookie: false,
            // the session
            xfbml: true,
            version: app_settings_1.AppSettings.FB_VERSION // use graph api version 2.5
        });
    }
    FacebookService.prototype.login = function () {
        return new Promise(function (resolve, reject) {
            FB.login(function (response) { return resolve(response); });
        });
    };
    FacebookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FacebookService);
    return FacebookService;
}());
exports.FacebookService = FacebookService;
//# sourceMappingURL=facebook.service.js.map