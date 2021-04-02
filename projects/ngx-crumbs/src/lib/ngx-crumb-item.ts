export interface NgxCrumbItemExtras {
  noLink: boolean;
}

export interface NgxCrumbItem {
  activatedRoutePath: string;
  path: string;
  text: string;
  extras: NgxCrumbItemExtras;
}
