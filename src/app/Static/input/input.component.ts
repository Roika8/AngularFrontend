import { Component, EventEmitter, Input, OnInit, Output, Type } from '@angular/core';

@Component({
  selector: 'inputC',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input('hint') hint: string | undefined;
  @Input('error') error: string | undefined;
  @Input('placeHolder') placeHolder: string | undefined;
  @Input('label') label: string | undefined;
  @Input('required') isRequired: boolean | undefined;
  @Input('type') type: string | undefined;
  textValue: any;
  @Output('change') change = new EventEmitter;

  onTextChanged(textValue:string){
    console.log(`From the input component text ${textValue}`);
    this.change.emit(textValue);
  }
}
