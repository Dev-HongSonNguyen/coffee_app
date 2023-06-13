import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, from } from 'rxjs';
import { AuthService } from './service/auth.service';
import Swal from 'sweetalert2';
@Injectable(
  {
    providedIn: 'root'
  }
)
export class authGuard implements CanActivate {
  constructor(private authService: AuthService, private navigate: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<boolean>{
    const userData = this.authService.authenticated();
    if(userData?.user?.role !== "admin"){
      this.navigate.navigate(['/signin'])
      Swal.fire({
        icon: 'error',
        title: 'Cảnh báo...',
        text: 'Bạn không có quyền vào đây !',
      })
      return from ([false]);
    }
    return from([true]);
  }
}
