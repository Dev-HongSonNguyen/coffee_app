import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { IProduct } from 'src/app/interface/product';
import { CategoryService } from 'src/app/service/category.service';
import { ICategory } from 'src/app/interface/categories';
import { UploadService } from 'src/app/service/upload.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  productForm: any;
  categories: any;
  selectedFile!: File[];

  constructor(private productService: ProductService, private categoryService: CategoryService, 
    private router: Router, private formBuilder: FormBuilder, private uploadService: UploadService ){

    this.categoryService.getAllCategory().subscribe((item: any)=>{
      this.categories = item.category
    })
  }
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: [''],
      image: [''],
      price: [0],
      description: [''],
      categoryId: [''],
    });
  }
  Add(){
    if(this.productForm.invalid){
      return;
     }
     const product: IProduct={
      name: this.productForm.value.name || 'notFound',
      image: this.productForm.value.image || 'notFound',
      price: this.productForm.value.price || 0,
      description: this.productForm.value.description || 'notFound',
      categoryId: this.productForm.value.categoryId || 'notFound',
     }
     this.uploadService.uploadImage(this.selectedFile).subscribe((data)=>{
      const imageUrl = data.urls[0].url
      product.image = imageUrl
      this.productService.addProduct(product).subscribe(()=>{
        Swal.fire(
          'Thêm thành công rồi nè !',
          'You clicked the button!',
          'success'
        )
        this.router.navigate(['admin/product'])
       })
    })
  }
  onFileSelect(event: any){
    this.selectedFile = event.target.files
  }
}
