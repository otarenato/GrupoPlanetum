import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  form = this.formBuilder.group({
    username: [''],
    password: ['']
  });

  submit() {
    if (this.form.valid && this.form.controls["username"].value == "admin" && this.form.controls["password"].value == "123") {
      sessionStorage.setItem("isLogged", "true");
      this.router.navigate(['/inspections']);
    } else {
      sessionStorage.setItem("isLogged", "false");
    }
  }
}
