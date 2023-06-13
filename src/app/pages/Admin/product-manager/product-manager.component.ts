import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css'],
})
export class ProductManagerComponent {
  productData: any;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getAllProduct().subscribe((data: any) => {
      const newData = data.products;
      this.productData = newData;
    });
  }
  Delete(id: string) {
    // console.log("idhihih", id);
    // return
    Swal.fire({
      title: 'Muốn xóa à',
      text: "Xóa thì đừng hối hận nhé",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(id).subscribe(() => {
          this.productData = this.productData.filter(
            (item: any) => item?._id !== id
          );
        });
        Swal.fire(
          'Xóa thành công !',
          'Có không giữ mất đừng tìm nhé !',
          'success'
        )
      }
    })
  }
}