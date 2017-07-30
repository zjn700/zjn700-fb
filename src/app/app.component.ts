import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zjn700';
  public showSteps:boolean = false;
  
  onClick() {
    this.showSteps=!this.showSteps;
  }
  
}
