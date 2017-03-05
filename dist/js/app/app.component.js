var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { FacebookService } from './services/facebook.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
export var AppComponent = (function () {
    function AppComponent(route, router, face, auth) {
        this.route = route;
        this.router = router;
        this.face = face;
        this.auth = auth;
    }
    AppComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (this.auth.login(value.username, value.password)) {
            this.route.queryParams.subscribe(function (ps) { return _this.router.navigate([ps['destination'] || '/home']); });
        }
        else {
            this.authError = true;
        }
    };
    AppComponent.prototype.loginWithFacebook = function () {
        this.face.login().then(function (response) { return console.log(response); }, function (error) { return console.error(error); });
    };
    AppComponent.prototype.doSearch = function () {
        this.router.navigate(["/landing"], { queryParams: { 'search': this.search } });
    };
    AppComponent = __decorate([
        Component({
            selector: 'ld-app',
            templateUrl: '../templates/app.component.html',
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, Router, FacebookService, AuthService])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map