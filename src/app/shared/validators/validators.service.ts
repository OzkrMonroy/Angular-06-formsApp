import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

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
}
