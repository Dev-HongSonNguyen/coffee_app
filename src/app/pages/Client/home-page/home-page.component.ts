import { Component } from '@angular/core';
import { CartapiService } from 'src/app/service/cart.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  homeCateData: any;
  homeProduct: any;
  homeCart: any;
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private cartService: CartapiService
  ) { }

  ngOnInit() {
    this.categoryService.getAllCategory().subscribe((data: any) => {
      this.homeCateData = data.category
    })
    this.productService.getAllProduct().subscribe((product: any) => {
      this.homeProduct = product.products
      // console.log(this.homeProduct);

    })
    this.cartService.getAllCart().subscribe((cart: any) => {
      // console.log(cart);
      this.homeCart = cart.carts
    })
  }
  addtoCart(item: any) {
    Swal.fire(
      'Thêm vào giỏ hàng thành công',
      'Nhấn để tiếp tục!',
      'success'
    )
    let idx: any
    this.homeCart.findIndex((items: any) => {
      if (items.name == item.name) {
        idx = items._id
      }
    })
    if (idx) {
      this.cartService.getOneCart(idx).subscribe((data: any) => {
        let quantity = data.cart.quantity
        let cartItemUpdate: any = {
          name: item.name,
          price: item.price,
          image: item.image,
          description: item.description,
          quantity: quantity + 1,
          get subtotal() {
            return this.price * this.quantity;
          },
        }
        this.cartService.updateCart(cartItemUpdate, idx).subscribe(data => {
          console.log("okii");
        })
      })
    } else {
      let cartItem: any = {
        name: item.name,
        price: item.price,
        image: item.image,
        description: item.description,
        quantity: 1,
        get subtotal() {
          return this.price * this.quantity;
        },
      }
      this.cartService.createCart(cartItem).subscribe((cart: any) => {
        console.log("add ok");
        window.location.reload();
      }
      )
    }
  }
}
