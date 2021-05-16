import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvideClassComponent } from './provide-class/provide-class.component';
import { StringStorage } from './services/stringStorage';
import { ListViewComponent } from './list-view/list-view.component';

const storage1 = new InjectionToken("Storage1");
const storage2 = new InjectionToken("Storage2");

@NgModule({
  declarations: [
    AppComponent,
    ProvideClassComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    StringStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
