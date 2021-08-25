import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Image } from 'src/app/Model/Image';
import { EditImageDialogComponent } from '../edit-image-dialog/edit-image-dialog.component';
import { MapDialogComponent } from '../map-dialog/map-dialog.component';

@Component({
  selector: 'cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.css']
})
export class CardsViewComponent {
  @Input('images') images: Image[];
  //Location
  lat: number = 31.515551;
  lng: number = 31.516565;
  gridColumns = 3;

  constructor(public dialog: MatDialog) {
    this.images = new Array();
  }
  onMapOpen(imageLocation: any) {
    console.log(imageLocation);

    this.dialog.open(MapDialogComponent, {
      width: '500px',
      data: { lat: imageLocation[0], lng: imageLocation[1], viewOnly: true }
    })
  }
  editImage(image: any) {
    this.dialog.open(EditImageDialogComponent, {
      width:'30%',
      height:'61%',
      data:image
    })
    console.log(image);

    console.log('Clicked from card ');
  }
}
