import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'private-check',
  templateUrl: './private-check.component.html',
  styleUrls: ['./private-check.component.css']
})
export class PrivateCheckComponent {
  @Input('isChecked') isChecked: boolean | undefined;
  @Input('disable') disable?: boolean = false;
  @Output('change') change = new EventEmitter();
  onClick() {
    if (!this.disable)
      this.isChecked = !this.isChecked;
    this.change.emit(this.isChecked);
  }
}
