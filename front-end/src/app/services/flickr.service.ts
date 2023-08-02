import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs";
import * as stream from "stream";


export interface FlickrPhoto {
  farm: string;
  id: string;
  secret: string;
  server: string;
  title: string;
}

export interface FlickrOutput {
  photos: {
    photo: FlickrPhoto[];
  };
}

@Injectable({
  providedIn: 'root'
})

export class FlickrService {
  prevKeyword: string = "";
  currPage = 1;

  constructor(private http: HttpClient) {
  }

  search_keyword(keyword : string) {
    if (this.prevKeyword === keyword) {
      this.currPage++;
    } else {
      this.currPage = 1;
    }
    this.prevKeyword = keyword;
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
    const params = `api_key=${environment.flickr.key}&text=${keyword}&format=json&nojsoncallback=1&per_page=12&page=${this.currPage}`

    return this.http.get<FlickrOutput>(url + params).pipe(map((res: FlickrOutput) => {
      const urlArr : {url : string ; title : string} [] = [];
      res.photos.photo.forEach((ph: FlickrPhoto) => {
        const photoObj = {
          url: `https://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}`,
          title: ph.title
        };
        urlArr.push(photoObj);
      });
      return urlArr;
    }));
  }


}

