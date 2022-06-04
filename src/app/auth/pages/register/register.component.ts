import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { emailPattern, namePattern, verifyUserName } from 'src/app/shared/validators/validations';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required, Validators.pattern(this.validatorsService.namePattern) ]],
    email: ['', [ Validators.required, Validators.pattern(this.validatorsService.emailPattern) ]],
    username: ['', [Validators.required, this.validatorsService.verifyUserName]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm_password: ['', [Validators.required, Validators.minLength(6)]],
  }, {
    validators: [this.validatorsService.hasTheSameValue('password', 'confirm_password')]
  })

  constructor(private formBuilder: FormBuilder, private validatorsService: ValidatorsService) { }

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
