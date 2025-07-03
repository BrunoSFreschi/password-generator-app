import { Component, EventEmitter, Input, Output } from '@angular/core';

interface ButtonConfig{
  label : string;
  className: string;
}

@Component({
  selector: 'app-button-group',
  imports: [],
  templateUrl: './button-group.html',
  styleUrl: './button-group.css'
})
export class ButtonGroup {
  @Input() buttons: ButtonConfig[] = [];
  @Output() buttonClick = new EventEmitter<string>();

  onButtonClick(label: string): void{
    this.buttonClick.emit(label);
  }
}
