import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styles: [
  ]
})
export class DynamicComponent{
  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.formBuilder.array([
      ['Metal Slug'],
      ['Super mario bros']
    ], Validators.required)
  })

  newFavorite: FormControl = this.formBuilder.control('', [Validators.required]);

  constructor(private formBuilder: FormBuilder) { }

  get favorites(): FormArray {
    return this.myForm.get('favorites') as FormArray;
  }

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
    this.favorites.clear();
  }

  addFavorite(): void {
    if(this.newFavorite.invalid){
      return;
    }
    // this.favorites.push(new FormControl(this.newFavorite.value, Validators.required));
    this.favorites.push(this.formBuilder.control(this.newFavorite.value, Validators.required));
    this.newFavorite.reset();
  }

  deleteFavorite(index: number): void {
    this.favorites.removeAt(index);
  }
}
