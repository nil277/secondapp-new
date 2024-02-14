import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  changecolor: boolean = false;
  title: string = "Data from component";
  color: string = "red";
  str: string= "This is a string";
  @Input() varpc!: string;
  
  @Output() messageEvent = new EventEmitter<string>();

  varcp:string = "this data goes from child to parent";
  varOcp : string= "this data goes from child to parent on click button.";
 
  constructor(){ 
  }
  sendMessage()
  {
    this.messageEvent.emit(this.varOcp);
  }

  imageUrl: string = "";

  buttonClick(){
    console.log('Button click Event Happend');
    
  }
  // onKeyUp(dataEvent:Event){
  //   console.log((<HTMLInputElement>dataEvent.target).value);    
  // }
  onKeyUp(){
      //console.log("enter value is: "+ name);
      console.log(this.str);
      
    }
}
