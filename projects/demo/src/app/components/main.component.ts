import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <ngx-crumb text="Main"></ngx-crumb>

    <h3>^^ Try out the links ^^</h3>

    <router-outlet></router-outlet>
  `,
  styles: [`:host { display: block; padding: 10px; background-color: lightblue; }`]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
