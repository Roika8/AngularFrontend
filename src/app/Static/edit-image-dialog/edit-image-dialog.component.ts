import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Image } from 'src/app/Model/Image';
import { ImageService } from 'src/app/Services/images/image.service';
import { MapDialogComponent } from '../map-dialog/map-dialog.component';

@Component({
  selector: 'edit-image-dialog',
  templateUrl: './edit-image-dialog.component.html',
  styleUrls: ['./edit-image-dialog.component.css']
})
export class EditImageDialogComponent implements OnInit {
  categories: string[];
  imageProp: any;
  constructor(private imageService: ImageService, private router: Router, public dialog: MatDialog, public dialogRef: MatDialogRef<EditImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { image: Image[] }) {
    this.imageProp = JSON.parse(JSON.stringify(this.data));
    console.log(this.imageProp);

    this.categories = this.imageProp.category;
  }

  ngOnInit(): void {
  }

  onFavoriteChange(isChecked: any) {
    this.imageProp.isFavorite = isChecked;
  }
  onPrivateChange(isChecked: any) {
    this.imageProp.isPrivate = isChecked;

  }
  noClick() {
    this.dialogRef.close();
  }
  onMapOpen() {
    const dialogRef = this.dialog.open(MapDialogComponent, {
      width: '500px',
      data: { lat: this.imageProp.location[0], lng: this.imageProp.location[1] }
    })
    dialogRef.afterClosed().subscribe(result => {
      this.imageProp.location[0] = result.lat;
      this.imageProp.location[1] = result.lng;
      console.log(result);
    });
  }
  selectedCategories(event: any) {
    this.categories = event;
    console.log(event);
  }
  //////////
  submit(f: any) {
    this.imageService.editImage({
      imageTitle: f.value.title,
      PrivateCheck: this.imageProp.isPrivate,
      FavoriteCheck: this.imageProp.isFavorite,
      tagCategory: this.categories,
      description: f.value.description,
      location: [this.imageProp.location[0], this.imageProp.location[1]],
      imageUrl: "",
      imageID: this.imageProp.imageID

    })
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/']);


  }

}
