import { Component } from '@angular/core';
import { SliderService } from 'src/app/service/slider.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-slider-manager',
  templateUrl: './slider-manager.component.html',
  styleUrls: ['./slider-manager.component.css']
})
export class SliderManagerComponent {
  sliderData: any
  constructor (private sliderService: SliderService){}
  ngOnInit(){
    this.sliderService.getAllSlider().subscribe((data:any)=>{
      this.sliderData = data.slider
    })
  }
  deleteSlider(id: string){
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
        this.sliderService.deleteSlider(id).subscribe(()=>{
          this.sliderData = this.sliderData.filter((item:any)=>{
            item._id !== id
          })
        })
        Swal.fire(
          'Xóa thành công !',
          'Có không giữ mất đừng tìm nhé !',
          'success'
        )
      }
    })
  }
}
