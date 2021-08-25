import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { ImageSetupService } from 'src/app/Services/Image-setup/image-setup.service';
@Component({
  selector: 'upload-from-webcam',
  templateUrl: './upload-from-webcam.component.html',
  styleUrls: ['./upload-from-webcam.component.css']
})
export class UploadFromWebcamComponent implements OnInit {

  public webcamImage: WebcamImage | undefined;
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
    this.trigger.next();
  }
  handleImage(webcamImage: WebcamImage): void {
    console.info('Saved webcam image', webcamImage);
    this.webcamImage = webcamImage;
    console.log(webcamImage);

  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  constructor(private imageSetupService: ImageSetupService) { }

  ngOnInit(): void {
  }
  SubmitImage() {
    const imageUrl=String(this.webcamImage?.imageAsDataUrl);
    console.log(imageUrl);

    this.imageSetupService.nextMessage(imageUrl);

  }

}
