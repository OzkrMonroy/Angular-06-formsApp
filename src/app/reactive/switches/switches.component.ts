import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  myForm: FormGroup = this.formBuilder.group({
    genre: ['M', Validators.required],
    notifications: [true],
    conditions: [false, Validators.requiredTrue]
  })

  person = {
    genre: 'F',
    notifications: false,
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({...this.person, conditions: true});

    // If you want to keep the person object synchronized with the form you can use the following code:
    this.myForm.valueChanges.subscribe({
      next: ({ conditions, ...rest }) => {
          this.person = {...rest};
        }
    });
  }

  save():void {
    if(this.myForm.invalid){
      return;
    }
    const formValues = {... this.myForm.value};
    delete formValues.conditions;

    this.person = formValues;
  }

}
