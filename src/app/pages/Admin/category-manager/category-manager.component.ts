import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.css']
})
export class CategoryManagerComponent {
  categoryData: any
  constructor(private categoryService: CategoryService){}
  ngOnInit(){
    this.categoryService.getAllCategory().subscribe((data: any) => {
      this.categoryData = data.category
    })
  }
  Delete(id: string) {
    Swal.fire({
      title: 'Cài này không được xóa !',
      text: "Xóa sẽ mất hết sản phẩm",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.deleteCategory(id).subscribe(()=>{
          this.categoryData = this.categoryData.filter((item:any)=> item._id !== id)
        })
        Swal.fire(
          'Xóa thành công !',
          'Vậy là lại phải thêm lại sản phẩm !',
          'success'
        )
      }
    })
  }
}
