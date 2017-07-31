import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGlossary]',

})
export class GlossaryDirective {
  private completed=false    
  private htmlArray=[];
  private encodedHtmlString = ''
  private testGlossary = [
                          {term: 'Angular', definition: "Javascript Framework built by Google"}, 
                          {term: 'Node', definition: "JavaScript runtime built on Chrome's V8 JavaScript engine"}, 
                          {term: 'node', definition: "JavaScript runtime built on Chrome's V8 JavaScript engine"}, 
                          {term: 'Firebase', definition:'Online N0SQL database provided by Google'},
                          {term: 'ng', definition: "Node Version Manager"}
                          ]
  // private testGlossary = [
  //                         {term: 'CLI', definition:'Online N0SQL database provided by Google'},
  //                         ]
  
  constructor(private el: ElementRef) { }
  
  removeHtml(htmlString) {   // used by method 2
      var t_htmlString = htmlString
      var t_pattern = /<(.*?)>/g;
      var t_execResultArray;
      var t_htmlArray = []
      var counter = 0
      while ((t_execResultArray = t_pattern.exec(t_htmlString)) !== null) {
        var msg = 'Found ' + t_execResultArray[0] + '. ';
        // let t_code = Math.random().toString(36).substr(2, 10)
        //t_htmlArray.push({html: t_execResultArray[0], code: t_code } )
        let t_code = '[[[[['+counter+']]]]]'
        t_htmlArray.push({html: t_execResultArray[0], code: t_code } )
        t_htmlString = t_htmlString.replace(t_execResultArray[0], t_code)
        counter++
        //msg += 'Next match starts at ' + t_pattern.lastIndex;
        //console.log(Math.random().toString(36).substr(2, 10))
        //console.log(msg);
        
      }
      console.log('t_htmlString')
      console.log(t_htmlString)
      console.log('t_htmlArray')
      console.log(t_htmlArray)   
      this.encodedHtmlString = t_htmlString;
      this.htmlArray = t_htmlArray
    
  }
  
  restoreHtml(){   // used by methd 2
    let restoredHtmString = this.encodedHtmlString;
    let t_htmlArray = this.htmlArray;
    for (let i=0; i<t_htmlArray.length; i++) {
      console.log('t_htmlArray[i]')
      console.log(t_htmlArray[i])
      restoredHtmString = restoredHtmString.replace(t_htmlArray[i].code, t_htmlArray[i].html)
    }
    console.log('restoredHtmString')
    console.log(restoredHtmString)
    return restoredHtmString;
  
    
  }
  
  removeAndReplaceAllTags(elementList) {  // method 2
      // let menuItems = document.getElementsByClassName("zjn-container"); 
        console.log('elementList')
        console.log(elementList)
        
        this.removeHtml(elementList[0].outerHTML)
        
        for (var searchIndex = 0; searchIndex < this.testGlossary.length; searchIndex++) {
          let searchTerm = this.testGlossary[searchIndex].term
          let t_html = "<span class='glossary' title='" + this.testGlossary[searchIndex].definition +"'>" + searchTerm + "</span>"
          // (.*)\bFoo\b(.*)  
          let re = new RegExp("\\b"+searchTerm+"\\b", 'g'); 
          //var re = new RegExp(searchTerm,"g");
          console.log('re=========')
          console.log(re)
          
          this.encodedHtmlString = this.encodedHtmlString.replace(re, t_html)
        }
        elementList[0].outerHTML = this.restoreHtml();    
  }
  
