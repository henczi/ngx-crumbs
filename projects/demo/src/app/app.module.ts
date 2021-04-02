import { LinkCrumbComponent } from './components/link-crumb.component';
import { NgxCrumbsModule } from './../../../ngx-crumbs/src/lib/ngx-crumbs.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { ComponentCrumbComponent } from './components/component-crumb.component';
import { RouteCrumbComponent } from './components/route-crumb.component';
import { MultipleCrumbComponent } from './components/multiple-crumb.component';
import { ReactiveCrumbComponent } from './components/reactive-crumb.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ComponentCrumbComponent,
    RouteCrumbComponent,
    MultipleCrumbComponent,
    ReactiveCrumbComponent,
    LinkCrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCrumbsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
