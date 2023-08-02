import { Component } from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styleUrls: ['./search-images.component.scss']
})
export class SearchImagesComponent {

  protected readonly faSearch = faSearch;
}
