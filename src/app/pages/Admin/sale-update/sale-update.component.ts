import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Isale } from 'src/app/interface/sale';
import { SaleService } from 'src/app/service/sale.service';
import { UploadService } from 'src/app/service/upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sale-update',
  templateUrl: './sale-update.component.html',
  styleUrls: ['./sale-update.component.css']
})
export class SaleUpdateComponent {
  
  sale: Isale = {
    name: '',
    image: '',
    timeSale: ''
  };
  saleForm = this.formBuilder.group({
    name: [''],
    image: [''],
    timeSale: ['']
  })
  constructor(
    private saleService: SaleService,
    private formBuilder: FormBuilder,
    private navigate: Router,
    private route : ActivatedRoute
  ) {
    this.route.paramMap.subscribe((par: any) => {
      const id = par.get('id');
      this.saleService.getOneSale(id).subscribe((data: any) => {
        this.sale = data?.sale
        this.saleForm.patchValue({
          name: data?.sale?.name,
          image: data?.sale?.image,
          timeSale: data?.sale?.timeSale
        })
      })
    })
  }
  Edit() {
    if(this.saleForm.invalid) return

    const sale = {
      _id: this.sale._id,
      name: this.saleForm.value.name || 'notFound',
      image: this.saleForm.value.image || 'notFound',
      timeSale: this.saleForm.value.timeSale || 'notFound'
    }
    this.saleService.updateSale(sale).subscribe((data: any) => {
      this.sale = data
      Swal.fire(
        'Chỉnh sửa thành công rồi nè ',
        'You clicked the button!',
        'success'
      )
      this.navigate.navigate(['admin/sale'])
    })
  }
}
