import { Component, OnInit } from '@angular/core';
import { StringStorage } from '../services/stringStorage';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styles: [
  ]
})
export class ListViewComponent {

  constructor(private storage: StringStorage) { }

  get list(): string[] {
    return this.storage.list
  }
}
