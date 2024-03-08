import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrl: './warning-alert.component.css'
})
export class WarningAlertComponent {
  statusCode: number = 500;
  message: string = "Server Phatt Gya"

  getStatus(): number{
    return this.statusCode
  }
  setWarning(): void{
    this.message = "Gya Server Bye"
  }
}
