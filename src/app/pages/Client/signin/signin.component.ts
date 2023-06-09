import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { LocalStorageService  } from 'ngx-webstorage';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  formSignin = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })
  constructor (private authService: AuthService, private formBuilder: FormBuilder, private localStorageService : LocalStorageService){}
  onSubmit(){
    if(this.formSignin.valid){
      this.authService.signin(this.formSignin.value).subscribe((data)=>{
        this.formSignin = data
        // this.localStorageService.store('user', this.formSignin);
        alert("Đăng nhập thành công !")
      })
    }
  }
}
