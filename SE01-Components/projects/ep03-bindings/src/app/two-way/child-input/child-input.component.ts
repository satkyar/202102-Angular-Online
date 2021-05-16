import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styles: [
  ]
})
export class ChildInputComponent {

  @Input()
  value?: string

  @Output()
  valueChange = new EventEmitter
}
