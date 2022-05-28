import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {
  initForm = {
    product: '',
    price: 1,
    stock: 1,
  }

  // To make a reference of a local reference of the template
  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  validateProduct(): boolean{
    return this.myForm?.controls['product']?.invalid && this.myForm?.controls['product']?.touched
  }
  validatePrice(): boolean{
    return !isNaN(Number(this.myForm?.controls['price']?.value)) && this.myForm?.controls['price']?.value < 1 && this.myForm?.controls['price']?.touched
  }

  // save(form: NgForm){
  save(){
    console.log(this.myForm);
    this.myForm.resetForm({
      price: 0,
      stock: 0,
    });
  }
}
