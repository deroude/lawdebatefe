import { LawArticleSummary } from './../domain/articleSummary';
import { Page } from './../domain/page';
import { ConfidenceVote } from './../domain/confidence_vote';
import { LawArticle } from './../domain/article';
import { Response } from './../domain/response';
import { BasicService } from './basic.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService extends BasicService {

    public geArticles(): Promise<Page<LawArticleSummary>> {
        return this.get("/article");
    }

    public getArticle(id:number):Promise<LawArticleSummary>{
        return this.get("/article/"+id);
    }

    public getResponses(articleId:number):Promise<Page<Response>>{
        return this.get("/article/"+articleId+"/responses")
    }

    public getComments(articleId:number,responseId:number):Promise<Page<Comment>>{
        return this.get("/article/"+articleId+"/"+responseId+"/comments");
    }

    public getVotes(articleId:number,responseId:number):Promise<ConfidenceVote[]>{
        return this.get("/article/"+articleId+"/"+responseId+"/votes");
    }

}