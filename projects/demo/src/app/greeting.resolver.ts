import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

const greetings = ['Hi', 'Hello', 'Bonjour', 'Hola']

@Injectable({ providedIn: 'root' })
export class GreetingResolver implements Resolve<string> {
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<string> {
    return new Promise(r => setTimeout(() => r(greetings[Math.floor(Math.random() * greetings.length)]), 300));
  }
}
