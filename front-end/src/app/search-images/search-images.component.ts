import { Component } from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
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

  async search(event: any) {
    this.keyword = event.target.value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      const res =  await this.flickrService.search_keyword(this.keyword);
      this.images = res;
    }

  }
}
