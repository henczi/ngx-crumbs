import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCrumbsComponent } from './ngx-crumbs.component';

describe('NgxCrumbsComponent', () => {
  let component: NgxCrumbsComponent;
  let fixture: ComponentFixture<NgxCrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCrumbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
