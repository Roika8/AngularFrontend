import { Component, EventEmitter, Output } from '@angular/core';
import { ImageSetupService } from 'src/app/Services/Image-setup/image-setup.service';

@Component({
  selector: 'upload-from-local',
  templateUrl: './upload-from-local.component.html',
  styleUrls: ['./upload-from-local.component.css']
})
export class UploadFromLocalComponent {
  file: File | undefined;
  imageUrl: string | ArrayBuffer | null | undefined;
  validImage: boolean = false;
  message: string | undefined;
  @Output('click') click = new EventEmitter();
  constructor(private imageSetupService: ImageSetupService) { }

  onFileUploadChange(event: any) {
    //Get the file from the input
    this.file = event.target.files[0];

    //Get if the file is image
    if (this.file?.type.match(/image\/*/) == null) {
      this.message = 'Invalid type of file';
      this.validImage = false;
      this.imageUrl = null;
    } else {
      this.message = 'Great';
      this.validImage = true;

      //Read the image and get the URl from it.
      let reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      }
    }
  }
  SetImageClick() {
    const urlString = String(this.imageUrl);
    this.imageSetupService.nextMessage(urlString);
  }
}
