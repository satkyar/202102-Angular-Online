import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForDemoComponent } from './for-demo/for-demo.component';
import { IfDemoComponent } from './if-demo/if-demo.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';

const routes: Routes = [
  {path: 'if-demo', component: IfDemoComponent},
  {path: 'switch-demo', component: SwitchDemoComponent},
  {path: 'for-demo', component: ForDemoComponent},
  {path: '', redirectTo: '\if-demo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
