import { Component } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-manager',
  templateUrl: './post-manager.component.html',
  styleUrls: ['./post-manager.component.css'],
})
export class PostManagerComponent {
  postData: any;
  constructor(private postService: PostService) {}
  ngOnInit() {
    this.postService.getAllPost().subscribe((data) => {
      this.postData = data?.post;
    });
  }

  deletePost(id: number) {
    if (confirm('bạn có muốn xoá bài viết này không')) {
      this.postService.deletePost(id).subscribe(() => {
        this.postData = this.postData.filter((item: any) => item?._id !== id);
      });
      alert("Xoá bài viết thành công")
    }
  }
}
