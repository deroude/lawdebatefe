import { ArticleVersion } from './version';
import { LawArticle } from './article';
export class LawArticleSummary{
    article:LawArticle=new LawArticle();
    currentVersion:ArticleVersion=new ArticleVersion();
    yayVotes:number;
    nayVotes:number;
    abstainVotes:number;
}