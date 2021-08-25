import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'favorite-check',
  templateUrl: './favorite-check.component.html',
  styleUrls: ['./favorite-check.component.css']
})
export class FavoriteCheckComponent {
  @Input('isChecked') isChecked?: boolean;
  @Input('disable') disable?: boolean = false;
  @Output('change') change = new EventEmitter();
  onClick() {
    if (this.disable==false) {
      this.isChecked = !this.isChecked;
      this.change.emit(this.isChecked)
    }
  }

}
