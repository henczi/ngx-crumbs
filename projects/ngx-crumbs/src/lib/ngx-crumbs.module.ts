import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxCrumbDirective } from './ngx-crumb.directive';
import { NgxCrumbsComponent } from './ngx-crumbs.component';

@NgModule({
  declarations: [NgxCrumbDirective, NgxCrumbsComponent],
  imports: [CommonModule, RouterModule],
  exports: [NgxCrumbDirective, NgxCrumbsComponent]
})
export class NgxCrumbsModule { }
