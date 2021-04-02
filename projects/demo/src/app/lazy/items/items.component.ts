import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  template: `
    <ul>
      <li *ngFor="let item of items"><a [routerLink]="[item]">Item {{item}}.</a></li>
    </ul>
  `,
  styles: [
  ]
})
export class ItemsComponent implements OnInit {

  items = Array(10).fill(undefined).map((x, i) => i + 1);

  constructor() { }

  ngOnInit(): void {
  }

}
