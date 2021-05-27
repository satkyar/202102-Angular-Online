import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './resolve-from.component.html',
  styles: [
  ]
})
export class ResolveFromComponent {

  list:any[] = [];

  constructor(route: ActivatedRoute) {
    route.data.subscribe(data => this.list = data.list);
   }


}
