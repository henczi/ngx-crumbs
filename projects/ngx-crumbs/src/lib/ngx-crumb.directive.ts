import { Directive, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxCrumbsService } from './ngx-crumbs.service';
import { createAbsoluteLink, getActivatedRoutePath } from './utils';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ngx-crumb'
})
export class NgxCrumbDirective implements OnInit, OnChanges, OnDestroy {

  @Input() text: string;
  @Input() noLink: boolean;
  @Input() link: any[] | string;
  protected ars = this.ar.snapshot;

  protected key = {}; // crumb key

  constructor(private ar: ActivatedRoute, private service: NgxCrumbsService, private router: Router) { }

  ngOnInit(): void {
    this.updateCrumb(this.text);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.text && !changes.text.firstChange && changes.text.currentValue !== changes.text.previousValue) {
      this.updateCrumb(changes.text.currentValue);
    }
  }

  ngOnDestroy() {
    this.service.deleteComponentCrumbForRoute(this.key);
  }

  updateCrumb(crumbText: string) {
    const activatedRoutePath = getActivatedRoutePath(this.ars)
    this.service.setComponentCrumbForRoute(
      this.key,
      activatedRoutePath,
      {
        text: crumbText,
        link: this.link ? createAbsoluteLink(this.router, this.link, this.ar) : undefined,
        noLink: this.noLink
      }
    );
  }

}
