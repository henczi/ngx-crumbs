import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <ngx-crumb text="Component crumb (1)"></ngx-crumb>
    <ngx-crumb text="Component crumb (2)"></ngx-crumb>

    <h3>-- Multiple crumbs per route -- </h3>
  `,
  styles: [``]
})
export class MultipleCrumbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
