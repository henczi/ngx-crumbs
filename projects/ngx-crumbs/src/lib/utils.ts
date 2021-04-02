import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

export function getActivatedRoutePath(route: ActivatedRouteSnapshot): string {
  return route.pathFromRoot.map(ars => ars.url.map(urlSegment => `/${urlSegment.path}`).join('')).join('');
}

export function createAbsoluteLink(router: Router, link: any[] | string, ar: ActivatedRoute): string {
  const commands = typeof link === 'string' ? [link] : link;
  return router.createUrlTree(commands, { relativeTo: ar }).toString();
}
