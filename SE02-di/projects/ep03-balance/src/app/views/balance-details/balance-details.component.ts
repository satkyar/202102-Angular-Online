import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Balance, BalanceDetails, BalanceWithDetails } from '../../models/balance.model';
import { BalanceService } from '../../models/balance.service';

@Component({
  selector: 'app-balance-details',
  templateUrl: './balance-details.component.html',
  styles: [
  ]
})
export class BalanceDetailsComponent  {

  private balanceVO?: BalanceWithDetails | null = null;

  constructor(route: ActivatedRoute, balService: BalanceService) {
    route.paramMap.subscribe(map => {
      const id = Number(map.get('id'));
      if(id) {
        this.balanceVO = balService.findViewById(id);
      }
  })
  }

  get balance(): Balance | null {
    return this.balanceVO?.balance || null;
  }

  get details(): BalanceDetails[] {
    return this.balanceVO.details || [];
  }

}
