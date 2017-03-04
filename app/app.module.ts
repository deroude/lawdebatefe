import { ArticleService } from './services/article.service';
import { LipsumService } from './services/lipsum.service';
import { FacebookService } from './services/facebook.service';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';

import { NotFoundComponent } from './components/not_found.component';
import { LandingComponent } from './components/landing.component';

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent,
    LandingComponent,
    NotFoundComponent
  ],
  providers: [
    AuthService,
    LipsumService,
    ArticleService,
    FacebookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
