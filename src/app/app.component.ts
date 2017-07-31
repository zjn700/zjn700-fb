import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'zjn700';
  public showSteps:boolean = false;
  
  public menuItems
  
  constructor() {}
  
  
  ngOnInit(){
       this.menuItems = document.getElementsByTagName("LI"); 
       console.log(this.menuItems)
       for (let i=0; i < this.menuItems.length; i++) {
            //menuItems[i].classList.remove('active')
            console.log(this.menuItems[i])
            console.log(this.menuItems[i].innerHTML)
       }    
    
  }
  
  onClick() {
    this.showSteps=!this.showSteps;
    
    
    
    
  }
  
}
