import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interface/categories';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {
  categoryForm: any;


  constructor(private categoryService: CategoryService, private router: Router, private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: [''],
      image: ['']
    })
  }
  AddCategory(){
    if(this.categoryForm.invalid) return
    const category: ICategory= {
      name: this.categoryForm.value.name || 'notFound',
      image: this.categoryForm.value.image || 'notFound'
    }
    this.categoryService.addCategory(category).subscribe(() => {
      alert("Thêm danh mục thành công")
      this.router.navigate(['admin/category'])
    })
  }
}
