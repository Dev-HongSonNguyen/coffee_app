import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interface/categories';
import { CategoryService } from 'src/app/service/category.service';
import { UploadService } from 'src/app/service/upload.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {
  categoryForm: any;
  selectedFile!: File[];

  constructor(private categoryService: CategoryService, private router: Router, private formBuilder: FormBuilder, private uploadService: UploadService) {

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
    this.uploadService.uploadImage(this.selectedFile).subscribe((data)=>{
      const imageUrl = data.urls[0].url
      category.image = imageUrl
      this.categoryService.addCategory(category).subscribe(()=>{
        Swal.fire(
          'Thêm thành công rồi nè',
          'You clicked the button!',
          'success'
        )
        this.router.navigate(['admin/category'])
       })
    })
  }
  onFileSelect(event: any){
    this.selectedFile = event.target.files
  }
}
