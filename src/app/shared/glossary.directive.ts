import { Directive, HostListener, ElementRef } from '@angular/core';

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
                          {term: 'nvm', definition: "Node Version Manager"}
                          ]
  // private testGlossary = [
  //                         {term: 'CLI', definition:'Online N0SQL database provided by Google'},
  //                         ]
  
  constructor(private el: ElementRef) { }
  
  //@HostListener('mouseup') onMouseUp() {
  @HostListener('mouseover') onMouseOver() {
      if (!this.completed) {
        let menuItems = document.getElementsByClassName("zjn-container"); 
        console.log('menuItems')
        console.log(menuItems)
        
        // let menuItems = document.getElementsByTagName("LI"); 
          
          
          // var t_children = menuItems.children;
          // console.log('children')
          // console.log(t_children)

          //  <(.*?)</pre> (.*?)
          //  </?\w+\s+[\^>]*>
          var t_li_html = menuItems[0].outerHTML
          console.log('t_li_html')
          console.log(t_li_html)
          // var pattern = "</?\w+\s+[\^>]*>"
          // console.log('pattern')
          // console.log(pattern)
          //console.log("/<?\w*>/.exec(t_li_html)")
          console.log("/<li>/.exec(t_li_html)")
          //console.log(/<?\w+\s+[\^>]*/.exec(t_li_html))
          console.log(/<(.*?)>/.exec(t_li_html))
          
          var t_pattern = /<(.*?)>/g;
          var t_execResultArray;
          var t_htmlArray = []
          var t_htmlString = t_li_html
          var counter = 0
          while ((t_execResultArray = t_pattern.exec(t_li_html)) !== null) {
            var msg = 'Found ' + t_execResultArray[0] + '. ';
            // let t_code = Math.random().toString(36).substr(2, 10)
            //t_htmlArray.push({html: t_execResultArray[0], code: t_code } )
            let t_code = '[[[[['+counter+']]]]]'
            t_htmlArray.push({html: t_execResultArray[0], code: t_code } )
            t_htmlString = t_htmlString.replace(t_execResultArray[0], t_code)
            counter++
            msg += 'Next match starts at ' + t_pattern.lastIndex;
            console.log(Math.random().toString(36).substr(2, 10))
            //console.log(msg);
            
          }
          console.log('t_htmlString')
          console.log(t_htmlString)
          console.log('t_htmlArray')
          console.log(t_htmlArray)
          
          let restoredHtmString = t_htmlString
          
          for (let i=0; i<t_htmlArray.length; i++) {
            console.log('t_htmlArray[i]')
            console.log(t_htmlArray[i])
            restoredHtmString = restoredHtmString.replace(t_htmlArray[i].code, t_htmlArray[i].html)
          }
          console.log('restoredHtmString')
          console.log(restoredHtmString)

          
          
          
          
          //console.log(menuItems[0].outerHTML.search(exec("</?\w+\s+[\^>]*>"))


          console.log(menuItems)
          for (let i=0; i < menuItems.length; i++) {
              let searchTerm = '';
                for (var searchIndex = 0; searchIndex < this.testGlossary.length; searchIndex++) {
                  searchTerm = this.testGlossary[searchIndex].term
                  let t_html = "<span class='glossary' title='" + this.testGlossary[searchIndex].definition +"'>" + searchTerm + "</span>"
                  if (menuItems[i].outerHTML.indexOf(searchTerm)!=-1) {
                    
                      let listItem = menuItems[i]
                      let inHtml = menuItems[i].innerHTML
                      let t_element = this.clearSearchTermFromHtml(listItem, searchTerm);
                      let split_array = t_element.split(searchTerm)  //menuItems[i].outerHTML.split(searchTerm)
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
                      menuItems[i].outerHTML = t_element;
                  }
                }
          }
          this.completed=true;
          //this.el.nativeElement.classList.add('active');
      }
  }
  
  clearSearchTermFromHtml(contentItem, searchTerm){
    const tempTerm = "!@#$%^&*&^%$#@!"
    var oHtml = contentItem.outerHTML;
    var aHtml = oHtml.split(contentItem.innerHTML)
    if (aHtml[0].indexOf(searchTerm)!=-1) {
      var tag1 = aHtml[0].replace(searchTerm, tempTerm )
      console.log(tag1)
      aHtml[0] = tag1
    }
    if (aHtml[1].indexOf(searchTerm)!=-1) {
      var tag2 = aHtml[1].replace(searchTerm, tempTerm )
      console.log(tag2)
      aHtml[1] = tag2
      
    }
    return aHtml[0] + contentItem.innerHTML + aHtml[1]
    // var tag2 = aHtml[1].replace(searchTerm, tempTerm )
    // console.log('tags')
    // console.log(tag1)
    
    
  }
  
  restoreSearchTermToHtml(fullHtml, inHtml, searchTerm){
    console.log('///////////////////////////////////////////////////')
    const tempTerm = "!@#$%^&*&^%$#@!"
    //var oHtml = contentItem.outerHTML;
    //console.log('oHtml')
    //console.log(oHtml)
    // fullHtm.replace(tempTerm, searchTerm )
    // if (fullHtml.indexOf(tempTerm)!=-1) {
    //   var aHtml = fullHtml.split(inHtml)
    //   console.log('inHtml')
    //   console.log(inHtml)
    //   console.log('aHtml')
    //   console.log(aHtml)
    //   console.log(aHtml.length)
    //   if (aHtml[0].indexOf(tempTerm)!=-1) {
    //     var tag1 = aHtml[0].replace(tempTerm, searchTerm )
    //     console.log(tag1)
    //     aHtml[0] = tag1
  
    //   }
    //   if (aHtml[1].indexOf(tempTerm)!=-1) {
    //     var tag2 = aHtml[1].replace(tempTerm, searchTerm )
    //     console.log(tag2)
    //     aHtml[1] = tag2
       
    //   }   
    //   return aHtml[0] + inHtml + aHtml[1]
    // }
    return fullHtml.replace(tempTerm, searchTerm );
  }
}



           // console.log(menuItems[i])
                // console.log(menuItems[i].outerHTML)
                // console.log(menuItems[i].outerHTML.indexOf(searchTerm))
                // console.log((menuItems[i].outerHTML.match(new RegExp(searchTerm, "g")) || []).length); //logs 4
       