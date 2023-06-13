import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interface/categories';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-detail-cate',
  templateUrl: './detail-cate.component.html',
  styleUrls: ['./detail-cate.component.css']
})
export class DetailCateComponent {
  category: any
  product: any
  productData: any
  constructor (private categoryService: CategoryService, private route: ActivatedRoute, private productService: ProductService){
  this.route.paramMap.subscribe((param)=>{
    const id = String(param.get('id'))
    this.categoryService.getOneCategory(id).subscribe((data)=>{
      this.category = data.category
      this.product = data.category.products
      console.log(this.category, this.product);
    })
  })
  }
  ngOnInit(){
    this.productService.getAllProduct().subscribe((data:any)=>{
      this.productData = data.products
    })
  }
}
