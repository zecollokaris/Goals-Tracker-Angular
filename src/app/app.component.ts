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
        new Goal(1,'Watch Finding Nemo'),
        new Goal(2,'Buy Cookies'),
        new Goal(3,'Get new Phone Case'),
        new Goal(4,'Get Dog Food'),
        new Goal(5,'Solve math homework'),
        new Goal(6,'Plot my world domination plan'),
    ]
}