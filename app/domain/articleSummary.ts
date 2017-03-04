import { ArticleVersion } from './version';
import { LawArticle } from './article';
export class LawArticleSummary{
    article:LawArticle;
    currentVersion:ArticleVersion;
    yayVotes:number;
    nayVotes:number;
    abstainVotes:number;
}