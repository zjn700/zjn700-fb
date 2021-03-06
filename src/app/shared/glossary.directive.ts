import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appGlossary]',

})

export class GlossaryDirective {
  private completed=false    
  private testGlossary = [
                          {term: 'Angular', definition: "Javascript Framework built by Google"}, 
                          {term: 'Node', definition: "JavaScript runtime built on Chrome's V8 JavaScript engine"}, 
                          {term: 'node', definition: "JavaScript runtime built on Chrome's V8 JavaScript engine"}, 
                          {term: 'Firebase', definition:'Online N0SQL database provided by Google'},
                          {term: 'nvm', definition: "Node Version Manager"},
                          {term: 'ng', definition: "Angular Command Line Interface (CLI) tool"}
                          ]
  
  constructor() { }

  @HostListener('mouseover') onMouseOver() {
      if (!this.completed) {
        
        let elementList = document.getElementsByClassName("zjn-container"); 
        this.replaceElementsInnerHtml(elementList);
        
        this.completed=true;
      }
  }

  replaceElementsInnerHtml(elementList) {
    let  t_innerHtml = elementList[0].innerHTML
    for (var searchIndex = 0; searchIndex < this.testGlossary.length; searchIndex++) {
      let searchTerm = this.testGlossary[searchIndex].term
      let re = new RegExp("\\b"+searchTerm+"\\b", "g"); 
      let t_replacementHtml = "<span class='glossary' title='" + this.testGlossary[searchIndex].definition +"'>" + searchTerm + "</span>"
      t_innerHtml = t_innerHtml.replace(re, t_replacementHtml)
      elementList[0].innerHTML = t_innerHtml
    }
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
          //               let t_element = this.clearSearchTermFromInnerHtml(listItem, re);
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
                        
          //               t_element = this.restoreSearchTermToInnerHtml(t_ohtml, inHtml, searchTerm);
          //               menuItems[i].outerHTML = t_element;
          //           }
          //         }
          //   }
       
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
        
        
         // for (let i=0; i < elementList.length; i++) {
    //     let searchTerm = '';
    //       for (var searchIndex = 0; searchIndex < this.testGlossary.length; searchIndex++) {
    //         searchTerm = this.testGlossary[searchIndex].term
    //         let re = new RegExp("\\b"+searchTerm+"\\b"); 
    //         console.log('re========')
    //         console.log(re)
    //         let t_html = "<span class='glossary' title='" + this.testGlossary[searchIndex].definition +"'>" + searchTerm + "</span>"
            
    //         // if (elementList[i].outerHTML.indexOf(searchTerm)!=-1) {
              
    //         //       let listItem = elementList[i]
    //         //       let inHtml = elementList[i].innerHTML
    //         //       let t_element = this.clearSearchTermFromInnerHtml(listItem, re);
    //         //       let split_array = t_element.split(re)  //menuItems[i].outerHTML.split(searchTerm)
    //         //       let rejoin_array = [];
                  
    //         //       for (var j = 0; j < split_array.length; j++) {
    //         //           if (j  ==  split_array.length - 1 ){
    //         //             rejoin_array.push(split_array[j])
    //         //           } else {
    //         //               rejoin_array.push(split_array[j])
    //         //               rejoin_array.push(t_html)
    //         //           }
    //         //       }
                  
    //         //       let t_ohtml = ""
  
    //         //       for (var k=0; k < rejoin_array.length; k++) {
    //         //         t_ohtml += rejoin_array[k]
    //         //       }
                  
    //         //       t_element = this.restoreSearchTermToInnerHtml(t_ohtml, inHtml, searchTerm);
    //         //       elementList[i].outerHTML = t_element;
    //         //   }
    // }
      // }