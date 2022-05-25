import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  subscriptions = ['Basic' ,'Advanced' , 'Pro']
  @ViewChild('userDetails') signInForm: NgForm;
  defaultValue = 'advanced';
  showPassword: boolean;
  submitData = false;
  info = {
    Email: '',
    Password: '',
    Subscription: ''
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    console.log(this.signInForm.value);
    this.submitData = true;
    this.info.Email = this.signInForm.value.userInfo.email;
    this.info.Password = this.signInForm.value.userInfo.password
    this.info.Subscription = this.signInForm.value.subscription;

    this.signInForm.reset();
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
