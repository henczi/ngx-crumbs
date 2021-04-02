import { TestBed } from '@angular/core/testing';

import { NgxCrumbsService } from './ngx-crumbs.service';

describe('NgxCrumbsService', () => {
  let service: NgxCrumbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCrumbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
