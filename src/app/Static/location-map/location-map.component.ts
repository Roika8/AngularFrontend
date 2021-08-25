import { Component, EventEmitter, Input, NgZone, OnInit, Output } from '@angular/core';

@Component({
  selector: 'location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.css']
})
export class LocationMapComponent {
  @Input('lat') lat: number;
  @Input('lng') lng: number;
  @Input('viewOnly') viewOnly?: boolean;
  @Output('chosenLat') chosenLat = new EventEmitter();
  @Output('chosenLng') chosenLng = new EventEmitter();
  constructor(private zone: NgZone) {
    this.lat =31.908874897787282;
    this.lng = 35.01661419868469;
    if (this.viewOnly) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  mapReadyHandler(event: any) {
    if (!this.viewOnly) {
      event.addListener('click', (e: google.maps.MouseEvent) => {
        this.zone.run(() => {
          this.chosenLat.emit(e.latLng.lat());
          this.chosenLng.emit(e.latLng.lng());
          this.lat = e.latLng.lat();
          this.lng = e.latLng.lng();
        })
      })
      console.log(event);
    }
  }
}
