import { Injectable } from "@angular/core";

import { BalanceDetails } from "./balance.model";
import { ListStorage } from "./base.storage";
import { IdGenerator } from "./id.generator";

const STORAGE_KEY = 'com.jdc.balance.details'

@Injectable({providedIn: 'root'})
export class DetailsResource extends ListStorage< BalanceDetails >  {

  constructor(private ids: IdGenerator) {
    super({}, STORAGE_KEY)
  }

  findById(id: number): BalanceDetails[] {
    return Object.values(this.resource).filter(details => details.balance === id)
  }

  saveData(balanceId: number, details: BalanceDetails[]) {
    // Delete Old Data
     delete this.resource[balanceId];
    // Add New Data
    for(let {id, balance, ...rest} of details) {
      if(id === 0) {
        id = this.ids.next('details');
      }
      this.resource[id] = {id: id, ...rest, balance: balanceId};
    }
  }



}
