import { Injectable } from '@angular/core';
import {DatePipe} from '@angular/common';

@Injectable()
export class AuthService {

    private authUser: String;

    constructor() { }

    public login(username: String, password: String): boolean {
        var d:String=new DatePipe('en').transform(new Date(),'HHmm');
        if (username === 'Debate@'+d && password == 'oUG13Sux!') {
            this.authUser = 'Debate';
            return true;
        }
        return false;
    }

    public getAuthenticatedUser(): String {
        return this.authUser;
    }
}