var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
export var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (username, password) {
        var d = new DatePipe('en').transform(new Date(), 'HHmm');
        if (username === 'Debate@' + d && password == 'oUG13Sux!') {
            this.authUser = 'Debate';
            return true;
        }
        return false;
    };
    AuthService.prototype.getAuthenticatedUser = function () {
        return this.authUser;
    };
    AuthService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=auth.service.js.map