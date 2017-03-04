import { User } from './user';
import { Version } from './version';
import { Response } from './response';

export class LawArticle {
    id: number;
    proposedBy: string;
    agency: string;
    versions: Version[];
    responses: Response[];
    author: User;
}