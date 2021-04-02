import { ItemRevisionsComponent } from './items/item/item-revisions/item-revisions.component';
import { ItemComponent } from './items/item/item.component';
import { RouterOutletComponent } from './router-outlet.component';
import { LazyComponent } from './lazy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {
    path: '',
    data: { crumb: 'LAZY' },
    component: LazyComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'item',
        data: { crumb: 'Items' },
        component: RouterOutletComponent,
        children: [
          {
            path: '',
            component: ItemsComponent
          },
          {
            path: ':id',
            data: { crumb: ({ params }) => `Item ${params.id}` },
            component: ItemComponent
          },
          {
            path: ':id/revisions',
            data: {
              crumb: [
                { text: ({ params }) => `Item ${params.id}`, link: '../' },
                'Revisions'
              ]
            },
            component: ItemRevisionsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
