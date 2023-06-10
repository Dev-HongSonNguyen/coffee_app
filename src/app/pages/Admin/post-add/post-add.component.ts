import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Ipost } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent {
  postForm: any
  selectedFile!: File[];
  constructor(private postService: PostService, private router: Router, private formBuilder: FormBuilder, private uploadService: UploadService) {

  }
  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      name: [''],
      image: [''],
      description: ['']
    })
  }
  addPost() {
    if(this.postForm.invalid){
      return
    }
    const post: Ipost = {
     name: this.postForm.value.name || 'notFound',
     image: this.postForm.value.image || 'notFound',
     description: this.postForm.value.description || 'notFound',
    }
    this.uploadService.uploadImage(this.selectedFile).subscribe((data)=>{
      const imageUrl = data.urls[0].url
      post.image = imageUrl
      this.postService.addPost(post).subscribe(() => {
        alert("Thêm bài viết thành công")
        this.router.navigate(['admin/post'])
      })
    })
  }
  onFileSelect(event: any){
    this.selectedFile = event.target.files
  }
}
