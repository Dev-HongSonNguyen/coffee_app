import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Isale } from 'src/app/interface/sale';
import { SaleService } from 'src/app/service/sale.service';
import { UploadService } from 'src/app/service/upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sale-add',
  templateUrl: './sale-add.component.html',
  styleUrls: ['./sale-add.component.css'],
})
export class SaleAddComponent {
  saleForm: any;
  selectedFile!: File[];
  constructor(
    private saleService: SaleService,
    private formBuilder: FormBuilder,
    private uploadService: UploadService,
    private navigate: Router
  ) {}
  ngOnInit() {
    this.saleForm = this.formBuilder.group({
      name: [''],
      image: [''],
      timeSale: ['']
    })
  }
  addSale() {
    const sale: Isale = {
      name: this.saleForm.value.name || 'notFound',
      image: this.saleForm.value.image || 'notFound',
      timeSale: this.saleForm.value.timeSale || 'notFound'
    }
    this.uploadService.uploadImage(this.selectedFile).subscribe((item: any) => {
      const imageUrl = item?.urls[0]?.url;
      sale.image = imageUrl
      this.saleService.addSale(sale).subscribe(() => {
        Swal.fire(
          'Thêm thành công rồi nè !',
          'You clicked the button!',
          'success'
        )
        this.navigate.navigate(['admin/sale'])
      })
    })
  }
  onFileSelect(event: any){
    this.selectedFile = event.target.files
  }
}
