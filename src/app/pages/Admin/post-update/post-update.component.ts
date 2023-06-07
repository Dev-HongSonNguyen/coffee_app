import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Ipost } from 'src/app/interface/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css'],
})
export class PostUpdateComponent {
  post: Ipost = {
    name: '',
    image: '',
    description: '',
  };

  postForm = this.formBuilder.group({
    name: [''],
    image: [''],
    description: [''],
  });

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((par: any) => {
      const id = par.get('id');

      this.postService.getOnePost(id).subscribe((item: any) => {
        this.post = item?.post;

        this.postForm.patchValue({
          name: item.post.name,
          image: item.post.image,
          description: item.post.description,
        });
      });
    });
  }
  EditPost() {
    if (this.postForm.invalid) return;

    const post: Ipost = {
      _id: this.post._id,
      name: this.postForm.value.name || 'notFound',
      image: this.postForm.value.image || 'notFound',
      description: this.postForm.value.description || 'notFound'
    };

    this.postService.updatePost(post).subscribe((data) => {
      this.post = data;
      alert('Sửa bài viết thành công');
      this.router.navigate(['admin/post']);
    });
  }
}
