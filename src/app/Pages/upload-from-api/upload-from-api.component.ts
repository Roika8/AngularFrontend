import { Component, OnInit } from '@angular/core';
import { ImageSetupService } from 'src/app/Services/Image-setup/image-setup.service';
import { PexelPhotoSearchService } from 'src/app/Services/Pexel-photo-search/pexel-photo-search.service';

@Component({
  selector: 'upload-from-api',
  templateUrl: './upload-from-api.component.html',
  styleUrls: ['./upload-from-api.component.css']
})
export class UploadFromApiComponent {
  isLoading: boolean;
  notFoundMsg?: string;
  searchData: string = "";
  perPage?: number;
  photos: any[] = [];
  constructor(private pexelPhotoSearchService: PexelPhotoSearchService, private imageSetup: ImageSetupService) {
    this.isLoading = false;
    this.pexelPhotoSearchService.getdata(this.searchData, this.perPage);
  }

  search() {
    this.notFoundMsg = undefined;
    this.isLoading = true;
    this.pexelPhotoSearchService.getdata(this.searchData, this.perPage).subscribe((response: any) => {
      this.photos = response.photos;
      if (this.photos) {
        this.isLoading = false;

      }
    }, (error: any) => {
      this.notFoundMsg = "Not found any images"
      console.log(error);
      this.isLoading = false;

    })
  }
  submitImage = async (event: Event) => {
    try {
      const imageUrl = (event.target as HTMLInputElement).value;
      this.toDataURL(imageUrl, (base64Image: any) => {
        console.log(base64Image);

        this.imageSetup.nextMessage(base64Image);
      });
    }
    catch (e) {
      console.error(e);
    }
  }
  toDataURL(url: string, callback: any) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }
}
