import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Category } from '../../models/balance.model';
import { CategoryService } from '../../models/category.service';

declare var $: any

@Component({
  templateUrl: './categories.component.html',
  styles: [
  ]
})
export class CategoriesComponent {
  tData: Category = this.getNewObject();
  catList: readonly Category[] = [];
  form: FormGroup

  constructor(builder: FormBuilder, private catService: CategoryService) {
    this.form = builder.group({
      type: '',
      name: '',
      deleted: ''
    })
  }

  /**
   * Search Data with
   * Category Service
   */
  searchData() {
    this.catList = this.catService.searchData(this.form.value);
  }

  /**
   * with param Update
   * @param category
   * without param Create
   */
  addData(category?: Category) {
    this.tData = category ? category : this.getNewObject();
    $('#edit-dialog').modal('show');
  }

  /**
   * Save in service
   * @param category
   */
  saveData(data: Category) {
    this.catService.saveData(data);
    this.tData = this.getNewObject();
    this.searchData();
  }

  switchDeleteStatus(id: number) {
    this.catService.switchDeleteStatus(id);
    this.searchData();
  }

  private getNewObject(): Category {
    return {
      id: 0,
      type: '',
      name: '',
      deleted: false
    }
  }
}
