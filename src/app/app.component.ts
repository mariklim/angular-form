import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';

  // Two way binding, in html <input type="text" [(ngModel)]="myInput">
  myInput:string = "";

  test:string = "";



  onSubmit(myForm : NgForm){
    console.log(myForm)
    this.test = myForm.form.value.lastInputName
    
  }


  // Template Driven Form 2

  formObjDue:{name:string,surname:string}={
    name:'',
    surname: ''
  }


  onSubmit2(){
    console.log(this.formObjDue)
  }

  //Reactive forms

  nameReactive = new FormControl('FormControl test');

  onSubmitReactive(){
    console.log(this.nameReactive)
  }

  //Reactive forms group

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmitGroup() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }


  //new form

  // onSubmitNew(referenzaNewForm: NgForm){
  //   console.log(referenzaNewForm)
  //   console.log(referenzaNewForm.form.value.cognomeControl)
  // }


  //select api

  colorsList: any = ['black', 'white', 'yellow']
  onSubmitFoto(){
    console.log(this.form.value);
  }

  form = new FormGroup({
    color: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }

  }
