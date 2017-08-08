import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css', '../../shared/book-media.css']
})
export class Page2Component implements OnInit {
  
  public leftPanelHeight;
  public leftPanelWidth;
  public f_size
  public w2hratio;
  
  public imageList = [];
  public t_path = "/assets/img/"
  private t_fileSystem = [
            {f_name: "lake.jpg"}
            // {f_name: "screenshot2.png"},
            // {f_name: "screenshot.png"},
            // {f_name: "lake.jpg"}
    ]
    
    
  public imageHeight;
  public imageWidth;
  
  imageStyle = {
    // 'height': this.imageHeight,
    'width': this.imageWidth
  };
  
  
  leftPanelStyle = {
    // 'height': this.imageHeight,
    'width': this.leftPanelWidth,
  };
  
  constructor() { }

  ngOnInit() {
    this.imageList = this.buildImageList();
    console.log(this.imageList)
    setTimeout(this.resizeImage(), 6000)
    // this.resizeDivs()
  }
  
  buildImageList() {
    let t_imageList = []
    for (let image of this.t_fileSystem) {
      t_imageList.push(this.t_path + image.f_name)
    }
    return t_imageList
  }
  
  
  resizeImage() {
    let illustration = document.getElementsByClassName("illustration");  
    console.log(illustration)
    // let imageList = <HTMLImageElement>document.getElementsByClassName("image-file");
    let imageList = document.getElementsByClassName("image-file");
    console.log(imageList)
    
    // let h2wratio = imageList.naturalHeight / imageList.naturalWidth
    // let w2hratio = imageList.naturalWidth   / imageList.naturalHeight
    // //this.imageHeight = (imageList.width * h2wratio) + 'px'
    // this.imageWidth = (imageList.height * w2hratio) + 'px'
    // console.log(h2wratio)
    // console.log(w2hratio)
    // //console.log(this.imageHeight)
    // console.log(this.imageWidth)
  }
  
  
  resizeDivs() {
      let leftPanel = <HTMLElement>document.getElementsByClassName("leftPanel")[0];  
      console.log('leftPanel');
      console.log(leftPanel);
      let h2wratio = leftPanel.clientHeight  / leftPanel.clientWidth
      this.w2hratio = leftPanel.clientWidth   / leftPanel.clientHeight  
      
      console.log(h2wratio)
      console.log(this.w2hratio)
      this.leftPanelWidth = (leftPanel.clientHeight * this.w2hratio) + 'px'
      console.log((this.w2hratio) + 'em')
      this.f_size = (this.w2hratio) +'em'
      
      
      
      // let imageList = <HTMLImageElement>document.getElementsByClassName("image-file")[0];  
      // console.log(imageList)
      // let h2wratio = imageList.naturalHeight / imageList.naturalWidth
      // let w2hratio = imageList.naturalWidth   / imageList.naturalHeight
      //this.imageHeight = (imageList.width * h2wratio) + 'px'
      // this.imageWidth = (imageList.height * w2hratio) + 'px'
      // console.log(h2wratio)
      // console.log(w2hratio)
      // //console.log(this.imageHeight)
      // console.log(this.imageWidth)
        
  }
  
}
