import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent {
  productData: any
  constructor(private productService: ProductService){}
  ngOnInit(){
    this.productService.getAllProduct().subscribe((data:any)=>{
      const newData = data.products
      this.productData = newData.docs
    })
  }
}
