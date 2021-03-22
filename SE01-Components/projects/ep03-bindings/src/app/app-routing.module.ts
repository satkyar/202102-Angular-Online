import { Interpolation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributesComponent } from './attributes/attributes.component';
import { EventsComponent } from './events/events.component';

import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertiesComponent } from './properties/properties.component';

const routes: Routes = [
  {path: "", component: InterpolationComponent},
  {path: "props", component: PropertiesComponent},
  {path: "attr", component: AttributesComponent},
  {path: "events", component: EventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
