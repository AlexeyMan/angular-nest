import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Card } from './models/main';

@Component({
  selector: 'ngx-main',
  styleUrls: ['main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent {
cards: Card[] = new Array<Card>();
selectedOption = 'primary';
infoForm : FormGroup;
    constructor(private formBuilder: FormBuilder){
      
        this.infoForm = formBuilder.group({
              
            "titleName": ["Информация", [Validators.required]],
            "info": ["", [ Validators.required]],
            "infoStatus": [],
            "catVisible": [],
            "infoDelay": [],
        });
    }
     
onSubmit(){
  console.log(this.infoForm);
    }

// closeCard() {
  
// }
  // runTimeOut() {
  //  return setTimeout(() =>{true}, 5000);
  // }
}
