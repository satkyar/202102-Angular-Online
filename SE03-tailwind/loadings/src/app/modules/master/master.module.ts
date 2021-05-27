import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { EmployeesComponent } from './employees/employees.component';
import { MasterRoutingModule } from "./master-routing.module";
import { RolesComponent } from './roles/roles.component';

@NgModule({
  declarations: [RolesComponent, EmployeesComponent],
  imports: [CommonModule, MasterRoutingModule],
  exports: [MasterRoutingModule]
})
export class MasterModule {

}
