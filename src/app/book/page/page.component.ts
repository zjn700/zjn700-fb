import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css', '../../shared/book-media.css']
})
export class PageComponent implements OnInit {
  public imageHeight;
  public imageWidth;
  
  imageStyle = {
    // 'height': this.imageHeight,
    'width': this.imageWidth
  };
  
  
  constructor() { }

  ngOnInit() {
    
    this.resizeImage()
  }
 
  resizeImage() {
    let illustration = document.getElementsByClassName("illustration")[0];  
    console.log(illustration)
    let imageList = <HTMLImageElement>document.getElementsByClassName("image-file")[0];  
    console.log(imageList)
    
    let h2wratio = imageList.naturalHeight / imageList.naturalWidth
    let w2hratio = imageList.naturalWidth   / imageList.naturalHeight
    //this.imageHeight = (imageList.width * h2wratio) + 'px'
    this.imageWidth = (imageList.height * w2hratio) + 'px'
    console.log(h2wratio)
    console.log(w2hratio)
    //console.log(this.imageHeight)
    console.log(this.imageWidth)
    
    
    

    // console.log(imageList[0])
    
  // let h2wratio = <HTMLElement>imageList[0].naturalHeight / imageList[0].naturalWidth
  }

}
