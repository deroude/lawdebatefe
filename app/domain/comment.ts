import { User } from './user';
export class Comment{
    id:number;
    author:User;
    publishDate:Date;
    text:string;
}