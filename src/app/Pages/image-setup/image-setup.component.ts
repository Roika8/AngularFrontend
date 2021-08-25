import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ImageSetupService } from 'src/app/Services/Image-setup/image-setup.service';
import { ImageService } from 'src/app/Services/images/image.service';

import { CategoryService } from 'src/app/Services/Categories/category.service';
import { MapDialogComponent } from 'src/app/Static/map-dialog/map-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-image-setup',
  templateUrl: './image-setup.component.html',
  styleUrls: ['./image-setup.component.css']
})
export class ImageSetupComponent implements OnInit {
  isLoading: boolean;

  categories: string[];

  imageUrl?: string;

  //Location
  lat: number = 31.515551;
  lng: number = 31.516565;
  //Form values
  // imageTitle: string;
  isPrivate: boolean;
  isFavorite: boolean;

  constructor(private imageSetupService: ImageSetupService, private ImageService: ImageService, private categoryService: CategoryService, public dialog: MatDialog, private router: Router) {
    this.isPrivate = false;
    this.isFavorite = false;
    this.categories = new Array();
    this.isLoading = true;

    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    });
  }

  ngOnInit(): void {
    this.getImageUrl();

  }
  async getImageUrl() {
    this.imageSetupService.sharedMessage.subscribe(url => {
      this.imageUrl = url;
      if (this.imageUrl)
        this.isLoading = false;
    })


  }

  //Favorite-Private check
  onFavoriteChange(isChecked: boolean) {
    this.isFavorite = isChecked;
    console.log(`Is favorite ${this.isFavorite}`);
  }
  onPrivateChange(isChecked: boolean) {
    this.isPrivate = isChecked;
    console.log(`Is Private ${this.isPrivate}`);
  }

  onMapOpen() {
    const dialogRef = this.dialog.open(MapDialogComponent, {
      width: '500px',
      data: { lat: this.lat, lng: this.lng }
    })
    dialogRef.afterClosed().subscribe(result => {
      this.lat = result.lat;
      this.lng = result.lng;
      console.log(result);
    });
  }
  //////////
  selectedCategories(event: any) {
    this.categories = event;
  }

  async Submit(f: any) {
    const res = await this.ImageService.AddImage({
      imageTitle: f.value.title,
      PrivateCheck: this.isPrivate,
      FavoriteCheck: this.isFavorite,
      tagCategory: this.categories,
      description: f.value.description,
      location: [this.lat, this.lng],
      imageUrl: this.imageUrl
    })
    if (res) {
      this.router.navigate(['/'])
    }
    else {
      alert('Somthing went wrong')
    }
  }

}


