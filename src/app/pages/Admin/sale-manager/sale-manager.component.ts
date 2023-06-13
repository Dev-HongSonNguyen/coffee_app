import { Component } from '@angular/core';
import { SaleService } from 'src/app/service/sale.service';

@Component({
  selector: 'app-sale-manager',
  templateUrl: './sale-manager.component.html',
  styleUrls: ['./sale-manager.component.css']
})
export class SaleManagerComponent {
  saleData: any
  constructor(private saleService: SaleService) {}
  ngOnInit() {
    this.saleService.getAllSale().subscribe((data: any) => {
      this.saleData = data?.sale
    })
  }
  Delete(id: string) {
    if(confirm("bạn có muốn xoá không")) {
      this.saleService.deleteSale(id).subscribe(() => {
        this.saleData = this.saleData.filter((item: any) => item?._id !== id)
      })
    }
  }
}
