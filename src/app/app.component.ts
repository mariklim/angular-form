import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';

  // Two way binding, in html <input type="text" [(ngModel)]="myInput">
  myInput:string = "";



  onSubmit(myForm : NgForm){
    console.log(myForm)
  }


  // Template Driven Form 2

  formObjDue:{name:string,surname:string}={
    name:'',
    surname: ''
  }


  onSubmit2(){
    console.log(this.formObjDue)
  }
}
