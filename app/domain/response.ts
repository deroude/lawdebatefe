import { ConfidenceVote } from './confidence_vote';
import { User } from './user';
export class Response{
    id:number;
    text:string;
    author:User;
    publishDate:Date;
    position:string;
    votes:ConfidenceVote[];
    voteCount:number;
}