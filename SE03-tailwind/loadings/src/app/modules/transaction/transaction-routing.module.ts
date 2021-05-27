import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { InvoicesComponent } from './invoices/invoices.component';

const routes: Routes = [
  {path: 'invoices', component: InvoicesComponent},
  {path: 'create', component: CreateTransactionComponent},
  {path: '', redirectTo: '/transaction/invoices', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
