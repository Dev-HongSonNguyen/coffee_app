import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Islider } from 'src/app/interface/slider';
import { SliderService } from 'src/app/service/slider.service';
import { UploadService } from 'src/app/service/upload.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-slider-add',
  templateUrl: './slider-add.component.html',
  styleUrls: ['./slider-add.component.css']
})
export class SliderAddComponent {
  sliderForm: any;
  selectedFile!: File[];
  constructor (private sliderService: SliderService, private formBuilder: FormBuilder, private uploadService: UploadService, private navigate: Router){}
  ngOnInit(): void {
    this.sliderForm = this.formBuilder.group({
      name: [''],
      image: [''],
      ratio: [''],
      description: [''],
    });
  }
  AddSlider(){
    const slider: Islider={
      name: this.sliderForm.value.name || 'notFound',
      image: this.sliderForm.value.image || 'notFound',
      ratio: this.sliderForm.value.ratio || 'notFound',
      description: this.sliderForm.value.description || 'notFound',
     }
     this.uploadService.uploadImage(this.selectedFile).subscribe((data)=>{
      const imageUrl = data.urls[0].url
      slider.image = imageUrl
      this.sliderService.createSlider(slider).subscribe(()=>{
        Swal.fire(
          'Thêm thành công rồi nè !',
          'You clicked the button!',
          'success'
        )
        this.navigate.navigate(['admin/slider'])
       })
    })
  }
  onFileSelect(event: any){
    this.selectedFile = event.target.files
  }
}
