import { Component } from '@angular/core';
import { CartapiService } from 'src/app/service/cart.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItem: any
  quantity : number = 0
  total : number = 0
  constructor(private cartApi: CartapiService,
    private location: Location) { }
  ngOnInit() {
    this.cartApi.getAllCart().subscribe((data: any) => {
      this.cartItem = data.carts
      this.cartItem.forEach((e: any) => {
        console.log(e);
        this.total += e.subtotal 
      })
    })
  }
  
  settingCart(item : any){
    console.log(this.quantity);
  }
  removeCart(item: any) {
    let _this = this;
    Swal.fire({
      title: 'Muốn xóa à',
      text: "Xóa thì đừng hối hận nhé",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(function (isConfirmed: any) {
      if (isConfirmed.isConfirmed) {
        _this.cartApi.deleteCart(item).subscribe(() => {
          // Thực hiện các hành động khác sau khi xóa thành công
          window.location.reload();
        });
      }
    });
  }
}