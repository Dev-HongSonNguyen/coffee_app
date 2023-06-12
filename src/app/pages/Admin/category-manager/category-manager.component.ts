import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

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
    if (confirm('Bạn không có quyền xóa danh mục !')) {
      this.categoryService.deleteCategory(id).subscribe(() => {
        this.categoryData = this.categoryData.filter(
          (item: any) => item?._id !== id
        );
      });
      alert("Xoá danh mục thành công")
    }
  }
  
}
