import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  public namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  constructor() { }

  verifyUserName(arg: FormControl): ValidationErrors | null{
    const value = arg.value.trim().toLowerCase();
  
    if (value === 'darkoz') {
      return {
        verifyUsername: true
      }
    }
  
    return null
  }

  hasTheSameValue(field1: string, field2: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const op1 = control.get(field1)?.value;
      const op2 = control.get(field2)?.value;

      if(op1 !== op2){
        control.get(field2)?.setErrors({ notTheSame: true });
        return {
          notTheSame: true
        }
      }
      control.get(field2)?.setErrors(null);
      return null
    }
  }
}
