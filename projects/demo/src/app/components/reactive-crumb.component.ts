import { interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';

@Component({
  template: `
    <ngx-crumb text="Reactive value: {{time$ | async | date: 'HH:mm:ss'}}"></ngx-crumb>

    <h3>-- Reactive value: {{time$ | async | date: 'HH:mm:ss'}} -- </h3>
  `,
  styles: [``]
})
export class ReactiveCrumbComponent implements OnInit {

  time$ = interval(1000).pipe(
    startWith(new Date),
    map(x => new Date),
  );

  constructor() { }

  ngOnInit(): void {
  }

}
