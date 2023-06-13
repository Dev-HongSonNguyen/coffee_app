import { CategoryService } from './../../../service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ICategory } from 'src/app/interface/categories';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {
  product: IProduct = {
    name: '',
    image: '',
    price: 0,
    description: '',
    categoryId: ''
  }

  categories: ICategory[] = [];

  productForm = this.formBuilder.group({
    name: [''],
    image: [''],
    price: [0],
    description: [''],
    categoryId: ['']
  })

  constructor(private productService : ProductService,
    private categoryService : CategoryService,
    private route: ActivatedRoute,
    private Navigate: Router,
    private formBuilder: FormBuilder){

      this.route.paramMap.subscribe(param => {
        const id: any = (param.get('id'));
        
        this.categoryService.getAllCategory().subscribe(cart => {
          this.categories = cart.category
        })

        this.productService.getProductById(id).subscribe(item => {
          this.product = item.product

          this.productForm.patchValue({
            name: item.product.name,
            image: item.product.image,
            price: item.product.price,
            description: item.product.description,
            categoryId: item.product.categoryId._id
          })
        })
      })
    }

    onHandleSubmit(){
      if(this.productForm.invalid) return;

      const product: IProduct = {
        _id: this.product._id,
        name: this.productForm.value.name || 'notFound',
        image: this.productForm.value.image || 'notFound',
        price: this.productForm.value.price || 0,
        description: this.productForm.value.description || 'notFound',
        categoryId: this.productForm.value.categoryId || 'notFound'
      }

      this.productService.updateProduct(product).subscribe(data => {
        console.log(data);
        Swal.fire(
          'Chỉnh sửa thành công rồi nè ',
          'You clicked the button!',
          'success'
        )
        this.Navigate.navigate(['admin/product'])
      })
    }
}
