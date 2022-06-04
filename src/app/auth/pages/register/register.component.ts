import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  myForm: FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required, Validators.pattern(this.namePattern) ]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  inputIsValid(input: string): boolean {
    return !!this.myForm.controls[input].errors && this.myForm.controls[input].touched;
  }

  submit():void {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return
    }
    console.log(this.myForm.value);
    this.myForm.reset()
    
  }
}
