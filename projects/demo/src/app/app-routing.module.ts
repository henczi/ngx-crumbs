import { GreetingResolver } from './greeting.resolver';
import { DynamicCrumbComponent } from './components/dynamic-crumb.component';
import { LinkCrumbComponent } from './components/link-crumb.component';
import { ReactiveCrumbComponent } from './components/reactive-crumb.component';
import { MainComponent } from './components/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCrumbComponent } from './components/component-crumb.component';
import { RouteCrumbComponent } from './components/route-crumb.component';
import { MultipleCrumbComponent } from './components/multiple-crumb.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'component',
    component: ComponentCrumbComponent
  },
  {
    path: 'route',
    data: { crumb: 'Route crumb' },
    component: RouteCrumbComponent
  },
  {
    path: 'multiple',
    data: {
      crumb: [
      'Route crumb (1)',
      'Route crumb (2)',
      ]
    },
    component: MultipleCrumbComponent,
  },
  {
    path: 'dynamic/:id',
    resolve: { greeting: GreetingResolver },
    data: { crumb: ({ data, params, queryParams }) => `${params.id} - ${data.greeting} ${queryParams.name ?? data.world}!`, world: 'World' },
    component: DynamicCrumbComponent
  },
  {
    path: 'reactive',
    component: ReactiveCrumbComponent
  },
  {
    path: 'link',
    data: {
      crumb: [
        { text: 'link: "../route"', link: '../route' },
        { text: 'link: "/"', link: '/' },
      ]
    },
    component: LinkCrumbComponent,
    children: [
      {
        data: {
          crumb: [
            { text: 'link: "../route"', link: '../route' },
            { text: 'link: "/"', link: '/' },
          ]
        },
        path: 'a',
        component: MainComponent,
        children: [
          {
            data: {
              crumb: [
                { text: 'link: "../route"', link: '../route' },
                { text: 'link: "/route"', link: '/route' },
              ]
            },
            path: 'x',
            component: MainComponent,
          },
        ]
      },
      {
        path: 'b',
        component: MainComponent,
      },
    ]
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(x => x.LazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
