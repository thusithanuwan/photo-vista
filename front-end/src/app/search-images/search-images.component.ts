import { Component } from '@angular/core';
import {faDownload, faHome, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FlickrService} from "../services/flickr.service";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styleUrls: ['./search-images.component.scss']
})
export class SearchImagesComponent {

  protected readonly faSearch = faSearch;
  images: any = [];
  keyword: string = "";

  constructor(private flickrService: FlickrService) {
  }

search(event: any) {
    this.keyword = event.value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword)
        .toPromise()
        .then(res => {
          this.images = res;
        });
    }

  }

  onScroll() {
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword)
        .toPromise()
        .then(res => {
          this.images = this.images.concat(res);
        });
    }
  }

  protected readonly faDownload = faDownload;
  protected readonly faHome = faHome;
}
