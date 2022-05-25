import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @ViewChild('f') signInForm: NgForm;
  defaultValue = "pet"
  answer = '';
  genders = ['Male', 'Female']
  submitted = false;
  user = {
    Username:"",
      Email:"",
      SecretQuestion:"",
      Answer:"",
      Gender:"",

  }
  suggestUserName() {
    const suggestedName = 'Superuser';

    /**this.signInForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'Male'
    });**/
    this.signInForm.form.patchValue({
      userData: {
        username: suggestedName,
      }
    })
  }
  //onSubmit(form: NgForm) {
  // console.log(form)
  //}
  onSubmit() {
    this.submitted = true;
    this.user.Username = this.signInForm.value.userData.username;
    this.user.Email = this.signInForm.value.userData.email;
    this.user.SecretQuestion = this.signInForm.value.secret;
    this.user.Answer = this.signInForm.value.questionAnswer
    this.user.Gender = this.signInForm.value.gender;

    this.signInForm.reset();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
