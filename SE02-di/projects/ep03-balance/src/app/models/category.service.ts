import { Injectable } from "@angular/core";

import { Category, CategorySearch } from "./balance.model";
import { ListStorage } from "./base.storage";
import { IdGenerator } from "./id.generator";

const STORAGE_KEY = "com.jdc.balance.category"

@Injectable({providedIn: 'root'})
export class CategoryService extends ListStorage<Category> {

  constructor(private idGen: IdGenerator) {
    super({}, STORAGE_KEY);
  }
  // Home, Income, Expense => Type or ''
  // Category Management => Type or ''
  searchData(params: CategorySearch): readonly Category[] {
    return Object.values(this.resource).filter(cat => {
      if(params.type && cat.type !== params.type){
        return false;
      }
      if(params.name && (!cat.name.toLocaleLowerCase().startsWith(params.name.toLocaleLowerCase()))){
          return false;
      }
      if(!params.deleted && cat.deleted === true){
          return false;
      }
      return true;
    })
  }

  switchDeleteStatus(id: number) {
    if(this.resource[id]) {
      const {deleted, ...rest} = this.resource[id];
      this.resource[id] = {...rest, deleted: !deleted};
    }
  }

  /**
   * with Id, Update
   * @param data
   * without Id, Create
   */
  saveData(data: Category) {
    if(data.id) {
      this.resource[data.id] = data
    }
    else {
      const {id, ...rest} = data;
      const generatedId = this.idGen.next('category');
      this.resource[generatedId] = {...rest, id: generatedId};
    }
  }

  findById(id: number): Category {
    return this.resource[id];
  }

  isAlreadyExistName(name: string): boolean {
    return Object.values(this.resource).find(cat => cat.name === name) != undefined;
  }

}
