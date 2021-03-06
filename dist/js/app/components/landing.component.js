var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LipsumService } from './../services/lipsum.service';
import { ArticleService } from './../services/article.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
export var LandingComponent = (function () {
    function LandingComponent(router, route, articleService, lipsumService) {
        this.router = router;
        this.route = route;
        this.articleService = articleService;
        this.lipsumService = lipsumService;
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (p) {
            _this.search = p['search'];
            _this.loadArticles();
        });
    };
    LandingComponent.prototype.loadArticles = function () {
        var _this = this;
        this.articleService.geArticles(this.search).then(function (re) {
            _this.articles = re.content;
            _this.articles.forEach(function (a) {
                _this.lipsumService.getText().then(function (rte) {
                    a.currentVersion.text = '<p>' + rte.join('</p><p>') + '</p>';
                });
            });
        });
    };
    LandingComponent = __decorate([
        Component({
            selector: 'ld-landing',
            templateUrl: '../../templates/landing.component.html'
        }), 
        __metadata('design:paramtypes', [Router, ActivatedRoute, ArticleService, LipsumService])
    ], LandingComponent);
    return LandingComponent;
}());
//# sourceMappingURL=landing.component.js.map