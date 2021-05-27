import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { HelloComponent } from './hello/hello.component';
import { PathComponent } from './hello/path/path.component';
import { MatrixComponent } from './hello/matrix/matrix.component';
import { QueryComponent } from './hello/query/query.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResolveComponent } from './resolve/resolve.component';
import { ResolveFromComponent } from './resolve/resolve-from/resolve-from.component';
import { ResolveToComponent } from './resolve/resolve-to/resolve-to.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    HelloComponent,
    PathComponent,
    MatrixComponent,
    QueryComponent,
    NotFoundComponent,
    ResolveComponent,
    ResolveFromComponent,
    ResolveToComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
