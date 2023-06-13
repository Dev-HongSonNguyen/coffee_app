import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { CartapiService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  homeCart: any;

  product: IProduct = {
    name: '',
    image: '',
    price: 0,
    description: '',
    categoryId: ''
  }
  productForm = this.formBuilder.group({
    name: [''],
    image: [''],
    price: [0],
    description: [''],
    categoryId: ['']
  })

  constructor(private productService: ProductService, private route: ActivatedRoute, private formBuilder: FormBuilder, private cartService: CartapiService) {
    this.route.paramMap.subscribe((par: any) => {
      const id = par.get('id')
      this.productService.getProductById(id).subscribe((data: any) => {
        this.product = data?.product
        console.log("hihi", this.product);
        this.productForm.patchValue({
          name: data?.product?.name,
          image: data?.product?.image,
          price: data?.product?.price,
          description: data?.product?.description,
          categoryId: data?.product?.categoryId
        })
      })
    })
  }
  ngOnInit(){
    this.cartService.getAllCart().subscribe((cart: any) => {
      // console.log(cart);
      this.homeCart = cart.carts
    })
  }
  addtoCart(item: any) {
    console.log(item);

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
