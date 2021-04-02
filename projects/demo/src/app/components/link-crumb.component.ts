import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <ngx-crumb text="link: '../route'" link="../route"></ngx-crumb>
    <ngx-crumb text="link: ['..', 'component']" [link]="['..', 'component']"></ngx-crumb>
    <ngx-crumb text="link: '/'" link="/"></ngx-crumb>
    <ngx-crumb text="Current" ></ngx-crumb>

    <h3>-- Crumbs with link -- </h3>

    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class LinkCrumbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
