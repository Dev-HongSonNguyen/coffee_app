import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { LocalStorageService  } from 'ngx-webstorage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  private localStorageKey = 'user';
  formSignin = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })
  constructor (private authService: AuthService, private formBuilder: FormBuilder, private navigate: Router){}
  onSubmit(){
    if(this.formSignin.valid){
      this.authService.signin(this.formSignin.value).subscribe((data)=>{
        this.formSignin = data
        sessionStorage.setItem(
          this.localStorageKey,
          JSON.stringify(this.formSignin)
        );
        alert("Đăng nhập thành công !")
        // location.reload();
        this.navigate.navigate([''])
      })
    }
  }
}
