import { Component } from '@angular/core';

import { StringStorage } from '../services/stringStorage';

@Component({
  templateUrl: './provide-class.component.html',
  styles: [
  ]
})
export class ProvideClassComponent {

  constructor(private storage: StringStorage) { }

  addName(name: string) {
    this.storage.add(name);
  }

  get list(): string[] {
    return this.storage.list
  }

}
