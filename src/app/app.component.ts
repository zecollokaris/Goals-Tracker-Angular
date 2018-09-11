//import keyword for importing modules.
import { Component } from '@angular/core';
import {Goal} from './goal'


//Component annotation is used to add functionality to our code.

//@Component annotation add metadata to our component class.
@Component({
  //selector attribute to defines selector for our components.
  selector: 'app-root',
  //templateUrl define location for template file.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  //We export the class so that we can import it anywhere we need it in the application.
export class AppComponent {
    goals: string[];

  constructor(){
    this.goals = ["Watch Finding Nemo", "Buy Cookies","Get new phonecase"];
  }
}