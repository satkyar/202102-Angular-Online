import { Component, Input, OnInit } from '@angular/core';

import { LifecycleAware } from '../Lifecycle';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent extends LifecycleAware {

  @Input()
  message?: string
  get comp(): string {
    return "Child"
  }




}
