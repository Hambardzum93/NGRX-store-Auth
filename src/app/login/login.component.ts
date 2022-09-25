import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  locEmail: string;
  locPass: string;
  errorMessage = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
    this.locEmail = localStorage.getItem('email');
    this.locPass = localStorage.getItem('password');
  }

  login() {
    if (this.loginForm.value['email'] === this.locEmail && this.loginForm.value['password'] === this.locPass) {
      this.router.navigate(['posts']);
    } else {
      this.errorMessage = true;
      this.loginForm.reset();
      setTimeout(() => {
        this.errorMessage = false;
      }, 3000);
    }
  }
}
