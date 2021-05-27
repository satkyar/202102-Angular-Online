import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { InvoicesComponent } from './invoices/invoices.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';


@NgModule({
  declarations: [InvoicesComponent, CreateTransactionComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
