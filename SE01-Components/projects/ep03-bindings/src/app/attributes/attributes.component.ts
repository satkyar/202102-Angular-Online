import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html'
})
export class AttributesComponent {
  currentValue = '0'

  // Mulit Class Binding
  multiClass = "bg-info"

  // Single Class Binding
  singleClass = true

  textSize = 20

  changeTextSize(size: any){
    this.textSize = size as number
  }
}
