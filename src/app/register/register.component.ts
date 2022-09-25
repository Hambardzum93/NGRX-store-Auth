import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Post} from "../models/post.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerMessage = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  register() {
    localStorage.setItem('email',  this.registerForm.value['email']);
    localStorage.setItem('password', this.registerForm.value['password']);
    this.registerMessage = true;
    setTimeout(() => {
      this.router.navigate(['/login']);
      this.registerMessage = false;
      this.registerForm.reset();
    }, 3000);

  }
}