  splitOnInnerHtmlReplaceTheRestore(elementList) {
    console.log(elementList)
    for (let i=0; i < elementList.length; i++) {
        let searchTerm = '';
          for (var searchIndex = 0; searchIndex < this.testGlossary.length; searchIndex++) {
            searchTerm = this.testGlossary[searchIndex].term
            let re = new RegExp("\\b"+searchTerm+"\\b"); 
            console.log('re========')
            console.log(re)
            let t_html = "<span class='glossary' title='" + this.testGlossary[searchIndex].definition +"'>" + searchTerm + "</span>"
            if (elementList[i].outerHTML.indexOf(searchTerm)!=-1) {
              
                  let listItem = elementList[i]
                  let inHtml = elementList[i].innerHTML
                  let t_element = this.clearSearchTermFromHtml(listItem, re);
                  let split_array = t_element.split(re)  //menuItems[i].outerHTML.split(searchTerm)
                  let rejoin_array = [];
                  
                  for (var j = 0; j < split_array.length; j++) {
                      if (j  ==  split_array.length - 1 ){
                        rejoin_array.push(split_array[j])
                      } else {
                          rejoin_array.push(split_array[j])
                          rejoin_array.push(t_html)
                      }
                  }
                  
                  let t_ohtml = ""
  
                  for (var k=0; k < rejoin_array.length; k++) {
                    t_ohtml += rejoin_array[k]
                  }
                  
                  t_element = this.restoreSearchTermToHtml(t_ohtml, inHtml, searchTerm);
                  elementList[i].outerHTML = t_element;
              }
            }
      }

  }
  
  //@HostListener('mouseup') onMouseUp() {
  @HostListener('mouseover') onMouseOver() {
      if (!this.completed) {
        // let menuItems = document.getElementsByClassName("zjn-container"); 
        // console.log('menuItems')
        // console.log(menuItems)
        
        
        // this.removeHtml(menuItems[0].outerHTML)
        
        // for (var searchIndex = 0; searchIndex < this.testGlossary.length; searchIndex++) {
        //   let searchTerm = this.testGlossary[searchIndex].term
        //   let t_html = "<span class='glossary' title='" + this.testGlossary[searchIndex].definition +"'>" + searchTerm + "</span>"
        //   // (.*)\bFoo\b(.*)  
        //   var re = new RegExp(searchTerm,"g");
        //   console.log('re=========')
        //   console.log(re)
          
        //   this.encodedHtmlString = this.encodedHtmlString.replace(re, t_html)
        // }
        // menuItems[0].outerHTML = this.restoreHtml();
        
        let elementList = document.getElementsByClassName("zjn-container"); 
        //this.splitOnInnerHtmlReplaceTheRestore(elementList);
        this.removeAndReplaceAllTags(elementList)
          // // let menuItems = document.getElementsByTagName("LI"); 
          
          // // var t_li_html = menuItems[0].outerHTML
          // // console.log('t_li_html')
          // // console.log(t_li_html)

          // console.log(menuItems)
          // for (let i=0; i < menuItems.length; i++) {
          //     let searchTerm = '';
          //       for (var searchIndex = 0; searchIndex < this.testGlossary.length; searchIndex++) {
          //         searchTerm = this.testGlossary[searchIndex].term
          //         let re = new RegExp("\\b"+searchTerm+"\\b"); 
          //         console.log('re========')
          //         console.log(re)
          //         let t_html = "<span class='glossary' title='" + this.testGlossary[searchIndex].definition +"'>" + searchTerm + "</span>"
          //         if (menuItems[i].outerHTML.indexOf(searchTerm)!=-1) {
                    
          //               let listItem = menuItems[i]
          //               let inHtml = menuItems[i].innerHTML
          //               let t_element = this.clearSearchTermFromHtml(listItem, re);
          //               let split_array = t_element.split(re)  //menuItems[i].outerHTML.split(searchTerm)
          //               let rejoin_array = [];
                        
          //               for (var j = 0; j < split_array.length; j++) {
          //                   if (j  ==  split_array.length - 1 ){
          //                     rejoin_array.push(split_array[j])
          //                   } else {
          //                       rejoin_array.push(split_array[j])
          //                       rejoin_array.push(t_html)
          //                   }
          //               }
                        
          //               let t_ohtml = ""
    
          //               for (var k=0; k < rejoin_array.length; k++) {
          //                 t_ohtml += rejoin_array[k]
          //               }
                        
          //               t_element = this.restoreSearchTermToHtml(t_ohtml, inHtml, searchTerm);
          //               menuItems[i].outerHTML = t_element;
          //           }
          //         }
          //   }
            
      
          this.completed=true;
      }
  }
  
