import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
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
  constructor(private productService: ProductService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.route.paramMap.subscribe((par: any) => {
      const id = par.get('id')
      this.productService.getProductById(id).subscribe((data: any) => {
        this.product = data?.product
        console.log("hihi",this.product);
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


}
