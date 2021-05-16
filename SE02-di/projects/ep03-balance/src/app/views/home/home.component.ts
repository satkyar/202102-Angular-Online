import { Component, OnInit } from '@angular/core';

import { BalanceVO } from '../../models/balance.model';
import { BalanceService } from '../../models/balance.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  list: readonly BalanceVO[] = [];

  constructor(private service: BalanceService) { }

  searchData(form: any) {
    this.list = this.service.searchData(form);
  }



}
