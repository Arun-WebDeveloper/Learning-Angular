import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { getMaxListeners } from 'process';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
   /** genders = ['Male', 'Female']
  signUpForm: FormGroup;
  forbiddenUserNames = ['Chris', 'Anna']
  constructor() { }

  ngOnInit(): void {
     /**this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail),
      }),

      'gender': new FormControl('Male'),
      'hobbies': new FormArray([])
    })
    //this.signUpForm.valueChanges.subscribe((value)=>console.log(value))
    this.signUpForm.statusChanges.subscribe((status) => console.log(status))

   this.signUpForm.setValue({
      'userData': {
        'username': 'Arun',
        'email': 'arun@gmail.com'
      },
      'gender': 'Male',
      'hobbies': []
    })
    this.signUpForm.patchValue({
      'userData': {
        'username': 'ArunPrasad'

      },

    })
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset({ genders:""})
  }
  addHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true }
    }

  }
  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'arun@gmail.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
**/
dataSubmit = false;
genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];
  user = {
      Username:"",
      Email:"",
      Hobby:'',
      Gender:"",

  }

  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    this.signupForm.patchValue({
      'userData': {
        'username': 'Anna',
      }
    });
  }
  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  onSubmit() {
    console.log(this.signupForm);
   // this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}

