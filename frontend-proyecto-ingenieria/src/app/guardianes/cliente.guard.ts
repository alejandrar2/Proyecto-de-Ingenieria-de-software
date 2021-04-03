import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteGuard implements CanActivate {

  constructor( private router:Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (!window.localStorage.getItem('user') || window.localStorage.getItem('user') == 'null') {
        return this.router.navigate(['/login-usuario']);
      }
  
      return true; 
  }
  
}
