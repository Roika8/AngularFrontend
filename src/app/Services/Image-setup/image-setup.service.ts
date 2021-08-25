import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageSetupService {
  private message = new BehaviorSubject('');
  sharedMessage = this.message.asObservable();

  url: string | ArrayBuffer | null | undefined;
  constructor() { }
  nextMessage(url: string) {
    // sessionStorage.clear();
    // sessionStorage.setItem('imageUrl', url);
    this.message.next(url);
  }
  loadMessage() {
    const imageUrlFromSession = sessionStorage.getItem('imageUrl');
    return imageUrlFromSession == null ? undefined : imageUrlFromSession;
  }

}
