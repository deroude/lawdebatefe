import { FacebookService } from './services/facebook.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'ld-app',
  templateUrl: '../templates/app.component.html',
})
export class AppComponent {
  authError: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private face: FacebookService,
    private auth: AuthService) { }

  login({ value, valid }: { value: any, valid: boolean }) {
    if (this.auth.login(value.username, value.password)) {
      this.route.queryParams.subscribe(ps => this.router.navigate([ps['destination'] || '/home']));
    } else {
      this.authError = true;
    }
  }

  loginWithFacebook(): void {
    this.face.login().then(
      (response: Object) => console.log(response),
      (error: any) => console.error(error)
    );
  }
}
