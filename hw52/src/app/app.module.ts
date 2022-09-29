import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {Task1Component} from './task1/task1.component';
import {RouterLinkWithHref, RouterModule, RouterOutlet, Routes} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import {FormsModule} from "@angular/forms";
import { Task2Component } from './task2/task2.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpService} from "./services/http.service";
import {HttpPostService} from "./services/http-post.service";
import { Task3Component } from './task3/task3.component';
import {HttpGetFilmService} from "./services/searh-film.service";


const routers: Routes = [
  {path: '', component: HomePageComponent},
  {path: "task1", component: Task1Component},
  {path: 'task2', component: Task2Component},
  {path: 'task3', component: Task3Component}
]

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    HomePageComponent,
    Task3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterLinkWithHref,
    RouterOutlet,
    RouterModule.forRoot(routers),
    FormsModule
  ],
  providers: [
    HttpService,
    HttpPostService,
    HttpGetFilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
