import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Image } from 'src/app/Model/Image';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = 'http://localhost:3000';
  publicFavoriteImages: Image[];
  publicImages: Image[];



  constructor(private http: HttpClient) {
    this.publicFavoriteImages = new Array();
    this.publicImages = new Array();
  }
  async AddImage (imageProp: any) {
    try {
      let image = new Image(
        imageProp.imageTitle,
        imageProp.PrivateCheck,
        imageProp.FavoriteCheck,
        imageProp.imageUrl,
        imageProp.tagCategory,
        imageProp.description,
        imageProp.location,
      );
      console.log(image);
      this.publicFavoriteImages.push(image);
      this.http.post('http://localhost:3000/image/add-image', image).subscribe( res => {
         console.log(JSON.parse(JSON.stringify(res)));
      })
      return true;
    }
    catch (e) {
      console.log('einr');

      return false;
    }




  }
  private getImagesFromServer = (isPrivate: boolean, isFavorite?: boolean): Promise<Image[]> => {
    return new Promise(async (res, rej) => {
      let images = [];
      if (isPrivate && isFavorite) {
        images = await this.http.get<Image[]>('http://localhost:3000/image/favorite-private').toPromise();
        res(images);
      }
      if (!isPrivate && isFavorite) {
        images = await this.http.get<Image[]>('http://localhost:3000/image/favorite-public').toPromise();
        res(images);
      }
      if (isPrivate && isFavorite == undefined) {
        images = await this.http.get<Image[]>('http://localhost:3000/image/private').toPromise();
        res(images);
      }
      if (!isPrivate && isFavorite == undefined) {
        images = await this.http.get<Image[]>('http://localhost:3000/image/public').toPromise();
        res(images);
      }
      else {
        rej('Somting went wrong loading all the images')
      }
    })
  }
  async getAllPublicImages() {
    try {
      this.publicImages = [];
      const images = await this.getImagesFromServer(false, undefined);
      Object.entries(images).forEach((entry => {
        const [key, value] = entry;
        value.imageUrl = 'data:image/jpeg;base64,' + value.imageUrl;
        this.publicImages.push(value);

      }))
      return this.publicImages;
    }

    catch (e) {
      throw new Error(e)
    }
  }
  async getAllPrivateImages() {
    try {
      this.publicFavoriteImages = [];
      const images = await this.getImagesFromServer(true, undefined);
      Object.entries(images).forEach((entry => {
        const [key, value] = entry;
        value.imageUrl = 'data:image/jpeg;base64,' + value.imageUrl;
        this.publicFavoriteImages.push(value);

      }))
      return this.publicFavoriteImages;
    }

    catch (e) {
      throw new Error(e)
    }
  }
  async getAllPrivateFavoriteImages() {
    try {
      this.publicFavoriteImages = [];
      const images = await this.getImagesFromServer(true, true);
      Object.entries(images).forEach((entry => {
        const [key, value] = entry;
        value.imageUrl = 'data:image/jpeg;base64,' + value.imageUrl;
        this.publicFavoriteImages.push(value);

      }))
      return this.publicFavoriteImages;
    }
    catch (e) {
      return e;
    }
  }
  async getAllPublicFavoriteImages() {
    try {
      this.publicFavoriteImages = [];
      const images = await this.getImagesFromServer(false, true);
      Object.entries(images).forEach((entry => {
        const [key, value] = entry;
        value.imageUrl = 'data:image/jpeg;base64,' + value.imageUrl;
        this.publicFavoriteImages.push(value);

      }))
      return this.publicFavoriteImages;
    }
    catch (e) {
      return e;
    }
  }
  editImage(imageProp: any) {
    console.log(imageProp);

    let image = new Image(
      imageProp.imageTitle,
      imageProp.PrivateCheck,
      imageProp.FavoriteCheck,
      //Image URL doesnt need to be here
      imageProp.imageUrl,
      imageProp.tagCategory,
      imageProp.description,
      imageProp.location,
      imageProp.imageID
    );

    this.http.put(`${this.url}/image/edit-image`, image).subscribe(res => {
      console.log(JSON.parse(JSON.stringify(res)));

    })
  }
}

