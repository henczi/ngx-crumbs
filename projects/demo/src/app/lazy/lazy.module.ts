import { RouterOutletComponent } from './router-outlet.component';
import { NgxCrumbsModule } from './../../../../ngx-crumbs/src/lib/ngx-crumbs.module';
import { LazyComponent } from './lazy.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';
import { ItemRevisionsComponent } from './items/item/item-revisions/item-revisions.component';



@NgModule({
  declarations: [RouterOutletComponent, LazyComponent, HomeComponent, ItemsComponent, ItemComponent, ItemRevisionsComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    NgxCrumbsModule
  ]
})
export class LazyModule { }
