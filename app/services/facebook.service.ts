import { AppSettings } from './../app.settings';
import { Injectable } from '@angular/core';
declare const FB: any;
@Injectable()
export class FacebookService {

    constructor() {
        FB.init({
            appId: AppSettings.FB_APP_ID,
            cookie: false,  // enable cookies to allow the server to access
            // the session
            xfbml: true,  // parse social plugins on this page
            version: AppSettings.FB_VERSION // use graph api version 2.5
        });
    }

    login(): Promise<Object> {
        return new Promise<Object>((resolve, reject) => {
            FB.login((response) => resolve(response));
        });
    }
}