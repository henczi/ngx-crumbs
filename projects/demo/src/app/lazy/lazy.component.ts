import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-main',
  template: `
    <h1>LAZY</h1>

    <h3>
      <a routerLink="./">Home</a>
       |
      <a routerLink="item">Items</a>
    </h3>

    <div class="router-outlet-wrapper">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`.router-outlet-wrapper { border: 2px dashed red; padding: 10px; }`]
})
export class LazyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
