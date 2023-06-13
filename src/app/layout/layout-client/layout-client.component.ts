import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartapiService } from 'src/app/service/cart.service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-layout-client',
  templateUrl: './layout-client.component.html',
  styleUrls: ['./layout-client.component.css']
})
export class LayoutClientComponent {
  isLoggedIn: boolean = false;
  totalItemNumber: number = 0;
  constructor(
    private navigate: Router,
    private cartService: CartapiService,
    private cateService: CategoryService
  ) { }
  categoryData: any
  ngOnInit() {
    // Kiểm tra xem có tài khoản người dùng đã đăng nhập trong sessionStorage hay không
    this.cartService.getAllCart().subscribe((data : any) => {
      this.totalItemNumber = data.carts.length
    })
    if (sessionStorage.getItem('user')) {
      this.isLoggedIn = true;
    }
    this.cateService.getAllCategory().subscribe((data:any)=>{
      this.categoryData = data.category
      console.log(this.categoryData);
      
    })
  }
  logOut() {
    sessionStorage.removeItem('user');
    this.isLoggedIn = false;
    alert("Đăng xuất thành công")
    this.navigate.navigate([''])
  }
  reload() {
    window.location.reload();
  }
}
