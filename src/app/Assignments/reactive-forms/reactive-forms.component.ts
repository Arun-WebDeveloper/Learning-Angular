import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
        project: new FormControl(null, [Validators.required,this.unwantedNames.bind(this)],this.unwantedValues),
        //project: new FormControl(null, [Validators.required,CustomValidators.firstInvalidName],CustomValidators.asyncInvalidName),
        mail: new FormControl(null, [Validators.required, Validators.email]),
      }),
      status: new FormControl('')
    })

  }


  unwantedNames(control: FormControl): { [s: string]: boolean } {
    if ((control.value === 'Test')) {
      return { 'forbidden': true };
    }
    return null;
  }
  unwantedValues(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'TestProject') {
          resolve({ 'forbidden': true });
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

}


