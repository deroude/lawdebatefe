import { LipsumService } from './../services/lipsum.service';
import { LawArticleSummary } from './../domain/articleSummary';
import { Response } from './../domain/response';
import { LawArticle } from './../domain/article';
import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ld-article',
    templateUrl: '../../templates/article.component.html'
})
export class ArticleComponent implements OnInit {

    authError: boolean = false;
    expanded: { [key: string]: number } = {};
    article: LawArticleSummary = new LawArticleSummary();
    responses: { [key: string]: Response[] } = {};

    constructor(private router: Router,
        private route: ActivatedRoute,
        private articleService: ArticleService,
        private lipsumService: LipsumService
    ) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(p => {
            this.articleService.getArticle(+p['id']).then(re => {
                this.article = re;
                this.lipsumService.getText().then(rte => {
                    this.article.currentVersion.text = '<p>' + rte.join('</p><p>') + '</p>';
                });
            });
            this.articleService.getResponses(+p['id']).then(re => {
                re.content.forEach(rs => {
                    this.lipsumService.getText().then(rte => {
                        rs.text = '<p>' + rte.join('</p><p>') + '</p>';
                    });
                    if (!this.responses[rs.position]) this.responses[rs.position] = [];
                    this.responses[rs.position].push(rs);
                });
            });
        });
    }

    toggleSection(section: string,id:number): void {
        if (this.expanded[section] === id) {
            this.expanded[section] = null;
        } else {
            this.expanded[section] = id;
        }
    }
}