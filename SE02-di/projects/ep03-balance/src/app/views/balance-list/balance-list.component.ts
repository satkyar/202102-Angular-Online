import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BalanceDetails, BalanceWithDetails } from '../../models/balance.model';
import { BalanceService } from '../../models/balance.service';

@Component({
  templateUrl: './balance-list.component.html',
  styles: [
  ]
})
export class BalanceListComponent {

  type = "";

  list: readonly BalanceDetails[] = [];

  constructor(route: ActivatedRoute, private service: BalanceService) {
    route.params.subscribe(params => {
      this.type = params['type'];
      this.list = [];
    })
  }

  search(form: any) {
    this.list = this.service.searchDetails(form);
  }

}
