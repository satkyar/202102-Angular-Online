import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { ValidationsComponent } from './validations/validations.component';
import { ValueChangesComponent } from './value-changes/value-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    ValidationsComponent,
    ValueChangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
