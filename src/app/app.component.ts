//import keyword for importing modules.
import { Component } from '@angular/core';
//We first import the Goal class.
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
    goals = [
      new Goal(1, 'Want to add Some Goals', '.', new Date(2018, 3, 14)),
      new Goal(2, 'Add Goals and Keep track of them', '.', new Date(2018, 3, 14)),
      new Goal(3, 'Welcome!!>>', '.', new Date(2018, 3, 14)),

    ]
}