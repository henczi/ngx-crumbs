import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="router-outlet-wrapper">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`.router-outlet-wrapper { border: 2px dashed green; padding: 10px; }`]
})
export class RouterOutletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
