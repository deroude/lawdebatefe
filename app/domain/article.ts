import { User } from './user';
import { ArticleVersion } from './version';
import { Response } from './response';

export class LawArticle {
    id: number;
    proposedBy: string;
    agency: string;
    versions: ArticleVersion[];
    responses: Response[];
    author: User;
}