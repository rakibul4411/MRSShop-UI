import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    var token = localStorage.getItem('userToken');
    if (token != null) {
      var decoded = jwt_decode(token);
      var role = decoded.typ;
      if (role == "Admin")
      {
        return true;
      }      
    }
      
      this.router.navigate(['/']);
      return false;
  }
}
