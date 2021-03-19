import { Component, Input, OnInit } from '@angular/core';
import { RegistrationModel } from '../../Models/RegistrationModel';

@Component({
  selector: 'app-string-reverse',
  templateUrl: './string-reverse.component.html',
  styleUrls: ['./string-reverse.component.scss']
})
export class StringReverseComponent implements OnInit {
 @Input() regModel : RegistrationModel; 
  constructor() { }

  ngOnInit(): void {
  }

  reverseWord(word){ // this function will be fired up by aungular view renderer because that I call this 
                      //function from view this way I make sure that it will be updated on name input change
    if(word != undefined){ 
      let wordArray = word.split("");  // convert string into array  
      wordArray.reverse(); // reverse array
      let reversedWord = wordArray.join(""); // convert array back into string      
      return reversedWord; 
    }
    
   
  }


}
