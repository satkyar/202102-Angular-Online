import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Category, CategorySearch, Type } from '../../models/balance.model';
import { BalanceService } from '../../models/balance.service';
import { CategoryService } from '../../models/category.service';

const MIN_AMOUNT = 500;

@Component({
  templateUrl: './balance-edit.component.html',
  styles: [
  ]
})
export class BalanceEditComponent {

  type = ""
  catList: readonly Category[] = [];

  form: FormGroup

  constructor(
    private builder: FormBuilder,
    route: ActivatedRoute,
    private router: Router,
    private balService: BalanceService,
    private catService: CategoryService
    ) {
    //Build Form
    this.form = builder.group({
      // Balance Form
      balance: builder.group({
        id: 0,
        useDate: ['', Validators.required],
        category: ['', [Validators.required]],
        total: [0, Validators.min(MIN_AMOUNT)],
        employee: ['', [Validators.required]]
      }),
      // Balance Details
      details: builder.array([])
    })

    // Calculate Total
    this.detailsFormArray.valueChanges.subscribe(data => {
      this.form.get('balance')?.patchValue({total: this.detailsFormArray.controls.map(a => a.value.amount || 0).reduce((a, b) => a + b)});
    })

    // Get Params
    route.params.subscribe(params => {
      this.type = params['type'];
      const id = Number(params['id']);
      const catSearch: CategorySearch = { type: this.type as Type};

      //Edit
      if(id) {
        // Get Balance Data & Detail Data
        const dto = this.balService.findById(id);
          if(dto) {
            //Set Balance Data to edit
            this.form.patchValue({ balance: dto.balance });

            //set Detail Data to edit
            dto.details.forEach(d => {
              const control = this.getDetailsObject();
              control.patchValue(d);
              this.detailsFormArray.push(control);
            });
          }
        }
        else {
          catSearch.deleted = false;
          this.addDetails();
        }
        this.catList = this.catService.searchData(catSearch);
    })
  }

  saveData() {
    // Save Form Data
    const id: number = this.balService.saveData(this.form.value)

    // Navigate to Detail View
    this.router.navigate(["/balance", this.type, id, 'details']);
  }

  addDetails() {
    this.detailsFormArray.push(this.getDetailsObject());
  }

  removeDetails(index: number) {
    this.detailsFormArray.removeAt(index);
    if(this.detailsFormArray.length==0){
      this.addDetails();
    }
  }

  get detailsFormArray(): FormArray {
    return this.form.get('details') as FormArray;
  }

  private getDetailsObject(): FormGroup {
    return this.builder.group({
      id: 0,
      balance: 0,
      item: ['', Validators.required],
      unit: [0, Validators.min(1)],
      amount: [0, Validators.min(MIN_AMOUNT)],
      remark: ''
    });
  }
}
