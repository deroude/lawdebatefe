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
import { LawArticleSummary } from './../domain/articleSummary';
import { ArticleService } from './../services/article.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
export var ArticleComponent = (function () {
    function ArticleComponent(router, route, articleService, lipsumService) {
        this.router = router;
        this.route = route;
        this.articleService = articleService;
        this.lipsumService = lipsumService;
        this.authError = false;
        this.expanded = {};
        this.article = new LawArticleSummary();
        this.responses = {};
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.articleService.getArticle(+p['id']).then(function (re) {
                _this.article = re;
                _this.lipsumService.getText().then(function (rte) {
                    _this.article.currentVersion.text = '<p>' + rte.join('</p><p>') + '</p>';
                });
            });
            _this.articleService.getResponses(+p['id']).then(function (re) {
                re.content.forEach(function (rs) {
                    _this.lipsumService.getText().then(function (rte) {
                        rs.text = '<p>' + rte.join('</p><p>') + '</p>';
                    });
                    if (!_this.responses[rs.position])
                        _this.responses[rs.position] = [];
                    _this.responses[rs.position].push(rs);
                });
            });
        });
    };
    ArticleComponent.prototype.toggleSection = function (section) {
        if (this.expanded[section] === true) {
            this.expanded[section] = false;
        }
        else {
            this.expanded[section] = true;
        }
    };
    ArticleComponent = __decorate([
        Component({
            selector: 'ld-article',
            templateUrl: '../../templates/article.component.html'
        }), 
        __metadata('design:paramtypes', [Router, ActivatedRoute, ArticleService, LipsumService])
    ], ArticleComponent);
    return ArticleComponent;
}());
//# sourceMappingURL=article.component.js.map