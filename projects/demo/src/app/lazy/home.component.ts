import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-main',
  template: `
    <ngx-crumb text="Lazy Home"></ngx-crumb>
    <h2>Lazy Home</h2>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
