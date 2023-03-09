import { Component } from '@angular/core';
import {lorem, random} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText = lorem.sentence();
  userText = "";
  title = 'harf';

  getValueIndex(value : string){
    this.userText=value;
    console.log(this.userText.split("")); 
  }

  compare(randomLetter : string ,userLetter : string){
    
    if(!userLetter){
      return "empty"; 
    }
    return randomLetter === userLetter ?  "correct" : "wrong";

  }
}
