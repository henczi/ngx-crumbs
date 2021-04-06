import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgxCrumbOptions } from './ngx-crumb-options';
import { NgxCrumbItem } from './ngx-crumb-item';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { createAbsoluteLink, getActivatedRoutePath } from './utils';

@Injectable({
  providedIn: 'root'
})
export class NgxCrumbsService implements OnDestroy {
  private routerEventsSubscription: Subscription;
  private updateScheduled = false;

  protected _componentCrumbMap = new Map<any, NgxCrumbItem>();
  protected _routeCrumbs: NgxCrumbItem[] = [];
  protected _crumbs = new BehaviorSubject<NgxCrumbItem[]>([]);

  get crumbs$() {
    return this._crumbs.asObservable();
  }

  constructor(protected router: Router) { this.subscribeRouterEvents() }

  ngOnDestroy() {
    this.routerEventsSubscription?.unsubscribe();
    this._crumbs.complete();
  }

  deleteComponentCrumbForRoute(key: any) {
    this._componentCrumbMap.delete(key);
    this.componentCrumbChanged();
  }

  setComponentCrumbForRoute(key: any, activatedRoutePath: string, crumbOptions: NgxCrumbOptions) {
    this._componentCrumbMap.set(key, this.createCrumbItemFromOptions(activatedRoutePath, crumbOptions))
    this.componentCrumbChanged();
  }

  private componentCrumbChanged() { this.scheduleUpdate() }


  private subscribeRouterEvents() {
    this.routerEventsSubscription = this.router.events.pipe(
      filter(x => x instanceof NavigationEnd),
      distinctUntilChanged()
    ).subscribe(() => this.updateRouteCrumbs());
  }

  private updateRouteCrumbs() {
    this._routeCrumbs = this.getRouteDataCrumbs(this.router.routerState.root);
    this.scheduleUpdate();
  }

  private getRouteDataCrumbs(ar: ActivatedRoute) {
    const ret: NgxCrumbItem[] = [];

    const ars = ar.snapshot;

    const activatedRoutePath = getActivatedRoutePath(ars);
    const routeData = ars.routeConfig && ars.routeConfig.data;

    let dataCrumbs = routeData ? (routeData.crumb ?? routeData.crumbs ?? routeData.breadcrumb ?? routeData.breadcrumbs) : undefined;

    if (dataCrumbs != null) {
      if (!Array.isArray(dataCrumbs))
        dataCrumbs = [dataCrumbs];

      for (const dataCrumb of dataCrumbs) {
        const crumbO = typeof dataCrumb === 'object' ? dataCrumb : { text: dataCrumb };

        const text = typeof crumbO.text === 'function' ? crumbO.text({
          data: ars.data,
          params: ars.params,
          queryParams: ars.queryParams,
        }) : crumbO.text;
        const link = crumbO.link ? createAbsoluteLink(this.router, crumbO.link, ar) : undefined;
        const noLink = crumbO.noLink

        ret.push(this.createCrumbItemFromOptions(activatedRoutePath, { text, link, noLink }))
      }
    }

    return ars.firstChild ? ret.concat(this.getRouteDataCrumbs(ar.firstChild)) : ret;
  }

  private createCrumbItemFromOptions(activatedRoutePath: string, crumbOptions: NgxCrumbOptions): NgxCrumbItem {
    return {
      activatedRoutePath,
      path: crumbOptions.link ?? activatedRoutePath,
      text: crumbOptions.text,
      extras: { noLink: crumbOptions.noLink ?? false }
    }
  }

  private scheduleUpdate() {
    if (this.updateScheduled)
      return;

    setTimeout(() => {
      this.updateScheduled = false;
      this.updateCrumbs();
    })

    this.updateScheduled = true;
  }

  private updateCrumbs() {
    const routeCrumbs = this._routeCrumbs;
    const next = [];

    let routeCrumbIndex = 0;
    for (const componentCrumb of this._componentCrumbMap.values()) {
      while(routeCrumbIndex < routeCrumbs.length && routeCrumbs[routeCrumbIndex].activatedRoutePath.length <= componentCrumb.activatedRoutePath.length)
        next.push(routeCrumbs[routeCrumbIndex++])
      next.push(componentCrumb)
    }
    while(routeCrumbIndex < routeCrumbs.length)
      next.push(routeCrumbs[routeCrumbIndex++])

    this._crumbs.next(next)
  }

}
