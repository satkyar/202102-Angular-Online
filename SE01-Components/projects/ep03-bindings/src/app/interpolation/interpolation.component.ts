import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styles: [
  ]
})
export class InterpolationComponent {
  model = {
    title: "Text Interpolation",
    image: "angular-logo.jpg"
  }

  item = "Component Item"
  header = "Component Header"

  data: Data  =  {id: 100, name: "Hello Angular"}

  times(a:number, b:number): number{
    return a * b
  }

  array = ["Javascript", "Typescript", "Angular"]
}

export interface Data{
  id: number,
  name: string
}
