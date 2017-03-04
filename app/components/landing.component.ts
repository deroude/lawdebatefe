import { LawArticleSummary } from './../domain/articleSummary';
import { LawArticle } from './../domain/article';
import { ArticleService } from './../services/article.service';
import { FacebookService } from './../services/facebook.service';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'gr-landing',
    templateUrl: '../../templates/landing.component.html'
})
export class LandingComponent implements OnInit {

    loginForm: FormGroup;
    authError: boolean = false;
    articles:LawArticleSummary[];

    constructor(private router: Router,
     private route: ActivatedRoute,
        private auth: AuthService,
        private face:FacebookService,
        private articleService:ArticleService,
        private fb: FormBuilder
    ) {
        this.loginForm = fb.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    ngOnInit() { 
        this.articleService.geArticles().then(re=>this.articles=re.content);
    }

    login({value, valid}: { value: any, valid: boolean }) {
        if (this.auth.login(value.username, value.password)) {
            this.route.queryParams.subscribe(ps=>this.router.navigate([ps['destination']||'/home']));            
        } else {
            this.authError = true;
        }
    }

    loginWithFacebook(): void {
        this.face.login().then(
            (response: Object) => console.log(response),
            (error: any) => console.error(error)
        );
    }
}