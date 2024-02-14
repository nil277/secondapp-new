import { Component,ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondapp check this now';
  varFromChildToParent:string = "";
  varOutputChildtoParent:string = "";
  @ViewChild(LoginComponent) childobj:any;
  isActive:boolean = false;

  localvar:string = '';

  dcValue:number=1.2345;
  price:number = 10000;
  postArray =[1,2,3,4,5]
  

  ngAfterViewInit(){
    console.log(this.childobj);
    //this.varFromChildToParent = this.childobj.varcp;
  }

  receiveMessage($event:any){
    this.varOutputChildtoParent = $event;
  }

  buttonClick(data:string){
    this.localvar = data;
    //console.log(data);
  }

}
