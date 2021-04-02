import { NgxCrumbsService } from './../../../ngx-crumbs/src/lib/ngx-crumbs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ngx-crumb text="HOME"></ngx-crumb>

    <h1>APP</h1>

    <div class="crumbs-container">
      <ngx-crumbs containerClass="breadcrumb" itemClass="breadcrumb-item"></ngx-crumbs>
    </div>

    <h3>Custom look for breadcrumbs</h3>
    <div class="custom-crumbs-container">
      <span *ngFor="let crumb of crumbsService.crumbs$ | async; let last = last" >
        <button [disabled]="last" [routerLink]="crumb.path">{{crumb.text}}</button> <span *ngIf="!last"> >> </span>
      </span>
    </div>

    <br />

    <h3>
      <a routerLink="/">Main</a>
      <br />
      <br />
      <a routerLink="/component">Component</a>
       |
      <a routerLink="/route">Route</a>
       |
      <a routerLink="/dynamic/{{randomValue}}">Dynamic</a>
       |
      <a routerLink="/reactive">Reactive</a>
       |
      <a routerLink="/link">Link</a>
       |
      <a routerLink="/multiple">Multiple</a>
      <br />
      <br />
      <a routerLink="/lazy">Lazy Module</a>
    </h3>

    <br />

    <div class="router-outlet-wrapper">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `:host { display:block; padding: 10px; }`,
    `.custom-crumbs-container { border: 1px solid black; padding: 10px; }`,
    `.router-outlet-wrapper { border: 3px dashed black; padding: 10px; }`,
  ]
})
export class AppComponent {

  randomValue = Math.ceil(Math.random() * 1000)

  constructor(public crumbsService: NgxCrumbsService) {
    crumbsService.crumbs$.subscribe(x => document.title = x.length ? `${x[x.length-1].text} | Demo` : 'Demo')
  }
}
