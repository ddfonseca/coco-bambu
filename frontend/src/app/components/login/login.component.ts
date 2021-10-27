import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  valid: { username: boolean; password: boolean } = {
    username: true,
    password: true,
  };

  constructor(private router: Router) {}

  onLoginSubmit(form: NgForm): void {
    this.submitted = true;
    const username = form.value.username;
    const password = form.value.password;
    // console.log(form);
    if (username !== 'admin') {
      this.valid.username = false;
    }
    if (password !== 'admin') {
      this.valid.password = false;
    }
    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['pedidos']);
    }
  }

  onChangeInput(): void {
    this.valid.username = true;
    this.valid.password = true;
  }

  ngOnInit(): void {}
}
