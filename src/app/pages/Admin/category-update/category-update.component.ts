import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/interface/categories';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css'],
})
export class CategoryUpdateComponent {
  category: ICategory = {
    name: '',
    image: '',
  };
  categoryForm = this.formBuilder.group({
    name: [''],
    image: ['']
  })

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((par) => {
      const id =  String( par.get('id'))

      this.categoryService.getOneCategory(id).subscribe((item) => {
        this.category = item?.category
        this.categoryForm.patchValue({
          name: item?.category.name,
          image: item?.category.image
        })
      })
    })
  }
  Edit() {
    if(this.categoryForm.invalid) return

    const category = {
      
      
      _id: this.category._id ,
      name: this.categoryForm.value.name || 'notFound',
      image: this.categoryForm.value.image || 'notFound'
    }
    console.log(this.category._id);
    
    this.categoryService.updateCategory(category).subscribe((data) => {
      this.category = data;
      alert("update thành công")
      this.router.navigate(['admin/category'])
    })
  }
}
