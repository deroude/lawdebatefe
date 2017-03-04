import { ArticleVersion } from './version';
import { LawArticle } from './article';
export var LawArticleSummary = (function () {
    function LawArticleSummary() {
        this.article = new LawArticle();
        this.currentVersion = new ArticleVersion();
    }
    return LawArticleSummary;
}());
//# sourceMappingURL=articleSummary.js.map