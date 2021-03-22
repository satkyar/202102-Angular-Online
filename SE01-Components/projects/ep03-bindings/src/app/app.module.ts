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

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertiesComponent,
    PropBindingChild,
    BackgroundColorDirective,
    AttributesComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BackgroundColorDirective],
})
export class AppModule { }
