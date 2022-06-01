import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent{
  // myForm: FormGroup = new FormGroup({
  //   product: new FormControl(''),
  //   price: new FormControl(0),
  //   stock: new FormControl(0),
  // });

  // value: [value, sync validators, async validators]
  myForm: FormGroup = this.formBuilder.group({
    product: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(1)]],
    stock: [, [Validators.required, Validators.min(0)]],
  })

  // The form builder is a service, for that reason we need to inject it
  constructor( private formBuilder: FormBuilder ) { }

  inputIsValid(input: string): boolean {
    return !!this.myForm.controls[input].errors && this.myForm.controls[input].touched;
  }

  save(): void {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
