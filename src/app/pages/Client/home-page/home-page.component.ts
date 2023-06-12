import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { PostService } from 'src/app/service/post.service';
import * as moment from 'moment';
import { NgFor } from '@angular/common';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  homeProductData: any
  homeCateData: any;
  homePostData: any;
  constructor(
    private categoryService: CategoryService,
    private postService: PostService,
    private productService: ProductService
  ) {}
  
  
  
  ngOnInit() {
    this.categoryService.getAllCategory().subscribe((data: any) => {
      this.homeCateData = data.category;
      console.log(data.category);
    });

    this.postService.getAllPost().subscribe((item: any) => {
      this.homePostData = item?.post;
      console.log(this.homePostData);
      
    });

    this.productService.getAllProduct().subscribe((item: any) => {
      this.homeProductData = item?.products
      console.log(this.homeProductData);
      
    })

    
  }
}
