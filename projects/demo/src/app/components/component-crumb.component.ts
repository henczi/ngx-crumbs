import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <ngx-crumb text="Component crumb"></ngx-crumb>

    <h3>-- Component crumb -- </h3>
  `,
  styles: [``]
})
export class ComponentCrumbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
