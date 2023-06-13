import { Component } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import Swal from 'sweetalert2';
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
      this.postService.deletePost(id).subscribe(() => {
        this.postData = this.postData.filter((item: any) => item?._id !== id);
      });
      Swal.fire(
        'Xóa thành công !',
        'Có không giữ mất đừng tìm nhé !',
        'success'
      )
    }
  })
  }
  
}
