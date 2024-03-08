import { Component } from '@angular/core';

@Component({
  selector: 'app-cli-server',
  templateUrl: './cli-server.component.html',
  styleUrl: './cli-server.component.css'
})
export class CliServerComponent {
  serverName: string = "First Data"

  handleChange(event): void{
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
