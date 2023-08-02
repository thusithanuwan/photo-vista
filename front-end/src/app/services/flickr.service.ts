import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FlickrService {
  prevKeyword: string = "";
  currPage = 1;

  constructor(private http: HttpClient) { }

  search_keyword(keyword : string){
    if (this.prevKeyword === keyword){
      this.currPage++;
    } else {
      this.currPage = 1;
    }
    this.prevKeyword = keyword;

  }
}
