import { Injectable } from "@angular/core";

import { Balance } from "./balance.model";
import { ListStorage } from "./base.storage";
import { IdGenerator } from "./id.generator";

const STORAGE_KEY = 'com.jdc.balance.balance'

@Injectable({providedIn: 'root'})
export class BalanceResource extends ListStorage<Balance> {

  constructor(private ids: IdGenerator) {
    super({}, STORAGE_KEY);
  }

  get list(): Balance[] {
    return Object.values(this.resource).map(a => ({...a}));
  }


  findById(id: number): Balance {
    return Object.values(this.resource).find(balance => balance.id === id);
  }

  saveData(balance: Balance) {
    let balanceId = balance.id;
    if(balanceId) {
      // Edit
      this.resource[balanceId] = {...balance};
    }
    else {
      // Add New
      balanceId = this.ids.next('balance');
      const {id, ...rest} = balance;
      this.resource[balanceId] = {...rest, id: balanceId};
    }
    return balanceId;
  }
}
