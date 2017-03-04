var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ArticleService } from './../services/article.service';
import { FacebookService } from './../services/facebook.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
export var LandingComponent = (function () {
    function LandingComponent(router, route, auth, face, articleService, fb) {
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.face = face;
        this.articleService = articleService;
        this.fb = fb;
        this.authError = false;
        this.loginForm = fb.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.geArticles().then(function (re) { return _this.articles = re.content; });
    };
    LandingComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (this.auth.login(value.username, value.password)) {
            this.route.queryParams.subscribe(function (ps) { return _this.router.navigate([ps['destination'] || '/home']); });
        }
        else {
            this.authError = true;
        }
    };
    LandingComponent.prototype.loginWithFacebook = function () {
        this.face.login().then(function (response) { return console.log(response); }, function (error) { return console.error(error); });
    };
    LandingComponent = __decorate([
        Component({
            selector: 'gr-landing',
            templateUrl: '../../templates/landing.component.html'
        }), 
        __metadata('design:paramtypes', [Router, ActivatedRoute, AuthService, FacebookService, ArticleService, FormBuilder])
    ], LandingComponent);
    return LandingComponent;
}());
//# sourceMappingURL=landing.component.js.map