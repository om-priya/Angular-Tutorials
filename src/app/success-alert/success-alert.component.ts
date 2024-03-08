import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrl: './success-alert.component.css'
})
export class SuccessAlertComponent {
  serverStatus: number = 200;
  serverMessage: string = "Everything is Fine";
  allowed: boolean = false
  constructor(){
    setTimeout(()=>{
      this.allowed = true
    },5000)
  }
  getStatus(): number {
    return this.serverStatus;
  }
}
