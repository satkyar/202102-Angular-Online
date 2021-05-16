import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropBindingChild } from './properties/PropBindingChild';
import { PropertiesComponent } from './properties/properties.component';
import { BackgroundColorDirective } from './properties/background-color.directive';
import { AttributesComponent } from './attributes/attributes.component';
import { EventsComponent } from './events/events.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { ChildInputComponent } from './two-way/child-input/child-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertiesComponent,
    PropBindingChild,
    BackgroundColorDirective,
    AttributesComponent,
    EventsComponent,
    TwoWayComponent,
    ChildInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BackgroundColorDirective],
})
export class AppModule { }