  splitOutOuterHtml(){
    
  }
  
  clearSearchTermFromHtml(contentItem, searchTerm){
    const tempTerm = "!@#$%^&*&^%$#@!"
    var oHtml = contentItem.outerHTML;
    var aHtml = oHtml.split(contentItem.innerHTML)
    console.log('aHtml=======')
    console.log(aHtml)
    if (aHtml[0].indexOf(searchTerm)!=-1) {
      // var re = new RegExp("\\b"+searchTerm+"\\b"); 
      // console.log('re========')
      // console.log(re)
      var tag1 = aHtml[0].replace(searchTerm, tempTerm )
      console.log('tag1')
      console.log(tag1)
      aHtml[0] = tag1
    }
    if (aHtml[1].indexOf(searchTerm)!=-1) {
      var tag2 = aHtml[1].replace(searchTerm, tempTerm )
      console.log('tag2')
      console.log(tag2)
      aHtml[1] = tag2
      
    }
    return aHtml[0] + contentItem.innerHTML + aHtml[1]
  }
  
  restoreSearchTermToHtml(fullHtml, inHtml, searchTerm){
    console.log('////////////////////////////')
    const tempTerm = "!@#$%^&*&^%$#@!"
    // var re = new RegExp("\\b"+searchTerm+"\\b"); 

    return fullHtml.replace(tempTerm, searchTerm );
  }
}



           // console.log(menuItems[i])
                // console.log(menuItems[i].outerHTML)
                // console.log(menuItems[i].outerHTML.indexOf(searchTerm))
                // console.log((menuItems[i].outerHTML.match(new RegExp(searchTerm, "g")) || []).length); //logs 4
                
                
                // // var pattern = "</?\w+\s+[\^>]*>"
          // // console.log('pattern')
          // // console.log(pattern)
          // //console.log("/<?\w*>/.exec(t_li_html)")
          // console.log("/<li>/.exec(t_li_html)")
          // //console.log(/<?\w+\s+[\^>]*/.exec(t_li_html))
          // console.log(/<(.*?)>/.exec(t_li_html))
          
          // var t_pattern = /<(.*?)>/g;
          // var t_execResultArray;
          // var t_htmlArray = []
          // var t_htmlString = t_li_html
          // var counter = 0
          // while ((t_execResultArray = t_pattern.exec(t_li_html)) !== null) {
          //   var msg = 'Found ' + t_execResultArray[0] + '. ';
          //   // let t_code = Math.random().toString(36).substr(2, 10)
          //   //t_htmlArray.push({html: t_execResultArray[0], code: t_code } )
          //   let t_code = '[[[[['+counter+']]]]]'
          //   t_htmlArray.push({html: t_execResultArray[0], code: t_code } )
          //   t_htmlString = t_htmlString.replace(t_execResultArray[0], t_code)
          //   counter++
          //   msg += 'Next match starts at ' + t_pattern.lastIndex;
          //   console.log(Math.random().toString(36).substr(2, 10))
          //   //console.log(msg);
            
          // }
          // console.log('t_htmlString')
          // console.log(t_htmlString)
          // console.log('t_htmlArray')
          // console.log(t_htmlArray)
          
          // let restoredHtmString = t_htmlString
          
          // for (let i=0; i<t_htmlArray.length; i++) {
          //   console.log('t_htmlArray[i]')
          //   console.log(t_htmlArray[i])
          //   restoredHtmString = restoredHtmString.replace(t_htmlArray[i].code, t_htmlArray[i].html)
          // }
          // console.log('restoredHtmString')
          // console.log(restoredHtmString)
          
          // console.log(menuItems[0].outerHTML.search(exec("</?\w+\s+[\^>]*>"))
       
       