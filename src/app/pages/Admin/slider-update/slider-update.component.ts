import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Islider } from 'src/app/interface/slider';
import { SliderService } from 'src/app/service/slider.service';
import { UploadService } from 'src/app/service/upload.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-slider-update',
  templateUrl: './slider-update.component.html',
  styleUrls: ['./slider-update.component.css']
})
export class SliderUpdateComponent {
  slider: Islider = {
    name: '',
    image: '',
    ratio: '',
    description: ''
  };
  sliderForm = this.formBuilder.group({
    name: [''],
    image: [''],
    ratio: [''],
    description: ['']
  })
  constructor (private sliderService: SliderService, private formBuilder: FormBuilder, private uploadService: UploadService, private navigate: Router, private route: ActivatedRoute){
    this.route.paramMap.subscribe((par) => {
      const id =  String( par.get('id'))
      this.sliderService.getOneSlider(id).subscribe((item:any) => {
        this.slider = item?.slider
        this.sliderForm.patchValue({
          name: item?.slider.name,
          image: item?.slider.image,
          ratio: item?.slider.ratio,
          description: item?.slider.description,
        })
      })
    })
  }
  Edit() {
    if(this.sliderForm.invalid) return

    const slider = {
      _id: this.slider._id ,
      name: this.sliderForm.value.name || 'notFound',
      image: this.sliderForm.value.image || 'notFound',
      ratio: this.sliderForm.value.ratio || 'notFound',
      description: this.sliderForm.value.description || 'notFound'
    }
    this.sliderService.updateSlider(slider).subscribe((data) => {
      this.slider = data;
      Swal.fire(
        'Chỉnh sửa thành công rồi nè ',
        'You clicked the button!',
        'success'
      )
      this.navigate.navigate(['admin/slider'])
    })
  }
}
