import { Component } from '@angular/core';
import { SliderService } from 'src/app/service/slider.service';

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
    if(confirm("Bạn có chắc chắn muốn xóa slide này không !")){
      this.sliderService.deleteSlider(id).subscribe(()=>{
        this.sliderData = this.sliderData.filter((item:any)=>{
          item._id !== id
        })
      })
      alert("Xoá slide thành công")
    }
  }
}
