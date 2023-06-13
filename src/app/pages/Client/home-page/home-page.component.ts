import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { PostService } from 'src/app/service/post.service';
import { NgFor } from '@angular/common';
import { ProductService } from 'src/app/service/product.service';
import { SliderService } from 'src/app/service/slider.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  homeProductData: any
  homeCateData: any;
  homePostData: any;
  homeSliderData: any;
  constructor(
    private categoryService: CategoryService,
    private postService: PostService,
    private productService: ProductService,
    private sliderService: SliderService
  ) {}
  
  ngOnInit() {
    this.categoryService.getAllCategory().subscribe((data: any) => {
      this.homeCateData = data.category;
    });

    this.postService.getAllPost().subscribe((item: any) => {
      this.homePostData = item?.post;
    });

    this.productService.getAllProduct().subscribe((item: any) => {
      this.homeProductData = item?.products
    })
    this.sliderService.getAllSlider().subscribe((item:any)=>{
      this.homeSliderData = item?.slider
    })
  }
}
