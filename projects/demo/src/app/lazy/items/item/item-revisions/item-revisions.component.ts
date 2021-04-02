import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-revisions',
  template: `
    <h2>Item {{route.snapshot.params.id}} - revisions</h2>
    <ul>
      <li *ngFor="let revision of revisions">
        <a [routerLink]="['..']" [queryParams]="{ revision: revision }">Revision {{revision}}</a>
      </li>
    </ul>
  `,
  styles: []
})
export class ItemRevisionsComponent implements OnInit {

  revisions = Array(~~(Math.random() * 6) + 1).fill(undefined).map((x, i) => i + 1);

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
