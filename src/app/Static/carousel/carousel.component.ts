import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Image } from 'src/app/Model/Image';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent  {
  @Input('images') images: Image[];

  constructor(config:NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    this.images = new Array();
  }
}
