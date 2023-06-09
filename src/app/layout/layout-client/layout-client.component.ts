import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-client',
  templateUrl: './layout-client.component.html',
  styleUrls: ['./layout-client.component.css']
})
export class LayoutClientComponent {
  isLoggedIn: boolean = false;
  constructor(private navigate: Router){}
  ngOnInit() {
    // Kiểm tra xem có tài khoản người dùng đã đăng nhập trong sessionStorage hay không
    if (sessionStorage.getItem('user')) {
      this.isLoggedIn = true;
    }
  }
  logOut() {
    sessionStorage.removeItem('user');
    this.isLoggedIn = false;
    alert("Đăng xuất thành công")
    this.navigate.navigate([''])
  }
}
