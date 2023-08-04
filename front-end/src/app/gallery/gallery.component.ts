import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {faDownload, faSearch} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
    show = false;
    imageList:any = [];


  constructor(private http : HttpClient) {
    this.http.get(environment.REST_API_URL).subscribe((imageUrlList)=> {
        this.imageList = imageUrlList;
      });
  }


  preventDefault(event: DragEvent) {
    event.preventDefault();


  }

  drop(event: DragEvent) {
    event.preventDefault();
    const droppedFiles = event.dataTransfer?.files;
    if (!droppedFiles) return;
    const imageFiles = Array.from(droppedFiles)
      .filter(file => file.type.startsWith("image/"));
    if (!imageFiles.length) return;
    this.uploadImages(imageFiles);
  }

  uploadImages(imageFiles:any){
    const formData = new FormData();
    imageFiles.forEach((image : File) => {
      formData.append("images", image);
    });

    this.http.post(environment.REST_API_URL, formData).subscribe((imageUrl)=>{
      this.imageList.append(imageUrl)
      this.show = true;
    });

  }

  protected readonly faDownload = faDownload;
  protected readonly faSearch = faSearch;
}
