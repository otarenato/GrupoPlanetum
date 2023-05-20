import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | UrlTree {
    if (sessionStorage.getItem("isLogged") === "true") {
      return true;
    }
    alert("Você não está logado e não será permitido o acesso a essa página");
    return this.router.parseUrl('/');
  }
}
