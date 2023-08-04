import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchImagesComponent } from './search-images/search-images.component';
import {HttpClientModule} from "@angular/common/http";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { GalleryComponent } from './gallery/gallery.component';
import {RouterLink, RouterModule, Routes} from "@angular/router";
import {InfiniteScrollModule} from "ngx-infinite-scroll";


const routes:Routes =[
  {
    path :  '',
    component: GalleryComponent
  },
  {
    path:'search',
    component:SearchImagesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchImagesComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    InfiniteScrollModule,
    RouterModule,
    RouterModule.forRoot(routes),
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
