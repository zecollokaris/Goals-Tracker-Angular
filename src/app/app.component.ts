import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> MyGoals </h1>
    <p>My Goal For Today is {{goal}}</p>
    `
})
export class AppComponent {
  goal = 'Watch Finding Nemo';
}
