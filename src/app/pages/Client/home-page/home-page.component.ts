import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  homeCateData : any;
  constructor(private categoryService : CategoryService){}

  ngOnInit(){
    this.categoryService.getAllCategory().subscribe((data: any) => {
      this.homeCateData = data.category
      console.log(data.category);
      
    })
  }
}
