// import {RoutingModule} from '../routing/routing.module'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { TimeCounterPipe } from './time-count.pipe';
import { GithubDetailsComponent } from './github-details/github-details.component';
import { HighlightDirective } from './highlight.directive';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes:Routes=[
  {path:"github",component:GithubComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/github",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    TimeCounterPipe,
    GithubDetailsComponent,
    HighlightDirective,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    // RoutingModule,
    // NgProgressModule.forRoot(),
    // NgProgressHttpClientModule,
    // RouterModule.forRoot(routes)



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
