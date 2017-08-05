import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firebase-glossary',
  templateUrl: './firebase-glossary.component.html',
  styleUrls: ['./firebase-glossary.component.css']
})
export class FirebaseGlossaryComponent implements OnInit {
 title = 'zjn700';
  public showSteps:boolean = false;
  public testNgif:boolean=true
  public menuItems;
  public content = "testing 123"
  
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
    
  switchLi() {
    this.testNgif = !this.testNgif;
  }
}