import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formSignup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
  }, {validators: this.checkPassword})
  constructor (private formBuilder: FormBuilder,private authService: AuthService, private navigate: Router){}
  ngOnInit(){
    if(sessionStorage.getItem('user')){
      this.navigate.navigate([""])
    }
  }
  checkPassword(form: FormGroup){
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if(password === confirmPassword) return null
    return {notMatch: true}
  }
  onSubmit(){
    if(this.formSignup.valid){
      this.authService.signup(this.formSignup.value).subscribe((data)=>{
        this.formSignup = data;
        alert("Đăng ký thành công !")
        this.navigate.navigate(['signin'])
      })
    }
  }
}
