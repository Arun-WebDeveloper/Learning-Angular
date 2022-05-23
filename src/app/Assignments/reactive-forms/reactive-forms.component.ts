import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './customvalidators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  statusDrop = ['Stable', 'Critical', 'Finished']
  //forbiddenProjectNames = ['Test'];
  projectForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      userForm: new FormGroup({
        project: new FormControl(null, [Validators.required, this.unwantedNames.bind(this)], this.unwantedValues),
        //project: new FormControl(null, [Validators.required,CustomValidators.firstInvalidName],CustomValidators.asyncInvalidName),
        mail: new FormControl(null, [Validators.required, Validators.email]),
      }),
      status: new FormControl(''),
      hobbies: new FormArray([])
    })
    //statusChanges
    //this.projectForm.statusChanges.subscribe((status) => console.log(status));
    // valueChanges
    // this.projectForm.valueChanges.subscribe((value)=>console.log(value));
 }
 //creating our own error as "Test"(custom validation)
  unwantedNames(control: FormControl): { [s: string]: boolean } {
    if ((control.value === 'Test')) {
      return { 'forbidden': true };
    }
    return null;
  }
  //asynchronous validation
  unwantedValues(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'TestProject') {
          resolve({ 'forbiddenNew': true });
        } else {
          resolve(null);
        }
      }, 3000)
    })
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  addHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.projectForm.get('hobbies')).push(control);
  }
  getControls() {
    return (<FormArray>this.projectForm.get('hobbies')).controls;
  }
}


