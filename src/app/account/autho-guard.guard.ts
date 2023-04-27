import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthoGuardGuard implements CanActivate {
  loggedIn: boolean;

  constructor(private router: Router) {
    this.loggedIn = false;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loggedIn) {
      return true;
    }

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>{
      this.router.navigate(["login"])
    });
    return false;
  }

}
