import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";

import { Balance, BalanceDetails, BalanceSearch, BalanceVO, BalanceWithDetails } from "./balance.model";
import { BalanceResource } from "./balance.resource";
import { CategoryService } from "./category.service";
import { DetailsResource } from "./Details.Resource";

@Injectable({providedIn: 'root'})
export class BalanceService {

  constructor(
    private datePipe: DatePipe,
    private balResource: BalanceResource,
    private detResource: DetailsResource,
    private catService: CategoryService) {}

  /**
   * Find Balance Data with Category
   * for Detail View
   * @param id Balance Id
   * @returns Balance with Details for View
   */
   findViewById(id: number): BalanceWithDetails | null {
    const dto = this.findById(id);
    const {category, ...rest} = dto.balance
    return {
      balance: {...rest, category: this.catService.findById(category)},
      details: dto.details
    };
  }
  /**
   * Find Balance Data for Edit
   * @param id Balance Id
   * @returns Balance with Details
   */
  findById(id: number): BalanceWithDetails | null {
    return {
      balance: this.balResource.findById(id),
      details: this.detResource.findById(id)
    }
  }

  /**
   * Save in Balance Resource
   * Detailed Resource
   * @param value
   * @returns BalanceId
   */
  saveData(value: BalanceWithDetails): number {
    // Save Balance
    const balanceId = this.balResource.saveData(value.balance);
    // Save Details
    this.detResource.saveData(balanceId, value.details);
    // Return Balance Id
    return balanceId;
  }

  /**
   * Search Balance Data
   * @param form
   * @returns
   */
  searchData(form: BalanceSearch): readonly BalanceVO[] {
    // Filter Balances
    let balanceTotal = 0;
    return this.balanceSearch(form)
    .sort((a, b) => {
      return <any>new Date(a.useDate) - <any>new Date(b.useDate)})
    .map(b => {
      let {category, ...rest} = b;
      category = this.catService.findById(category);
      balanceTotal = category.type === 'Income' ? balanceTotal + b.total : balanceTotal - b.total
      return {
        ...rest,
        category: category,
        balanceTotal: balanceTotal
      }
    });
  }

  /**
   * Search Detail Data
   * @param form
   * @returns
   */
  searchDetails(form: BalanceSearch): readonly BalanceDetails[]  {
    return this.balanceSearch(form)
      .map(a => a.id)
      .map(balanceId => this.detResource.findById(balanceId)
          .map(d => {
              let { balance, ...rest } = d
              balance = this.balResource.findById(balanceId)
              const { category, ...others } = balance
              balance = { ...others, category: this.catService.findById(category) }
              return {
                  ...rest,
                  balance: balance
              }
          })
      ).reduce((a, b) => a.concat(b), [])
  }

  private balanceSearch(form: BalanceSearch): Balance[] {
    return this.balResource.list.filter(a => {
      // Category
      if(form.category && form.category !== a.category) {
          return false;
      }
      // Type
      if (form.type && form.type !== this.catService.findById(a.category).type) {
        return false;
      }
      // From
      const date = this.datePipe.transform(a.useDate, 'yyyy/MM/dd')!;
      const dateFrom = this.datePipe.transform(form.from, 'yyyy/MM/dd')!;
      if(form.from && dateFrom.localeCompare(date) > 0) {
        return false;
      }
      // To
      const dateTo = this.datePipe.transform(form.to, 'yyyy/MM/dd')!;
      if(form.to && dateTo.localeCompare(date) < 0) {
        return false;
      }
      return true;
      });
    }

}
