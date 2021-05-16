import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MemberEditComponent } from './member-edit/member-edit.component';

const routes: Routes = [
  {path: 'hello', component: HelloComponent},
  {path: 'hello/:id', component: MemberEditComponent},
  {path: 'hello/:id/details', component: MemberDetailsComponent},
  {path: '', redirectTo: '/hello', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MemberEditComponent,
    MemberDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
