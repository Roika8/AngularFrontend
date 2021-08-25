import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.css']
})
export class MapDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MapDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { lat: number, lng: number ,viewOnly:boolean}) { }

  ngOnInit(): void { }
  handleLng(lng: number) {
    console.log(lng);
    this.data.lng = lng;
  }
  handleLat(lat: number): void {
    console.log(lat);
    this.data.lat = lat;
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
