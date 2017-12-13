import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Form } from '@angular/forms/src/directives/form_interface';
import { DubCheck } from './../validateName';
import { PasswordValidation } from './../validatePass';

// tslint:disable-next-line:max-line-length
const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-registracion-form',
  templateUrl: './registracion-form.component.html',
  styleUrls: ['./registracion-form.component.css']
})
export class RegistracionFormComponent implements OnInit {
  register: FormGroup;

  constructor(private fb: FormBuilder, private val: DubCheck) { }

  ngOnInit() {
    this.register = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(new RegExp(mailRegex)), this.checkMail.bind(this)]],
      name: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(2)]],
      auth: this.fb.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      }, {
        validator: PasswordValidation.MatchPassword
      }),
      address: ['', [Validators.required]],
      country: ['', []],
      city: ['', []],
      zip: ['', []],
      mobile: ['', []]
    });
  }

  submit(e) {
    console.log(e);
  }

  checkMail(v) {
    // console.log(v.value);
    return this.val.validateMail(v.value) ? { dublicate: true} : null;
  }

}
