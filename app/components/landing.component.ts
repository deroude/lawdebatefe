import { LipsumService } from './../services/lipsum.service';
import { LawArticleSummary } from './../domain/articleSummary';
import { LawArticle } from './../domain/article';
import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ld-landing',
    templateUrl: '../../templates/landing.component.html'
})
export class LandingComponent implements OnInit {

    articles: LawArticleSummary[];
    search: string;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private articleService: ArticleService,
        private lipsumService: LipsumService
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(p => {
            this.search = p['search'];
            this.loadArticles();
        });
    }

    loadArticles(): void {
        this.articleService.geArticles(this.search).then(re => {
            this.articles = re.content;
            this.articles.forEach(a => {
                this.lipsumService.getText().then(rte => {
                    a.currentVersion.text = '<p>' + rte.join('</p><p>') + '</p>';
                })
            });
        });
    }
}