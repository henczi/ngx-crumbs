import { Component, Input, OnInit } from '@angular/core';
import { NgxCrumbsService } from './ngx-crumbs.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ngx-crumbs',
  template: `
  <div class="ngx-crumbs {{containerClass}}">
    <ng-container *ngFor="let crumb of crumbsService.crumbs$ | async; let last = last">
      <a class="ngx-crumb-item {{itemClass}}" *ngIf="!last && !crumb.extras.noLink; else noLink" [routerLink]="crumb.path">{{crumb.text}}</a>
      <ng-template #noLink><span class="ngx-crumb-item {{itemClass}}">{{crumb.text}}</span></ng-template>
    </ng-container>
  </div>
  `,
  styles: [``]
})
export class NgxCrumbsComponent implements OnInit {

  @Input() containerClass: string = '';
  @Input() itemClass: string = '';

  constructor(public crumbsService: NgxCrumbsService) { }

  ngOnInit(): void {
  }

}
