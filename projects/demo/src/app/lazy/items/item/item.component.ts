import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <ng-container *ngIf="route.snapshot.queryParams.revision">
      <ngx-crumb text="Revisions" [link]="['revisions']"></ngx-crumb>
      <ngx-crumb text="Revision {{route.snapshot.queryParams.revision}}"></ngx-crumb>
    </ng-container>

    <h2>Item {{route.snapshot.params.id}}.</h2>
    <h3 *ngIf="route.snapshot.queryParams.revision">Revision: {{route.snapshot.queryParams.revision}}</h3>
    <h3 *ngIf="!route.snapshot.queryParams.revision"><a routerLink="revisions">Revisions</a></h3>
  `,
  styles: [
  ]
})
export class ItemComponent implements OnInit {


  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
